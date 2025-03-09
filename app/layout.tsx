import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Potions and Prompts",
  description: "An AI-powered text-based roleplaying game",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚗️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark antialiased`}
      >
        <div className="crt-effects">
          <div className="crt-pixel" />
          <div className="crt-scanline" />
          <div className="crt-vignette" />
        </div>
        <main>
        <div className="flex h-[calc(100vh-2rem)] items-center justify-center">
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
