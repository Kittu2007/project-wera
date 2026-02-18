import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MOCK_TRENDING = [
    {
        id: "1",
        name: "Ganesh Graphic Hoodie",
        price: 68.0,
        image: "/placeholder-hoodie.jpg", // We would need real images
    },
    {
        id: "2",
        name: "WERA & Graphic Cap",
        price: 68.0,
        image: "/placeholder-cap.jpg",
    },
    {
        id: "3",
        name: "Celebrity Tote Bag",
        price: 34.0,
        image: "/placeholder-bag.jpg",
    },
    {
        id: "4",
        name: "Graphic Tee",
        price: 45.0,
        image: "/placeholder-tee.jpg",
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
                        <Card key={product.id} className="border-none shadow-none bg-secondary/30">
                            <CardContent className="p-0">
                                <div className="aspect-square relative rounded-xl overflow-hidden bg-white mb-4 flex items-center justify-center">
                                    <div className="text-muted-foreground/20 text-4xl font-black">WERA</div>
                                    {/* <Image src={product.image} alt={product.name} fill className="object-cover" /> */}
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
