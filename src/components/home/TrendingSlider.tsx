"use client"

import Link from "next/link"
import { ChevronRight, ChevronLeft, Eye } from "lucide-react"
import { useRef } from "react"

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
    {
        id: "5",
        name: "Ganesh Graphic Tee",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    },
]

export function TrendingSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350 // Approximate card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-24 px-6 lg:px-12 bg-white border-b border-gray-50">
            <div className="container mx-auto space-y-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-black">Trending Now</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors flex items-center justify-center outline-none focus:ring-2 focus:ring-black/20"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors flex items-center justify-center outline-none focus:ring-2 focus:ring-black/20"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {TRENDING_PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[280px] md:min-w-[300px] lg:min-w-[0] lg:flex-1 group relative snap-start"
                        >
                            <Link href={`/product/${product.id}`} className="block h-full">
                                {/* Card Image */}
                                <div className="aspect-[3.5/4.5] rounded-3xl overflow-hidden bg-gray-100 relative mb-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Quick View Button (Desktop Hover) */}
                                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                                        <button className="w-full py-3 bg-white rounded-xl text-sm font-bold text-black shadow-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-1 px-1">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium">New Line</p>
                                    <div className="pt-1">
                                        <span className="font-bold text-black text-lg">${product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
