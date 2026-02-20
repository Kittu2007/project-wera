"use client"

import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useRef, useState } from "react"

// Using varied high-quality Unsplash placeholders
const TRENDING_PRODUCTS = [
    {
        id: "1",
        name: "Celebrity Art T-Shirt",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "2",
        name: "Celebrity Art T-Shirt",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "3",
        name: "Celebrity Art T-Shirt",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "4",
        name: "Celebrity Art T-Shirt",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
    },
]

export function TrendingSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-24 px-6 lg:px-12 bg-transparent relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trending Now</h2>
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-1 text-gray-400 hover:text-black transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-1 text-gray-400 hover:text-black transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {TRENDING_PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[280px] w-[280px] snap-start relative"
                            onMouseEnter={() => setHoveredCard(product.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Link href={`/product/${product.id}`} className="block h-full relative cursor-pointer group">
                                {/* Card Image */}
                                <div className="aspect-[3/4.5] bg-gray-100 rounded-md overflow-hidden relative shadow-sm border border-black/5">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />

                                    {/* Hover Panel */}
                                    {hoveredCard === product.id && (
                                        <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-white via-white to-transparent flex flex-col items-center justify-end text-center h-[50%]">
                                            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-black/5 flex flex-col items-center w-full">
                                                <span className="font-bold text-gray-900 mb-1">Quick View</span>
                                                <p className="text-xs text-gray-500 leading-tight mb-2">
                                                    Quick view a product in this quick view of a product fields
                                                </p>
                                                <span className="font-bold text-gray-900 mb-3">${product.price.toFixed(2)}</span>
                                                <button className="bg-black text-white text-xs font-semibold px-6 py-2 rounded-md w-full">
                                                    Quick View
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Static Details (Hidden when hovered, to match reference effect) */}
                                <div className={`pt-4 ${hoveredCard === product.id ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                                    <h3 className="font-bold text-gray-900 text-[15px]">{product.name}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">New Line</p>
                                    <p className="font-bold text-gray-900 text-[15px] mt-1">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Dots indicator (static visual only for reference match) */}
                <div className="flex justify-center gap-2 mt-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </section>
    )
}
