"use client";
import { useLang } from "./language-context";
export function Partners() {
  const { lang } = useLang();
  return (
    <section className="py-12 bg-white relative z-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
            {lang === "ar" ? "يدعم التكامل مع أهم المنصات العالمية" : "Integrates with top global platforms"}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
              <i className="fa-brands fa-google text-2xl text-blue-500" /> Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
