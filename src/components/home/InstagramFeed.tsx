import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"

const INSTAGRAM_POSTS = [
    { id: 1, image: "/placeholder-insta-1.jpg" },
    { id: 2, image: "/placeholder-insta-2.jpg" },
    { id: 3, image: "/placeholder-insta-3.jpg" },
    { id: 4, image: "/placeholder-insta-4.jpg" },
    { id: 5, image: "/placeholder-insta-5.jpg" },
    { id: 6, image: "/placeholder-insta-6.jpg" },
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
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                            {/* <Image src={post.image} alt="Instagram post" fill className="object-cover" /> */}
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
