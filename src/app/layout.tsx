import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Yoon | Cloud Support Engineer",
  description:
    "Portfolio of Jay Yoon — Cloud Support Engineer at AWS, building AI-integrated applications with Amazon Bedrock, React, and serverless architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <div className="stars-bg" />
        <div className="twinkling-bg" />
        <div className="content-layer">{children}</div>
      </body>
    </html>
  );
}
