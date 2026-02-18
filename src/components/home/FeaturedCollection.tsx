import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedCollection() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-12 md:p-24 isolate">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 -z-10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
                            alt="Collection Background"
                            className="object-cover w-full h-full opacity-40 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-2xl space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                            The Essentials Collection
                        </h2>
                        <p className="text-lg text-neutral-300">
                            Timeless pieces designed for everyday comfort and style.
                            Ethically sourced and printed on demand to reduce waste.
                        </p>
                        <Link href="/shop">
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                Shop Collection
                            </Button>
                        </Link>
                    </div>

                    {/* Decorative Gradient Blob */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent-purple/30 blur-[120px] rounded-full pointer-events-none -z-10" />
                </div>
            </div>
        </section>
    )
}
