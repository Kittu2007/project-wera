"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react"
// import { useCartStore } from "@/lib/store"
import { useState, useEffect } from "react" // For hydration check

// Mock Store Hook until store is fully integrated in provider
const useCartStoreMock = () => ({
    items: [
        { id: "1", name: "Ganesh Graphic Hoodie", price: 68.0, quantity: 1, selectedSize: "M", image: "/placeholder-hoodie.jpg" },
        { id: "2", name: "Pastel Knit Sweater", price: 85.0, quantity: 2, selectedSize: "L", image: "/placeholder-sweater.jpg" }
    ],
    removeItem: (id: string) => alert(`Removed ${id}`),
    updateQuantity: (id: string, size: string, q: number) => console.log(id, q),
    subtotal: () => 238.00
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
            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center space-y-4">
                <h1 className="text-3xl font-bold">Your cart is empty</h1>
                <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
                <Link href="/shop">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Your Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <Card key={`${item.id}-${item.selectedSize}`} className="overflow-hidden border-none shadow-sm bg-secondary/20">
                            <CardContent className="p-4 flex gap-4 sm:gap-6 items-center">
                                <div className="h-24 w-24 bg-white rounded-md flex items-center justify-center shrink-0">
                                    <div className="text-xs text-muted-foreground">WERA</div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-base sm:text-lg truncate">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                                    <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.selectedSize!, Math.max(1, item.quantity - 1))}>
                                        <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.selectedSize!, item.quantity + 1)}>
                                        <Plus className="h-3 w-3" />
                                    </Button>
                                </div>

                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500" onClick={() => removeItem(item.id)}>
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <Card className="shadow-soft border-none sticky top-24">
                        <CardContent className="p-6 space-y-6">
                            <h2 className="text-xl font-semibold">Order Summary</h2>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${subtotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping Estimate</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${(subtotal() + 5).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Coupon Mock */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="flex-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <Button variant="secondary">Apply</Button>
                            </div>

                            <Link href="/checkout" className="block">
                                <Button className="w-full text-lg h-12" size="lg">
                                    Proceed to Checkout
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
