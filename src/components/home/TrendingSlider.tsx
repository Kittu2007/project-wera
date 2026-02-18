import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const MOCK_TRENDING = [
    {
        id: "1",
        name: "Ganesh Graphic Hoodie",
        price: 68.0,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "2",
        name: "WERA & Graphic Cap",
        price: 28.0,
        image: "https://images.unsplash.com/photo-1588117260148-44b8a8707ec7?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "3",
        name: "Celebrity Tote Bag",
        price: 34.0,
        image: "https://images.unsplash.com/photo-1590874102987-9caa41619297?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "4",
        name: "Graphic Tee",
        price: 45.0,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
    },
]

export function TrendingSlider() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto space-y-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
                    <Link href="/shop" className="text-sm font-medium hover:underline">
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {MOCK_TRENDING.map((product) => (
                        <Card key={product.id} className="border-none shadow-none bg-transparent">
                            <CardContent className="p-0 group cursor-pointer">
                                <div className="aspect-square relative rounded-xl overflow-hidden bg-secondary/20 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
