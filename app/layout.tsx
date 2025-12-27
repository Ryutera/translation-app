import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import HeaderAuth from "@/components/HeaderAuth";
import { Suspense } from "react";
import RootAuthProvider from "@/components/RootAuthProvider";



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL("https://peraphrase.com"),
  title: {
    default: "Peraphrase",
    template: "%s | Peraphrase",
  },
  description:
    "Translate into Japanese that actually sounds natural. Rewrite your sentences into Japanese the way native speakers really use it.",
  openGraph: {
    title: "Peraphrase",
    description:
      "Translate into Japanese that actually sounds natural. Rewrite your sentences into Japanese the way native speakers really use it.",
    url: "https://peraphrase.com",
    siteName: "Peraphrase",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Peraphrase - Natural Japanese paraphrasing tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peraphrase",
    description:
      "Translate into Japanese that actually sounds natural. Rewrite your sentences into Japanese the way native speakers really use it.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootAuthProvider>
      <Suspense><HeaderAuth/></Suspense>
          {children}
          </RootAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
