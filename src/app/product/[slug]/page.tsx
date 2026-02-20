"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Star, Plus, Minus, ChevronDown, ChevronUp } from "lucide-react"

const PRODUCT = {
    id: "1",
    name: "CELEBRITY ART T-SHIRT",
    price: 16.99,
    description: "A classic fit t-shirt that's soft and comfortable. This features a ribbed collar, short sleeves and is designed to sit at the hips.",
    images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
        { name: "White", code: "#FFFFFF" },
        { name: "Black", code: "#000000" },
        { name: "Ash", code: "#D1D5DB" }
    ]
}

export default function ProductPage() {
    const params = useParams()
    const [selectedSize, setSelectedSize] = useState<string>("M")
    const [selectedColor, setSelectedColor] = useState<string>("White")
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [openAccordion, setOpenAccordion] = useState<string | null>(null)

    const handleAddToCart = () => {
        alert(`Added ${quantity} x ${PRODUCT.name} (${selectedSize} / ${selectedColor}) to cart!`)
    }

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* LEFT COLUMN: Images */}
                    <div className="flex-1 flex flex-col-reverse lg:flex-row gap-6">
                        {/* Thumbnails */}
                        <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                            {PRODUCT.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`w-20 h-24 lg:w-24 lg:h-32 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 transition-all ${selectedImage === i ? 'ring-2 ring-gray-900 ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="flex-1 bg-gray-100 rounded-md overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[800px]">
                            <img src={PRODUCT.images[selectedImage]} alt={PRODUCT.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Details */}
                    <div className="lg:w-[400px] xl:w-[480px] flex flex-col space-y-10 pt-4">

                        {/* Header Info */}
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{PRODUCT.name}</h1>
                            <p className="text-2xl font-bold text-gray-900">${PRODUCT.price.toFixed(2)}</p>

                            <div className="flex items-center gap-2">
                                <div className="flex text-black">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="font-bold text-sm text-gray-900">5.0</span>
                                <span className="text-sm text-gray-400 font-medium">(400 Reviews)</span>
                            </div>

                            <p className="text-gray-500 font-medium leading-relaxed pt-2">
                                {PRODUCT.description}
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Selectors */}
                        <div className="space-y-8">

                            {/* Color Selector */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-900 text-sm">Color</span>
                                    <span className="text-gray-500 text-sm font-medium">{selectedColor}</span>
                                </div>
                                <div className="flex gap-4">
                                    {PRODUCT.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${selectedColor === color.name ? 'ring-2 ring-gray-900 ring-offset-2' : 'ring-1 ring-gray-200'}`}
                                            style={{ backgroundColor: color.code }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-900 text-sm">Size</span>
                                    <button className="text-gray-400 text-sm font-medium underline">Rules of choice</button>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {PRODUCT.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all border ${selectedSize === size
                                                    ? "bg-gray-900 text-white border-gray-900"
                                                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="space-y-4">
                                <span className="font-bold text-gray-900 text-sm block">Quantity</span>
                                <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-4 bg-gray-900 text-white rounded-md text-sm font-bold shadow-lg hover:bg-black transition-all hover:shadow-xl active:scale-[0.98]"
                            >
                                Add to Bag
                            </button>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Accordions */}
                        <div className="space-y-2">
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleAccordion('details')}
                                    className="w-full py-4 flex justify-between items-center text-left"
                                >
                                    <span className="font-bold text-gray-900 text-sm">Details & Care</span>
                                    {openAccordion === 'details' ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openAccordion === 'details' && (
                                    <div className="pb-4 text-gray-500 text-sm leading-relaxed">
                                        Machine wash cold. Do not bleach. Tumble dry low. Iron low heat.
                                    </div>
                                )}
                            </div>
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleAccordion('delivery')}
                                    className="w-full py-4 flex justify-between items-center text-left"
                                >
                                    <span className="font-bold text-gray-900 text-sm">Delivery & Returns</span>
                                    {openAccordion === 'delivery' ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openAccordion === 'delivery' && (
                                    <div className="pb-4 text-gray-500 text-sm leading-relaxed">
                                        Free shipping on all orders over $50. Returns accepted within 30 days.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
