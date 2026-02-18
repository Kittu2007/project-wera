import { Star } from "lucide-react"

const REVIEWS = [
    {
        id: 1,
        text: "Top-notch streetwear! Soft fabric, clean print, and the relaxed fit is exactly what I wanted. Definitely copping the next drop.",
        author: "Alex",
        handle: "@alexcreates",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        text: "The aura collection is insane. I love how subtle the colors are but they still pop. Shipping was super fast too!",
        author: "Jordan",
        handle: "@jordansstyle",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        text: "Finally a brand that gets the oversized aesthetic right. The quality feels premium, not that cheap merch feel. 10/10.",
        author: "Riya",
        handle: "@riyawears",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    }
]

export function ReviewsSection() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent relative">
            {/* Localized Aura Glow for Reviews */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-accent-purple/20 to-accent-peach/20 blur-[120px] -z-10 rounded-full pointer-events-none" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4 text-black">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-neutral-700 font-medium mb-8 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-black">{review.author}</p>
                                    <p className="text-sm text-neutral-500">{review.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
