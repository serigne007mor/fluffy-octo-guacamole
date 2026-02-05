import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian by Azertica - AI-Powered Real Estate Platform",
  description: "AI-powered real estate communication platform for Dubai agencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
