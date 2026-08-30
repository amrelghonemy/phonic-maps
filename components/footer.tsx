"use client";
import { useLang } from "./language-context";

export function Footer() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Phonic-maps-logo.svg" alt="Phonic Maps" className="h-14 object-contain bg-transparent" width={260} height={67} onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
              <span className="font-extrabold text-xl sr-only">Phonic<span className="text-primary-500">Maps</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {isAr ? "منصة SaaS الرائدة في الشرق الأوسط لإدارة التواجد الرقمي على الخرائط والمراجعات باستخدام تقنيات الذكاء الاصطناعي التوليدي." : "The leading SaaS platform in the MENA region for managing digital map presence and reviews using Generative AI."}
            </p>
            <div className="flex gap-4">
              <a aria-label="Twitter" href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"><i className="fa-brands fa-twitter" /></a>
              <a aria-label="LinkedIn" href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"><i className="fa-brands fa-linkedin-in" /></a>
              <a aria-label="Instagram" href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"><i className="fa-brands fa-instagram" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{isAr ? "المنتج" : "Product"}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-primary-400">{isAr ? "المميزات" : "Features"}</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary-400">{isAr ? "كيف يعمل الـ AI" : "How AI Works"}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary-400">{isAr ? "الأسعار" : "Pricing"}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">{isAr ? "التكامل" : "Integrations"}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{isAr ? "الدعم والمصادر" : "Support & Resources"}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-400">{isAr ? "مركز المساعدة" : "Help Center"}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">{isAr ? "المدونة" : "Blog"}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">{isAr ? "دليل المطورين" : "Developers API"}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400">{isAr ? "تواصل معنا" : "Contact Us"}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{isAr ? "تواصل" : "Contact"}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3"><i className="fa-solid fa-envelope mt-1 text-primary-500" /> hello@phonicmaps.com</li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-phone mt-1 text-primary-500" /> +966 50 000 0000</li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-location-dot mt-1 text-primary-500" /> {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-start">
          <p className="text-gray-500 text-sm">&copy; 2026 Phonic Maps. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white">{isAr ? "الشروط والأحكام" : "Terms & Conditions"}</a>
            <a href="#" className="text-gray-500 hover:text-white">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
