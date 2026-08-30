"use client";
import { useLang } from "./language-context";

type Feature = {
  icon: string;
  bg: string;
  color: string;
  titleAr: string; titleEn: string;
  descAr: string; descEn: string;
};

const features: Feature[] = [
  {
    icon: "fa-map-pin", bg: "bg-blue-50", color: "text-blue-600",
    titleAr: "إدارة مركزية للمواقع", titleEn: "Centralized Location Mgmt",
    descAr: "قم بتحديث بيانات جميع فروعك (ساعات العمل، الصور، العناوين) على خرائط جوجل وغيرها من المنصات من لوحة تحكم واحدة بضغطة زر.",
    descEn: "Update data across all branches (hours, photos, addresses) on Google Maps and other platforms from one dashboard instantly.",
  },
  {
    icon: "fa-robot", bg: "bg-purple-50", color: "text-purple-600",
    titleAr: "ردود ذكية تلقائية (AI)", titleEn: "Smart Auto-Replies (AI)",
    descAr: "يقوم نموذج الذكاء الاصطناعي الخاص بنا بقراءة المراجعات وفهم سياقها، وصياغة ردود احترافية ومخصصة فوراً لكل عميل بلغته.",
    descEn: "Our AI model reads reviews, understands context, and crafts professional, personalized replies instantly in the customer's language.",
  },
  {
    icon: "fa-chart-pie", bg: "bg-green-50", color: "text-green-600",
    titleAr: "تحليل المشاعر والاتجاهات", titleEn: "Sentiment & Trend Analysis",
    descAr: "نحلل آلاف المراجعات لنستخرج لك المشاعر العامة (إيجابية/سلبية)، ونحدد نقاط القوة والضعف في فروعك بناءً على كلمات العملاء.",
    descEn: "We analyze thousands of reviews to extract overall sentiment (positive/negative) and identify strengths and weaknesses.",
  },
  {
    icon: "fa-ranking-star", bg: "bg-yellow-50", color: "text-yellow-600",
    titleAr: "تحسين الظهور المحلي (Local SEO)", titleEn: "Improve Local SEO",
    descAr: "عزز تصدّرك في نتائج بحث خرائط جوجل (Local Pack) من خلال إدارة ملفاتك بشكل احترافي وتحسين ظهور نشاطك التجاري لعملائك المحتملين.",
    descEn: "Boost your ranking in Google Maps search results (Local Pack) by professionally managing your profiles and improving visibility to potential customers.",
  },
  {
    icon: "fa-shield-halved", bg: "bg-red-50", color: "text-red-600",
    titleAr: "معالجة التقييمات السلبية بذكاء", titleEn: "Smart Handling of Negative Reviews",
    descAr: "نظام رد تلقائي مخصص للتعامل مع التقييمات المنخفضة (نجمة أو نجمتين) بطريقة احترافية تتوافق مع خوارزميات جوجل حتى في أوقات غيابك.",
    descEn: "A customized auto-reply system to handle low ratings (1-2 stars) professionally, aligned with Google's algorithms even when you are away.",
  },
  {
    icon: "fa-file-contract", bg: "bg-teal-50", color: "text-teal-600",
    titleAr: "تحليلات وتقارير دقيقة", titleEn: "Accurate Analytics & Reports",
    descAr: "نقدم لك تحليلات متقدمة لبياناتك المستمدة مباشرة من جوجل، مع خطة قريبة لدمج تقنيات الذكاء الاصطناعي لتقديم رؤى وتوصيات تلقائية ومبتكرة.",
    descEn: "We offer advanced analytics based directly on Google data, with upcoming AI integrations to provide innovative automated insights and recommendations.",
  },
];

export function Features() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2">{isAr ? "مميزات المنصة" : "Platform Features"}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            {isAr ? "كل ما تحتاجه لإدارة سمعتك الرقمية في مكان واحد" : "Everything you need to manage digital reputation in one place"}
          </h3>
          <p className="text-gray-600 text-lg">
            {isAr ? "وفر وقتك وجهدك، ودع الذكاء الاصطناعي يتولى مهمة التفاعل مع عملائك وتحليل آرائهم لتحسين خدماتك." : "Save time and effort. Let AI handle interacting with customers and analyzing feedback to improve your services."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.titleEn} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group text-start flex flex-col justify-center cursor-pointer min-h-[110px]">
              <div className="flex items-center gap-4 w-full relative z-10">
                <div className={`w-14 h-14 rounded-xl ${f.bg} flex items-center justify-center ${f.color} text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fa-solid ${f.icon}`} aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-dark m-0 group-hover:text-primary-600 transition-colors">{isAr ? f.titleAr : f.titleEn}</h4>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 w-full">
                <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-gray-600 leading-relaxed pt-4">{isAr ? f.descAr : f.descEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
