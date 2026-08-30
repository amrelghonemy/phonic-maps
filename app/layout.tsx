import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phonic Maps - منصة إدارة التواجد الرقمي والمراجعات",
  description:
    "منصة متكاملة تدير تواجد فروعك على خرائط جوجل وتُحلل مراجعات العملاء بالذكاء الاصطناعي. All-in-one platform to manage locations on Google Maps and analyze reviews with AI.",
  keywords: ["Google Maps", "Local SEO", "Reviews", "AI", "Phonic Maps", "إدارة المراجعات"],
  openGraph: {
    title: "Phonic Maps - Digital Presence Platform",
    description: "Control your digital reputation smartly everywhere on the map",
    type: "website",
    locale: "ar_SA",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${cairo.variable} ${inter.variable} antialiased bg-white text-gray-800 selection:bg-primary-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
