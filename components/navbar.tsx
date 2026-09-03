"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./language-context";

export function Navbar() {
  const { lang, toggle, arabicFlag } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // scroll progress
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      // auto-hide on scroll down, show on scroll up
      if (!open) {
        if (y > 120 && y > lastY.current) setHidden(true);
        else setHidden(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const linkCls =
    "relative font-semibold text-gray-600 hover:text-primary-600 transition-colors py-2 after:absolute after:bottom-0 after:start-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-secondary-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || open
          ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
          : "bg-transparent border-transparent"
      } ${scrolled ? "py-1" : "py-3"}`}
      aria-label="Main"
    >
      {/* scroll progress */}
      <div
        className="absolute bottom-0 start-0 h-[2px] bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}>
          <a href="#" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Phonic-maps-logo.svg"
              alt="Phonic Maps"
              className={`object-contain bg-transparent border-0 shadow-none ring-0 rounded-none px-0 py-0 transition-all duration-500 group-hover:scale-[1.02] ${
                scrolled ? "h-12" : "h-14"
              }`}
              width={260}
              height={67}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const fallback = document.getElementById("logo-fallback");
                if (fallback) fallback.classList.remove("hidden");
              }}
            />
            <span id="logo-fallback" className="hidden font-extrabold text-dark text-xl tracking-tight">
              Phonic<span className="text-primary-600">Maps</span>
            </span>
          </a>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className={linkCls}>
              {lang === "ar" ? "المميزات" : "Features"}
            </a>
            <a href="#how-it-works" className={linkCls}>
              {lang === "ar" ? "كيف نعمل" : "How it Works"}
            </a>
            <a href="#pricing" className={linkCls}>
              {lang === "ar" ? "الأسعار" : "Pricing"}
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm ${
                scrolled ? "px-5 py-2.5" : "px-6 py-3 shadow-[0_8px_20px_rgba(14,165,233,0.3)]"
              }`}
            >
              {lang === "ar" ? "تسجيل الدخول" : "Login"}
              <i className={`fa-solid ${lang === "ar" ? "fa-arrow-left" : "fa-arrow-right"} text-xs opacity-80`} aria-hidden />
            </a>

            <button
              onClick={toggle}
              aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              title={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200/60 shadow-sm hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-[22px] leading-none"
            >
              <span aria-hidden className="transition-transform duration-300">
                {lang === "ar" ? "🇬🇧" : arabicFlag}
              </span>
            </button>

            <button
              id="mobile-menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200/60 flex items-center justify-center text-gray-700 hover:text-primary-600 hover:bg-white shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <i className={`fa-solid ${open ? "fa-xmark rotate-90" : "fa-bars"} text-lg transition-all duration-300`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - modern slide + blur */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_16px_40px_rgba(15,23,42,0.12)] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "max-h-[420px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1">
          <a
            onClick={() => setOpen(false)}
            href="#features"
            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 transition-colors"
          >
            {lang === "ar" ? "المميزات" : "Features"}
            <i className={`fa-solid ${lang === "ar" ? "fa-chevron-left" : "fa-chevron-right"} text-xs opacity-40`} />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#how-it-works"
            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 transition-colors"
          >
            {lang === "ar" ? "كيف نعمل" : "How it Works"}
            <i className={`fa-solid ${lang === "ar" ? "fa-chevron-left" : "fa-chevron-right"} text-xs opacity-40`} />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#pricing"
            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 transition-colors"
          >
            {lang === "ar" ? "الأسعار" : "Pricing"}
            <i className={`fa-solid ${lang === "ar" ? "fa-chevron-left" : "fa-chevron-right"} text-xs opacity-40`} />
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 px-4 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-600/20 hover:shadow-xl hover:from-primary-700 hover:to-primary-600 transition-all"
          >
            {lang === "ar" ? "تسجيل الدخول" : "Login"}
          </a>
        </div>
      </div>
    </nav>
  );
}
