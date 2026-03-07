import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#0f221c] text-white py-16 px-6 md:px-20 border-t border-white/10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                <div className="flex flex-col gap-6">
                    <h4 className="font-[family-name:var(--font-cinzel)] text-[#D2B68A] tracking-widest uppercase">Services</h4>
                    <nav className="flex flex-col gap-3 opacity-70 text-sm font-light">
                        <Link href="/sizing" className="hover:opacity-100 transition-opacity">Sizing</Link>
                        <Link href="/delivery" className="hover:opacity-100 transition-opacity">Delivery</Link>
                        <Link href="/payment" className="hover:opacity-100 transition-opacity">Payment</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-[family-name:var(--font-cinzel)] text-[#D2B68A] tracking-widest uppercase">Collections</h4>
                    <nav className="flex flex-col gap-3 opacity-70 text-sm font-light">
                        <Link href="/suits" className="hover:opacity-100 transition-opacity">Suits</Link>
                        <Link href="/shirts" className="hover:opacity-100 transition-opacity">Shirts</Link>
                        <Link href="/accessories" className="hover:opacity-100 transition-opacity">Accessories</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-[family-name:var(--font-cinzel)] text-[#D2B68A] tracking-widest uppercase">Atelier</h4>
                    <nav className="flex flex-col gap-3 opacity-70 text-sm font-light">
                        <Link href="/history" className="hover:opacity-100 transition-opacity">History</Link>
                        <Link href="/fabrics" className="hover:opacity-100 transition-opacity">Fabrics</Link>
                        <Link href="/contacts" className="hover:opacity-100 transition-opacity">Contacts</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                    <h4 className="font-[family-name:var(--font-cinzel)] text-[#D2B68A] tracking-widest uppercase">Subscribe</h4>
                    <div className="relative border-b border-white/30 pb-2">
                        <input 
                            type="email" 
                            placeholder="Email signup" 
                            className="bg-transparent border-none outline-none w-full text-sm font-light placeholder:opacity-50"
                        />
                        <span className="absolute right-0 top-0 text-[#D2B68A]">✦</span>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <Link href="#" className="hover:text-[#D2B68A] transition-colors"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-[#D2B68A] transition-colors"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-[#D2B68A] transition-colors"><FaTelegramPlane /></Link>
                        <Link href="#" className="hover:text-[#D2B68A] transition-colors"><FaYoutube /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;