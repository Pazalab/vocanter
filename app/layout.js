import { Figtree } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const jarkata = Plus_Jakarta_Sans({ subsets: ['latin']})

export const figtree = Figtree({ subsets: ["latin"], weight: [ '300', '400', '500', '600'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
             <head>
                      <title>Vocanter - Software Development Consulting</title>
             </head>
             <body className={jarkata.className}>{children}</body>
    </html>
  );
}
