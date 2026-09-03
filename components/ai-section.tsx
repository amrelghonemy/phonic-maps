"use client";
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
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-start">
              <h4 className="text-sm font-bold text-gray-500 mb-4 border-b pb-2">{isAr ? "محاكاة حية للرد التلقائي" : "Live Auto-Reply Simulation"}</h4>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">{isAr ? "أ.م" : "AM"}</div>
                    <div>
                      <h5 className="font-bold text-dark text-sm">{isAr ? "أحمد محمد" : "Ahmed Mohamed"}</h5>
                      <div className="flex gap-1 text-yellow-400 text-xs">
                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{isAr ? "قبل ساعتين" : "2 hours ago"}</span>
                </div>
                <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {isAr ? "“التجربة كانت جيدة جداً، الطعام ممتاز في فرع التجمع، ولكن المشكلة الوحيدة كانت التأخير في تقديم الطلب، انتظرنا حوالي 40 دقيقة! أتمنى تحسين هذه النقطة.”" : "“The experience was very good, food is excellent at the downtown branch, but the only issue was the delay in serving the order, we waited about 40 minutes! Hope you improve this point.”"}
                </p>
              </div>
              <div className="flex justify-center mb-6 py-2">
                <div className="flex items-center gap-2 text-primary-600 text-sm font-semibold bg-primary-50 px-4 py-2 rounded-full">
                  <i className="fa-solid fa-spinner fa-spin" /> {isAr ? "Phonic Maps يقوم بالتحليل..." : "Phonic Maps is analyzing..."}
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary-50 border border-primary-100 p-4 rounded-lg ms-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-primary-700 text-sm flex items-center gap-1"><i className="fa-solid fa-robot" /> {isAr ? "رد المنشأة" : "Business Reply"}</span>
                    <span className="text-[10px] bg-primary-200 text-primary-800 px-2 py-0.5 rounded">{isAr ? "تم التوليد بواسطة AI" : "AI Generated"}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {isAr ? (
                      <>أهلاً بك أستاذ أحمد،<br />سعداء جداً أن الطعام في فرع التجمع نال إعجابك! 🌟<br />لكننا نعتذر بشدة عن التأخير الذي واجهته في تقديم الطلب (40 دقيقة وقت طويل فعلاً). لقد قمنا بتوجيه ملاحظتك المهمة لإدارة الفرع لتحسين سرعة الخدمة وتجنب حدوث ذلك مستقبلاً.<br />نتمنى رؤيتك قريباً لتقديم تجربة مثالية بالكامل. شكراً لملاحظتك البناءة!</>
                    ) : (
                      <>Hello Mr. Ahmed,<br />We are very glad you enjoyed the food at the downtown branch! 🌟<br />However, we sincerely apologize for the delay you experienced with your order (40 minutes is indeed too long). We have forwarded your important feedback to the branch management to improve service speed and prevent this in the future.<br />We hope to see you soon to provide a flawless experience. Thank you for your constructive feedback!</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
