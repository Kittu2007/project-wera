import Link from "next/link"

export function Hero() {
    return (
        <section className="relative w-full py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-start space-y-8 z-10">
                    <div className="space-y-1">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-black leading-[0.9]">
                            MYTHOLOGY
                            <br />
                            REMIXED
                        </h1>
                        <p className="text-lg md:text-xl font-semibold text-gray-500 tracking-wide uppercase mt-4">
                            DROP 003: CELEBRITY X MYTH
                        </p>
                    </div>

                    <Link href="/shop">
                        <button className="px-10 py-4 bg-black text-white rounded-lg text-lg font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                            Shop now
                        </button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative z-10 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] aspect-[3.5/4.5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                            alt="WERA Model"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle inner shadow overlay */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
