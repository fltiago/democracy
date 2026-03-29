import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fraude e Eleições: o que esperar de 2026?",
  description:
    "Pesquisadores analisam dados do TSE com métodos estatísticos rigorosos. O que a ciência diz sobre a integridade das eleições brasileiras — e o que monitoraremos em 2026.",
  openGraph: {
    title: "Fraude e Eleições: o que esperar de 2026?",
    description:
      "Pesquisadores analisam dados do TSE com métodos estatísticos rigorosos. O que a ciência diz sobre as eleições brasileiras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
