import { Gabarito } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/Header";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "MyAnimeList",
  description: "Webiste Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-primary text-[#fff]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
