import Link from "next/link"
import { ArrowRight } from "lucide-react"

const INSTAGRAM_POSTS = [
    "https://images.unsplash.com/photo-1529139574466-a3005c407164?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80",
]

export function InstagramFeed() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent">
            <div className="container mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold tracking-tight text-black">Instagram feed</h2>
                    <Link href="#" className="text-lg font-medium hover:underline flex items-center gap-2">
                        See all <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {INSTAGRAM_POSTS.map((src, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl bg-neutral-100 group cursor-pointer ${i === 1 || i === 4 ? 'col-span-1 row-span-1' : 'aspect-square'}`}
                        >
                            <img
                                src={src}
                                alt="Instagram Post"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 rounded-full border hover:bg-black hover:text-white transition-colors font-medium border-black text-black">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    )
}
