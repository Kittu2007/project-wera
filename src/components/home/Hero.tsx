import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 px-4 md:py-32">
            <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
                <div className="flex flex-col items-start space-y-6 z-10">
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        MYTHOLOGY
                        <br />
                        <span className="text-primary/80">REMIXED</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium">
                        Drop 003: Celebrity x Myth
                    </p>
                    <div className="flex gap-4">
                        <Link href="/shop">
                            <Button size="lg" className="rounded-full px-8 text-lg font-semibold cursor-pointer pointer-events-auto">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative z-10 w-full max-w-md mx-auto md:max-w-none md:mr-0">
                    {/* Focused Glow behind model */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent-blue/30 via-accent-purple/30 to-accent-peach/30 blur-[80px] -z-10 rounded-full" />

                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                            alt="WERA Model"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
