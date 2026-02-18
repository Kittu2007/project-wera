import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

const DROP_PRODUCTS = [
    { id: 1, name: "Celebrity Art T-Shirts", price: 15.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Celebrity Art T-Shirts", price: 15.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Celebrity Art T-Shirts", price: 15.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Celebrity Art T-Shirts", price: 15.99, image: "https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?auto=format&fit=crop&w=600&q=80" },
]

export function FeaturedCollection() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent">
            <div className="container mx-auto space-y-12">
                <div className="flex items-center justify-between pb-4">
                    <h2 className="text-3xl font-bold tracking-tight text-black max-w-sm leading-tight">Drop-style featured collection</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DROP_PRODUCTS.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="aspect-[3.5/4.5] rounded-3xl overflow-hidden bg-gray-100 mb-4 relative shadow-sm hover:shadow-lg transition-all duration-500">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-1 px-1">
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-black">{product.name}</h3>
                                <p className="font-bold text-black">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
