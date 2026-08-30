"use client";
import Image from "next/image";
import { useLang } from "./language-context";

export function Hero() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-start fade-in-up ${isAr ? "font-[var(--font-cairo)]" : "font-[var(--font-inter)]"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight mb-6 leading-tight mt-6">
              {isAr ? (
                <>
                  تحكم في سمعتك الرقمية بذكاء <br className="hidden md:block" />
                  <span className="gradient-text">في كل مكان على الخريطة</span>
                </>
              ) : (
                <>
                  Control your digital reputation smartly <br className="hidden md:block" />
                  <span className="gradient-text">everywhere on the map</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isAr
                ? "منصة متكاملة تدير تواجد فروعك على الخرائط (Google Maps وغيرها)، وتُحلل مراجعات العملاء باستخدام الذكاء الاصطناعي لترد عليها تلقائياً وتستخرج رؤى قابلة للتنفيذ لزيادة مبيعاتك."
                : "An all-in-one platform to manage your locations on maps (Google Maps, etc.), analyze customer reviews using AI for auto-replies, and extract actionable insights to boost sales."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all shadow-[0_10px_25px_-5px_rgba(14,165,233,0.4)] btn-pulse flex items-center justify-center gap-3"
              >
                {isAr ? "جرب المنصة الآن" : "Try Platform Now"}
                <i className={`fa-solid ${isAr ? "fa-arrow-left" : "fa-arrow-right"}`} aria-hidden />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 text-gray-700 px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-3"
              >
                <i className="fa-regular fa-circle-play text-xl" aria-hidden />
                {isAr ? "شاهد كيف يعمل" : "Watch Demo"}
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0 fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-10 -end-10 w-48 h-48 bg-primary-400 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-blob" />
            <div className="absolute bottom-10 -start-10 w-48 h-48 bg-secondary-400 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-blob animation-delay-2000" />
            <div
              className="relative bg-white/50 backdrop-blur-sm shadow-2xl rounded-[1.5rem] p-2 cursor-pointer transition-transform duration-500 hover:-translate-y-3 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, rgba(14,165,233,0.5), rgba(245,158,11,0.5))",
              }}
            >
              <div className="bg-white rounded-[1.3rem] overflow-hidden shadow-inner">
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="mx-auto bg-gray-800 rounded px-4 py-1 flex items-center gap-2 text-xs text-gray-400 w-1/2 justify-center">
                    <i className="fa-solid fa-lock text-[10px]" /> phonicmaps.com/app
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Dashboard Preview"
                    width={1000}
                    height={600}
                    priority
                    className="w-full h-auto object-cover opacity-95 transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
