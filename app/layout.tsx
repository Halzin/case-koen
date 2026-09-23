import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "../public/fonts/dm-sans-latin-ext.woff2",
  variable: "--font-body",
  display: "swap",
});
const serif = localFont({
  src: [
    { path: "../public/fonts/instrument-serif-latin-ext.woff2", style: "normal", weight: "400" },
    { path: "../public/fonts/instrument-serif-latin.woff2", style: "italic", weight: "400" },
  ],
  variable: "--font-display",
  display: "swap",
});

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
