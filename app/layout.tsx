import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

const isDevelopment = process.env.NODE_ENV === 'development';
const title = isDevelopment ? "(dev) Potions and Prompts" : "Potions and Prompts";

export const metadata: Metadata = {
  title: title,
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
