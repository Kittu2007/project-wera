import Link from "next/link"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center bg-transparent">
            {/* Custom Hero Gradients */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-200/50 blur-[130px] rounded-full mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-orange-200/50 blur-[140px] rounded-full mix-blend-multiply" />
                <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] bg-pink-200/40 blur-[120px] rounded-full mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-12 relative z-10 w-full pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="flex flex-col items-start space-y-6 lg:pl-8">
                        <div className="space-y-0">
                            {/* MYTHOLOGY REMIXED */}
                            <h1 className="text-[5.5rem] xl:text-[7rem] font-bold tracking-tight text-gray-900 leading-[1.05]">
                                MYTHOLOGY<br />REMIXED
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-[1.1rem] font-bold text-gray-800 tracking-widest uppercase mt-4">
                            DROP 003: CELEBRITY X MYTH
                        </p>

                        {/* Button */}
                        <Link href="/shop" className="mt-8 block">
                            <button className="px-10 py-3.5 bg-gray-900 text-white rounded-[0.4rem] text-sm font-semibold hover:bg-black transition-all shadow-md">
                                Shop now
                            </button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[550px] aspect-[4/4.5] z-10">
                            {/* Using high quality unsplash image as placeholder for the model tee */}
                            <img
                                src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
                                alt="WERA Model"
                                className="object-cover w-full h-full rounded-none" // Image in ref has no border radius
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
