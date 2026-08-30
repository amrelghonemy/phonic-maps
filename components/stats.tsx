"use client";
import { useLang } from "./language-context";

export function Stats() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const items = [
    { val: "+40%", titleAr: "زيادة في الظهور", titleEn: "Visibility Increase", descAr: "في نتائج بحث خرائط جوجل", descEn: "In Google Maps search results", grad: "from-blue-400 to-primary-500" },
    { val: "3x", titleAr: "مضاعفة التقييمات", titleEn: "Reviews Multiplier", descAr: "بفضل حملات الدعوة التلقائية", descEn: "Thanks to automated invite campaigns", grad: "from-green-400 to-secondary-500" },
    { val: "95%", titleAr: "توفير في الوقت", titleEn: "Time Saved", descAr: "المستغرق للرد يدوياً على العملاء", descEn: "Spent manually replying to customers", grad: "from-purple-400 to-pink-500" },
    { val: "100%", titleAr: "تحليل للمشاعر", titleEn: "Sentiment Analysis", descAr: "معرفة دقيقة بما يحبه ويكرهه عملائك", descEn: "Accurate insights on what customers like/dislike", grad: "from-yellow-400 to-orange-500" },
  ];
  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{isAr ? "البيانات هي نفط العصر، استخرجها من مراجعاتك" : "Data is the new oil, extract it from your reviews"}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isAr ? "لا تكتفِ بجمع النجوم. لوحة تحليلات Phonic Maps تحول آراء العملاء إلى قرارات استراتيجية تزيد من أرباحك." : "Don't just collect stars. Phonic Maps' analytics board turns customer opinions into strategic decisions that increase profits."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((it) => (
            <div key={it.val} className="p-6">
              <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${it.grad} mb-2`}>{it.val}</div>
              <p className="text-xl font-bold mb-1">{isAr ? it.titleAr : it.titleEn}</p>
              <p className="text-gray-400 text-sm">{isAr ? it.descAr : it.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
