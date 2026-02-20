import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

const DROP_PRODUCTS = [
    { id: "1", name: "Celebrity Art T-Shirt", price: 16.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { id: "2", name: "Celebrity Art T-Shirt", price: 15.99, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" },
    { id: "3", name: "Celebrity Art T-Shirt", price: 18.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },
    { id: "4", name: "Celebrity Art T-Shirt", price: 16.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
]

export function FeaturedCollection() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">Drop-style featured <br className="hidden sm:block" />collection</h2>
                    <div className="flex gap-4">
                        <button className="p-1 text-gray-400 hover:text-black transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-black transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DROP_PRODUCTS.map((product) => (
                        <div key={product.id} className="relative cursor-pointer group">
                            <Link href={`/product/${product.id}`} className="block h-full">
                                {/* Card Image */}
                                <div className="aspect-[3/4.5] bg-gray-100 rounded-md overflow-hidden relative shadow-sm border border-black/5">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Hover layer for Quick View effect (static hidden for now as it's not interactive section in ref but good for consistency) */}
                                </div>

                                {/* Static Details */}
                                <div className="pt-4">
                                    <h3 className="font-bold text-gray-900 text-[15px]">{product.name}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">New Line</p>
                                    <p className="font-bold text-gray-900 text-[15px] mt-1">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
