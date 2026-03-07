import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",      
  display: "swap",                
});

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-montserrat", 
  display: "swap",
});

export const metadata = {
  title: "AURUM | Bespoke Collection",
  description: "Bespoke & Ready-to-Wear Collections for Connoisseurs of Quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-[#eae1d0] font-[family-name:var(--font-montserrat)]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}