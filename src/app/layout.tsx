import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DX・業務効率化情報サイト",
    template: "%s | DX・業務効率化情報サイト",
  },
  description:
    "自治体職員・公務員向けのDX、業務効率化、条例改正、契約知識に関する専門情報を提供",
  keywords: ["DX", "業務効率化", "条例改正", "契約知識", "自治体", "公務員"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} antialiased bg-background text-foreground dark:bg-gray-900 dark:text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
