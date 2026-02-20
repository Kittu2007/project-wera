"use client"

import Link from "next/link"
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

// Mock Store Hook
const useCartStoreMock = () => ({
    items: [
        { id: "1", name: "CELEBRITY ART T-SHIRT", price: 16.99, quantity: 1, selectedSize: "M", selectedColor: "Ash", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80" },
        { id: "2", name: "CELEBRITY ART T-SHIRT", price: 15.99, quantity: 2, selectedSize: "L", selectedColor: "Black", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" }
    ],
    removeItem: (id: string) => alert(`Removed ${id}`),
    updateQuantity: (id: string, size: string, q: number) => console.log(id, q),
    subtotal: () => 48.97
})

export default function CartPage() {
    const { items, removeItem, updateQuantity, subtotal } = useCartStoreMock()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-6 py-32 flex flex-col items-center justify-center space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
                <p className="text-gray-500 font-medium">Looks like you haven't added anything yet.</p>
                <Link href="/shop" className="px-8 py-3 bg-gray-900 text-white rounded-md font-bold hover:bg-black transition-colors">
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Cart</h1>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-8">
                        {items.map((item) => (
                            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 pb-8 border-b border-gray-100 last:border-0">
                                {/* Image */}
                                <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col pt-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-[15px]">{item.name}</h3>
                                            <p className="text-sm font-medium text-gray-500 mt-1">{item.selectedColor} / {item.selectedSize}</p>
                                        </div>
                                        <button
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            onClick={() => removeItem(item.id)}
                                            aria-label="Remove item"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>

                                    <div className="mt-auto flex justify-between items-end">
                                        {/* Quantity Selector */}
                                        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 border border-black/5">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, Math.max(1, item.quantity - 1))}
                                                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-10 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        <p className="font-bold text-gray-900 text-lg">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50/50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 text-sm font-medium mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>
                            </div>

                            <hr className="border-gray-200 mb-6" />

                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold text-gray-900">Total</span>
                                <span className="font-bold text-gray-900 text-xl">${subtotal().toFixed(2)}</span>
                            </div>

                            <Link href="/checkout" className="block">
                                <button className="w-full py-4 px-6 bg-gray-900 text-white rounded-md text-sm font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                                    Checkout
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
