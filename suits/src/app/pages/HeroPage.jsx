import Image from "next/image";

function Hero() {
  return ( 
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <Image 
        src="/hero.jpeg" 
        fill 
        priority
        alt="Hero Background"
        className="object-cover -z-10 brightness-75" 
      />
      <div className="container mx-auto px-6 md:px-20 text-white">
        <div className="max-w-4xl flex flex-col gap-6 md:gap-8">
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-cinzel)] leading-tight"> 
                Let Your Status Speak 
            </h1>
            <p className="text-lg md:text-xl max-w-xl font-light tracking-wide opacity-90"> 
                Bespoke & Ready-to-Wear Collections for Connoisseurs of Quality 
            </p>
            <button className="w-full md:w-fit px-12 py-5 bg-[#D2B68A] text-black font-bold uppercase tracking-widest hover:bg-[#c4a679] transition-all transform active:scale-95"> 
                Discover
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;