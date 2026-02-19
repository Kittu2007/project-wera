import Link from "next/link"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* GRADIENT AURA (Behind Hero Only) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Top Left Blue/Cyan Glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/60 blur-[100px] rounded-full mix-blend-multiply" />
                {/* Bottom Right Peach/Pink Glow */}
                <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-100/50 blur-[100px] rounded-full mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Content */}
                    <div className="flex flex-col items-start space-y-8">
                        {/* Heading Group */}
                        <div className="space-y-1">
                            {/* MYTHOLOGY */}
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-black leading-[0.9]">
                                MYTHOLOGY
                            </h1>
                            {/* REMIXED */}
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-black leading-[0.9]">
                                REMIXED
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl font-bold text-neutral-500 tracking-wide uppercase">
                            DROP 003: CELEBRITY X MYTH
                        </p>

                        {/* Button */}
                        <Link href="/shop" className="group">
                            <button className="px-10 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
                                Shop now
                            </button>
                        </Link>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        {/* Image Container matching reference proportions (approx 4:5 vertical) */}
                        <div className="relative w-[85%] max-w-[500px] aspect-[4/5] z-10">
                            <img
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                                alt="WERA Model in Graphic Tee"
                                className="object-cover w-full h-full rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
