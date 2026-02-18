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
            {/* Gradient Aura for this section */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[40%] h-[40%] bg-blue-100 blur-[100px] -z-10 rounded-full opacity-60" />
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[40%] h-[40%] bg-orange-100 blur-[100px] -z-10 rounded-full opacity-60" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow border border-gray-50/50">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 font-medium mb-8 leading-relaxed min-h-[80px]">
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{review.author}</p>
                                    <p className="text-sm text-gray-500">{review.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
