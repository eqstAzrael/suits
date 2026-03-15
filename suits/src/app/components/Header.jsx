"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <header className="bg-[#18362C] text-white flex justify-between text-shadow-lg/10 items-center px-6 md:px-20 py-5 sticky top-0 z-[100]">
            <h1 className="text-2xl md:text-3xl text-[#D2B68A] font-[family-name:var(--font-cinzel)] z-[110]">
                <Link href="/"> AURUM </Link> 
            </h1>

            <nav className="hidden md:flex gap-10 lg:gap-15 text-[16px] font-medium tracking-wide">
                <Link href="/" className="hover:text-[#D2B68A] transition-colors"> HOME </Link>
                <Link href="/shop" className="hover:text-[#D2B68A] transition-colors"> SHOP </Link>
                <Link href="/about" className="hover:text-[#D2B68A] transition-colors"> ABOUT </Link>
            </nav>

            <div className="flex items-center gap-4 z-[110]">
                <Image src="/search.png" width={28} height={28} alt="Search" className="cursor-pointer" />
                
                <button 
                    className="flex flex-col gap-1.5 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-8 h-0.5 bg-[#D2B68A] transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-[#D2B68A] transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-8 h-0.5 bg-[#D2B68A] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            <div className={`fixed inset-0 bg-[#18362C] flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 md:hidden z-[105] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <Link href="/" onClick={() => setIsMenuOpen(false)}> HOME </Link>
                <Link href="/shop" onClick={() => setIsMenuOpen(false)}> SHOP </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}> ABOUT </Link>
            </div>
        </header>
    );
}

export default Header;