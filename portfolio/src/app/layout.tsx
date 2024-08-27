
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ᴘᴏʀᴛꜰᴏʟɪᴏ",
  description: "Had so much fun creating my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="scrollbar-custom ">
          <main className="flex ">
            {children}
          </main>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
