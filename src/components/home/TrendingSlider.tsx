import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react"

// Real Unsplash Images
const TRENDING_PRODUCTS = [
    {
        id: "1",
        name: "Celebrity Art T-Shirt",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "2",
        name: "Mythology Remix Hoodie",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "3",
        name: "Street Graphic Tee",
        price: 26.90,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "4",
        name: "Urban Legend Oversized",
        price: 29.00,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    },
]

export function TrendingSlider() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent">
            <div className="container mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold tracking-tight text-black">Trending Now</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {TRENDING_PRODUCTS.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} className="group">
                            <div className="bg-white rounded-[1.5rem] p-4 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg leading-tight group-hover:text-neutral-700 transition-colors">{product.name}</h3>
                                    <p className="text-sm text-neutral-500 font-medium">New Line</p>
                                    <p className="font-bold text-black">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
