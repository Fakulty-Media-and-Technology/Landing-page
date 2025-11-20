import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/Provider";
import { Footer, Header } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ReePlay Inc",
  description: "Reeplay is a creator-first platform for Black entertainment. Upload, earn, and reach global audiences with PPV, ads, and live streaming tools built for African storytellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
