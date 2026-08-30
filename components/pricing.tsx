"use client";
import { useState } from "react";
import { useLang } from "./language-context";

export function Pricing() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const [yearly, setYearly] = useState(true);

  const fmt = (monthly: number) => {
    if (!yearly) return `$${monthly}`;
    const y = Math.round(monthly * 12 * 0.8);
    return `$${y}`;
  };
  const suffix = yearly ? (isAr ? "/سنوياً" : "/year") : isAr ? "/شهرياً" : "/month";
  const saveNote = isAr ? "توفير 20% عند الدفع السنوي" : "Save 20% with annual billing";

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2">{isAr ? "خطط الأسعار" : "Pricing Plans"}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">{isAr ? "استثمر في سمعتك الرقمية بأسعار شفافة" : "Invest in your digital reputation with transparent pricing"}</h3>
          <p className="text-gray-600 text-lg">{isAr ? "اختر الباقة المناسبة لحجم أعمالك. ابدأ بفرع واحد أو أدر المئات." : "Choose the plan that fits your business size. Start with one branch or manage hundreds."}</p>

          <div className="mt-8 flex justify-center items-center gap-3">
            <span className={`font-medium ${!yearly ? "text-dark font-bold" : "text-gray-600"}`}>{isAr ? "شهري" : "Monthly"}</span>
            <button
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className={`w-14 h-7 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${yearly ? "bg-primary-600" : "bg-gray-300"}`}
              aria-label="Toggle billing cycle"
              dir="ltr"
            >
              <span className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform ${yearly ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={`font-bold flex items-center gap-1 ${yearly ? "text-dark" : "text-gray-600 font-medium"}`}>
              {isAr ? "سنوي" : "Annually"} <span className="text-xs text-secondary-700 bg-secondary-100 px-2 py-0.5 rounded-full">{isAr ? "خصم 20%" : "20% OFF"}</span>
            </span>
          </div>
          {yearly && <p className="text-sm text-green-600 mt-2 font-medium">{saveNote}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-start">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
            <h4 className="text-xl font-bold text-dark mb-2">{isAr ? "الأساسية (Starter)" : "Starter"}</h4>
            <p className="text-gray-500 text-sm mb-6">{isAr ? "مثالية للأعمال الصغيرة وفرع واحد." : "Perfect for small businesses and single branch."}</p>
            <div className="mb-6"><span className="text-4xl font-extrabold text-dark">{fmt(29)}</span><span className="text-gray-500">{suffix}</span></div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-600">
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "إدارة فرع واحد" : "Manage 1 branch"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "حتى 100 رد ذكاء اصطناعي/شهر" : "Up to 100 AI replies/mo"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "ربط مع خرائط جوجل فقط" : "Google Maps integration only"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "تقارير شهرية أساسية" : "Basic monthly reports"}</li>
            </ul>
            <a href="#contact" className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-dark font-bold py-3 rounded-xl transition-colors">{isAr ? "اختر الباقة" : "Choose Plan"}</a>
          </div>

          {/* Pro */}
          <div className="bg-dark rounded-2xl p-8 border-2 border-primary-500 shadow-2xl relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 end-1/2 -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
              {isAr ? "الأكثر طلباً" : "Most Popular"}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{isAr ? "الاحترافية (Pro)" : "Professional (Pro)"}</h4>
            <p className="text-gray-400 text-sm mb-6">{isAr ? "للشركات المتوسطة والمتنامية." : "For growing and medium businesses."}</p>
            <div className="mb-1"><span className="text-4xl font-extrabold text-white">{fmt(89)}</span><span className="text-gray-400">{suffix}</span></div>
            {yearly && <p className="text-xs text-primary-300 mb-4">{isAr ? "يُدفع سنوياً" : "Billed annually"}</p>}
            {!yearly && <div className="mb-4" />}
            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
              <li className="flex gap-3"><i className="fa-solid fa-check text-primary-400 mt-1" /> {isAr ? "حتى 5 فروع" : "Up to 5 branches"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-primary-400 mt-1" /> {isAr ? "ردود ذكاء اصطناعي غير محدودة" : "Unlimited AI replies"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-primary-400 mt-1" /> {isAr ? "ربط مع جميع المنصات المدعومة" : "All supported integrations"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-primary-400 mt-1" /> {isAr ? "حملات جلب المراجعات (SMS/Email)" : "Review generation campaigns"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-primary-400 mt-1" /> {isAr ? "تحليل المشاعر والكلمات المفتاحية" : "Sentiment & keywords analysis"}</li>
            </ul>
            <a href="#contact" className="w-full block text-center bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary-900/20">{isAr ? "جرب مجاناً لمدة 14 يوم" : "Start 14-Day Free Trial"}</a>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
            <h4 className="text-xl font-bold text-dark mb-2">{isAr ? "الشركات (Enterprise)" : "Enterprise"}</h4>
            <p className="text-gray-500 text-sm mb-6">{isAr ? "للسلاسل الكبيرة والوكالات الإعلانية." : "For large chains and agencies."}</p>
            <div className="mb-6"><span className="text-2xl font-extrabold text-dark">{isAr ? "تسعير مخصص" : "Custom Pricing"}</span></div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-600">
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "عدد فروع غير محدود" : "Unlimited branches"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "مدير حساب شخصي (CSM)" : "Dedicated Account Manager"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "ربط عبر الـ API مع أنظمتك (CRM/POS)" : "API access for CRM/POS"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "تقارير مخصصة للإدارة العليا" : "Custom executive reports"}</li>
              <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1" /> {isAr ? "علامة تجارية بيضاء (White-label) متاح" : "White-label options available"}</li>
            </ul>
            <a href="#contact" className="w-full block text-center border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold py-3 rounded-xl transition-colors">{isAr ? "تواصل مع المبيعات" : "Contact Sales"}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
