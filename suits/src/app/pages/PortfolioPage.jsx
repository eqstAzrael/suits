import Image from "next/image";

function Portfolio() {
    return (
        <section className="bg-[#18362C] text-white py-16 md:py-24 px-6 md:px-20 overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                
                <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] order-1">
                    <Image 
                        src="/Image.png" 
                        alt="Bespoke process"
                        fill 
                        className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                <div className="flex-1 space-y-8 order-2 text-center md:text-left">
                    <div className="space-y-2">
                        <p className="text-[#D2B68A] tracking-[0.3em] text-sm md:text-base font-medium">INDIVIDUAL PORTFOLIO</p>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-cinzel)] leading-tight">
                            YOUR UNIQUE LOOK
                        </h2>
                    </div>
                    
                    <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">
                        Tailoring to your measurements. <br className="hidden md:block" />
                        Handmade, the finest fabrics.
                    </p>

                    <button className="w-full md:w-fit px-10 py-4 border border-[#D2B68A] text-[#D2B68A] hover:bg-[#D2B68A] hover:text-white transition-all duration-300 font-medium tracking-widest uppercase text-sm">
                        Book a Fitting
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;