
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "か • 𝐊𝐚𝐫𝐦𝐚",
  description: "Had so much fun creating my portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
      <div className="font-indie">
          <main className="flex-grow">
                  {children}
          </main>
        </div>
        </body>
    </html>
  );
}
