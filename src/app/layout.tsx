import type { Metadata } from "next";
import { Chakra_Petch, Outfit } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "National Pokemon Encyclopedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${chakra.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#07080c] text-[#e8eaed] font-[family-name:var(--font-body)] antialiased overflow-x-hidden">
        {/* Scanlines overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[9999]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
