import Link from "next/link"
import { Instagram } from "lucide-react"

const INSTAGRAM_POSTS = [
    { id: 1, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1529139574466-a3005c407164?auto=format&fit=crop&w=400&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=400&q=80" },
    { id: 5, image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=400&q=80" },
    { id: 6, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" },
]

export function InstagramFeed() {
    return (
        <section className="py-20 px-4 bg-secondary/20">
            <div className="container mx-auto space-y-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Instagram className="h-6 w-6" />
                        <h2 className="text-2xl font-bold tracking-tight">On the 'Gram</h2>
                    </div>
                    <Link href="#" className="text-sm font-medium hover:underline">
                        @wera_official
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {INSTAGRAM_POSTS.map((post) => (
                        <div
                            key={post.id}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
                        >
                            <img
                                src={post.image}
                                alt="Instagram post"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                <Instagram className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
