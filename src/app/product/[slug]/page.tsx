"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Star, ShieldCheck, Truck } from "lucide-react"
// import { useCartStore } from "@/lib/store" // Commented out to avoid build errors before store is fully ready/used

// Mock Product Data (would fetch based on slug)
const PRODUCT = {
    id: "1",
    name: "Ganesh Graphic Hoodie",
    price: 68.0,
    description: "A premium heavyweight hoodie featuring our signature Ganesh graphic implementation. Printed on demand using eco-friendly inks.",
    images: ["/placeholder-hoodie.jpg", "/placeholder-back.jpg"],
    sizes: ["S", "M", "L", "XL", "2XL"],
}

export default function ProductPage() {
    const params = useParams()
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)

    // const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size")
            return
        }
        // addItem(PRODUCT, selectedSize, quantity)
        alert(`Added ${quantity} x ${PRODUCT.name} (${selectedSize}) to cart!`)
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-[4/5] bg-secondary/30 rounded-3xl overflow-hidden flex items-center justify-center shadow-soft">
                        <div className="text-muted-foreground/20 text-6xl font-black">WERA</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-secondary/20 rounded-xl cursor-pointer hover:ring-2 ring-primary/20 transition-all" />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-balance">{PRODUCT.name}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-2xl font-semibold">${PRODUCT.price.toFixed(2)}</span>
                            <div className="flex items-center text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm text-neutral-500 ml-2">(128 reviews)</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-neutral-600 leading-relaxed">
                        {PRODUCT.description}
                    </p>

                    <div className="space-y-4">
                        <label className="text-sm font-medium">Select Size</label>
                        <div className="flex flex-wrap gap-3">
                            {PRODUCT.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all
                    ${selectedSize === size
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-input hover:border-primary/50"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {/* Quantity Selector Mock */}
                        <div className="flex items-center gap-4 py-4">
                            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                            <span className="w-8 text-center text-lg">{quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>+</Button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="flex-1 text-lg h-14 rounded-full" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 text-lg h-14 rounded-full">
                            Buy Now
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-8 border-t text-sm text-neutral-500">
                        <div className="flex items-center gap-3">
                            <Truck className="w-5 h-5 text-primary" />
                            <span>Printed fresh order. Ships in 3–5 days.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <span>Secure payment through Stripe or Razorpay.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
