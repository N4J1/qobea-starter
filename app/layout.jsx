import "./globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
   title: "Rebowrn - New generation Agency",
   description: "New generation Agency.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={unbounded.className}>{children}</body>
      </html>
   );
}
