import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Grupo Injepol - Tradição e Inteligência em Poliuretano",
    template: "%s | Grupo Injepol"
  },
  description: "Injepol, Fenap e Moramo Brasil — empresas complementares, unidas por qualidade, confiança e excelência técnica em soluções industriais e produtos de poliuretano.",
  keywords: ["poliuretano", "injeção", "moldes", "indústria", "Injepol", "Fenap", "Moramo"],
  authors: [{ name: "Grupo Injepol" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo Injepol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
