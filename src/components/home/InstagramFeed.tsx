import Link from "next/link"
import { ChevronRight } from "lucide-react"

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
        <section className="py-24 px-6 lg:px-12 bg-transparent w-full max-w-7xl mx-auto">
            <div className="flex flex-col space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Instagram feed</h2>
                    <Link href="#" className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:opacity-70 transition-opacity">
                        See all <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {INSTAGRAM_POSTS.map((post, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-md bg-gray-100 group cursor-pointer aspect-square border border-black/5`}
                        >
                            <img
                                src={post.src}
                                alt="Instagram Post"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="px-10 py-3.5 bg-gray-900 text-white rounded-[0.4rem] text-sm font-semibold hover:bg-black transition-all shadow-md">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    )
}
