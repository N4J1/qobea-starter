import "./globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
   title: "Qobea - Comming Soon...",
   description: "Prelaunch page for Qobea clothing brand.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={unbounded.className}>{children}</body>
      </html>
   );
}
