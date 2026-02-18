import Link from "next/link"
import { ChevronRight, ChevronLeft, Eye, ShoppingCart } from "lucide-react"

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
        price: 35.90,
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
            <div className="container mx-auto space-y-10">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <h2 className="text-3xl font-bold tracking-tight text-black">Trending Now</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {TRENDING_PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative">
                            {/* Card Image */}
                            <div className="aspect-[3.5/4.5] rounded-3xl overflow-hidden bg-gray-100 relative mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Quick View Button Overlay */}
                                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="w-full py-3 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-white text-black">
                                        <Eye className="w-4 h-4" /> Quick View
                                    </button>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-black">{product.name}</h3>
                                <p className="text-sm text-gray-500">New Line</p>
                                <p className="font-bold text-black text-lg">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
