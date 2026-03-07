import suits from "../suits.js";

function Assortment() {
    return ( 
        <section className="py-16 md:py-24 px-6 bg-[#eae1d0]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl text-center text-[#18362C] mb-16 font-[family-name:var(--font-cinzel)] tracking-widest">
                    NEW ARRIVALS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {suits.map((suit) => (
                        <article key={suit.id} className="flex flex-col  group cursor-pointer gap-3">
                            <div className="aspect-[3/4] bg-stone-300 mb-6 overflow-hidden relative">
                                {/* <Image src={suit.image} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                            </div>
                            <h3 className="text-xl font-[family-name:var(--font-cinzel)] mb-2 tracking-tighter">
                                {suit.name}
                            </h3>
                            <p className="text-sm tracking-[0.2em] uppercase opacity-60">
                                {suit.price}
                            </p>
                            <button className="bg-[#18362C] hover:text-[#D2B68A] transition-colors h-12 text-white">BUY</button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Assortment;