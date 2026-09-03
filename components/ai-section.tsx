"use client";
import Image from "next/image";
import { useLang } from "./language-context";

export function AISection() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
              {isAr ? (
                <>
                  لا ترد بـ &quot;شكراً لك&quot; فقط.. <br />
                  <span className="text-primary-600">ردود مخصصة تبني ولاء العملاء</span>
                </>
              ) : (
                <>
                  Don&apos;t just reply with &quot;Thank you&quot;.. <br />
                  <span className="text-primary-600">Custom replies that build loyalty</span>
                </>
              )}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {isAr
                ? "الردود الجاهزة والروتينية تضر بصورتك. نظامنا المدعوم باللغات العصبية (NLP) يقرأ المراجعة كأنه إنسان، يحدد اسم العميل، ما أعجبه، وما لم يعجبه، ليقوم بصياغة رد لبق، مخصص تماماً لكل حالة."
                : "Canned responses harm your brand. Our NLP-powered system reads reviews like a human, identifying the customer's name, likes, and dislikes to craft a polite, personalized response for every case."}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><i className="fa-solid fa-check text-xs" /></span>
                <span className="text-gray-700 font-medium">{isAr ? "يدعم اللغتين العربية والإنجليزية حالياً (وسيتم إضافة المزيد قريباً)." : "Currently supports Arabic and English efficiently (more coming soon)."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><i className="fa-solid fa-check text-xs" /></span>
                <span className="text-gray-700 font-medium">{isAr ? "يتعلم من نبرة صوت علامتك التجارية (رسمي، ودود، شبابي)." : "Learns your brand's tone of voice (formal, friendly, youthful)."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><i className="fa-solid fa-check text-xs" /></span>
                <span className="text-gray-700 font-medium">{isAr ? "إمكانية الموافقة اليدوية قبل النشر أو تفعيل النشر التلقائي." : "Option for manual approval before posting or fully auto-pilot."}</span>
              </li>
            </ul>
            <a href="#demo" className="text-primary-600 font-bold hover:text-primary-700 flex items-center gap-2 group w-fit">
              {isAr ? "استكشف قدرات الذكاء الاصطناعي" : "Explore AI Capabilities"}
              <i className={`fa-solid ${isAr ? "fa-arrow-left group-hover:-translate-x-1" : "fa-arrow-right group-hover:translate-x-1"} transition-transform`} aria-hidden />
            </a>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-secondary-50 rounded-3xl transform rotate-3" />
            <div className="relative bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-900 rounded-t-xl px-4 py-2.5 flex items-center gap-2 border-b border-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <div className="mx-auto bg-gray-800 rounded px-3 py-1 flex items-center gap-2 text-xs text-gray-400 justify-center">
                  <i className="fa-solid fa-lock text-[10px]" /> phonicmaps.com/reviews
                </div>
              </div>
              <div className="overflow-hidden bg-white">
                <Image
                  src="/ai-assist-preview.jpg"
                  alt={isAr ? "AI Assist لإدارة المراجعات - Cafetto cafe" : "AI Assist Review Management - Cafetto cafe"}
                  width={900}
                  height={574}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
