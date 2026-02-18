import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const REVIEWS = [
    {
        id: 1,
        name: "Sarah J.",
        rating: 5,
        text: "Absolutely love the unique design and soft fabric! WERA is my new favorite.",
        date: "Jun, 2023",
    },
    {
        id: 2,
        name: "Mike T.",
        rating: 5,
        text: "Quality and fit are amazing. Shipping was faster than expected for POD.",
        date: "July, 2023",
    },
    {
        id: 3,
        name: "Jessica R.",
        rating: 4,
        text: "Great designs, very artistic. The hoodie is so comfortable.",
        date: "Aug, 2023",
    },
]

export function ReviewsSection() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto space-y-10">
                <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REVIEWS.map((review) => (
                        <Card key={review.id} className="bg-background shadow-soft border-none">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-accent-peach flex items-center justify-center text-accent-foreground font-bold">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">{review.name}</div>
                                        <div className="text-xs text-muted-foreground">{review.date}</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-muted"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
