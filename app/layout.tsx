import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://koen-rio-concept-2026.fluffy-lark-5789.chatgpt.site"),
  title: { default: "KŌEN — Cozinha japonesa contemporânea", template: "%s | KŌEN" },
  description: "KŌEN é um projeto conceitual de restaurante japonês contemporâneo no Rio de Janeiro. Técnica, produto e tempo em cada gesto.",
  openGraph: { title: "KŌEN — Cozinha japonesa contemporânea", description: "Precisão em cada gesto. Uma experiência japonesa contemporânea no Rio de Janeiro.", type: "website", locale: "pt_BR", siteName: "KŌEN" },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
