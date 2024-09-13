import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Towards Ikhlaas",
  description: "Towards Ikhlaas Foundation landing page. Under construction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-7Q1NB219J8" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
