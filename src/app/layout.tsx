
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans, DM_Serif_Text,Abril_Fatface, Playfair_Display, Bodoni_Moda, EB_Garamond, Caveat, Play, Lilita_One, Dancing_Script, Nanum_Gothic, Patrick_Hand, Indie_Flower } from "next/font/google";
import "./globals.css"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ᴘᴏʀᴛꜰᴏʟɪᴏ",
  description: "Had so much fun creating my portfolio",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights you need
  display: "swap", // Prevents font flickering
});

const dm = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playFont = Play({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const nanum = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const handwritten = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const indie = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className}>
      <div className="scrollbar-custom ">
          <main className="flex">
            {children}
          </main>
        </div>
        </body>
    </html>
  );
}
