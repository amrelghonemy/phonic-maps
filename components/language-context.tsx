"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "ar" | "en";
type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  arabicFlag: string;
  toggle: () => void;
  t: (ar: string, en: string) => string;
};

const arabCountries: Record<string, string> = {
  EG: "🇪🇬", SA: "🇸🇦", AE: "🇦🇪", KW: "🇰🇼", QA: "🇶🇦",
  BH: "🇧🇭", OM: "🇴🇲", JO: "🇯🇴", LB: "🇱🇧", MA: "🇲🇦",
  DZ: "🇩🇿", TN: "🇹🇳", IQ: "🇮🇶", LY: "🇱🇾", SD: "🇸🇩",
  YE: "🇾🇪", SY: "🇸🇾", PS: "🇵🇸",
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const [arabicFlag, setArabicFlag] = useState("🇸🇦");

  useEffect(() => {
    const saved = localStorage.getItem("phonic-lang") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved);

    // geo flag detection - non-blocking, with timeout
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), 2500);
    fetch("https://ipapi.co/json/", { signal: ctrl.signal })
      .then((r) => r.json())
      .then((d) => {
        if (d?.country_code && arabCountries[d.country_code]) {
          setArabicFlag(arabCountries[d.country_code]);
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(id));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("phonic-lang", lang);
  }, [lang]);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const toggle = () => setLang((p) => (p === "ar" ? "en" : "ar"));
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);

  return <LangCtx.Provider value={{ lang, dir, arabicFlag, toggle, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang outside provider");
  return ctx;
}
