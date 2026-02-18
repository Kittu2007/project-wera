import Link from "next/link"
import { ArrowRight } from "lucide-react"

const INSTAGRAM_POSTS = [
    { src: "https://images.unsplash.com/photo-1529139574466-a3005c407164?auto=format&fit=crop&w=500&q=80", tall: true },
    { src: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80", tall: false },
    { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80", tall: false },
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80", tall: false },
    { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80", tall: true },
    { src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80", tall: false },
]

export function InstagramFeed() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent">
            <div className="container mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-black">Instagram feed</h2>
                    <Link href="#" className="flex items-center gap-2 text-sm font-semibold hover:underline">
                        See all <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {INSTAGRAM_POSTS.map((post, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer aspect-square`}
                        >
                            <img
                                src={post.src}
                                alt="Instagram Post"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all font-semibold text-black">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    )
}
