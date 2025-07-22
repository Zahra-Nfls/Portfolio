
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  description: "Had so much fun creating my portfolio",
  icons: {
    icon: "images/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>• Nfls</title>
    </head>
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
