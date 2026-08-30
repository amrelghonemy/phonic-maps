"use client";
import { useState } from "react";
import { useLang } from "./language-context";

export function CTA() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-500 opacity-90" />
      <div className="absolute top-0 end-0 -me-20 -mt-20 w-72 h-72 rounded-full bg-white opacity-10 blur-2xl" />
      <div className="absolute bottom-0 start-0 -ms-20 -mb-20 w-96 h-96 rounded-full bg-white opacity-10 blur-2xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{isAr ? "هل أنت مستعد لتصدر نتائج البحث وبناء ثقة عملائك؟" : "Ready to top search results and build customer trust?"}</h2>
        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
          {isAr ? "انضم إلى مئات الشركات التي تعتمد على Phonic Maps في إدارة تواجدها الرقمي. لا تحتاج لبطاقة ائتمانية للبدء." : "Join hundreds of businesses relying on Phonic Maps for their digital presence. No credit card required to start."}
        </p>
        <form onSubmit={onSubmit} noValidate className="max-w-md mx-auto bg-white p-2 rounded-xl flex shadow-2xl">
          <label htmlFor="cta-email" className="sr-only">Email</label>
          <input
            id="cta-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isAr ? "البريد الإلكتروني / Email Address" : "Email Address"}
            required
            className="flex-1 px-4 py-3 outline-none text-gray-700 w-full rounded-s-xl rtl:rounded-s-none rtl:rounded-e-xl focus:ring-2 focus:ring-primary-500"
          />
          <button type="submit" className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-6 py-3 rounded-e-lg rtl:rounded-e-none rtl:rounded-s-lg transition-colors whitespace-nowrap">
            {isAr ? "ابدأ الآن" : "Start Now"}
          </button>
        </form>
        {status === "success" && <p className="text-green-100 text-sm mt-4 font-semibold">{isAr ? "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." : "Success! We'll be in touch soon."}</p>}
        {status === "error" && <p className="text-red-100 text-sm mt-4 font-semibold">{isAr ? "يرجى إدخال بريد إلكتروني صحيح." : "Please enter a valid email address."}</p>}
        {status === "idle" && <p className="text-primary-200 text-sm mt-4">{isAr ? "فترة تجريبية مجانية لمدة 14 يوماً. دعم فني على مدار الساعة." : "14-Day Free Trial. 24/7 Technical Support."}</p>}
      </div>
    </section>
  );
}
