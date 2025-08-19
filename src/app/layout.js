import "./globals.css";
import { Montserrat } from "next/font/google";
import Layout from "@/components/Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Alyson Ullirsch - Portfolio",
  description: "Meu portfólio",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Alyson Ullirsch - Portfólio",
    description: "Portfólio pessoal desenvolvido com Next.js",
    url: "https://alysonullirsch.com",
    siteName: "Portfolio - Alyson Ullirsch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imagem de destaque",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={montserrat.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
