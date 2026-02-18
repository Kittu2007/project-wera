import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative w-full py-20 lg:py-32 px-6 lg:px-12 bg-transparent">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-start space-y-8 z-10">
                    <div className="space-y-2">
                        <h1 className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-black leading-[0.9]">
                            MYTHOLOGY
                            <br />
                            REMIXED
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-neutral-600 tracking-wide mt-4">
                            DROP 003: CELEBRITY X MYTH
                        </p>
                    </div>

                    <Link href="/shop">
                        <Button className="rounded-full px-10 py-8 text-xl font-bold bg-black text-white hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Shop now
                        </Button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative z-10 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[600px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm ring-1 ring-black/5">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
                            alt="WERA Model in White Hoodie"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
