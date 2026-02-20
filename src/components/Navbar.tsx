"use client"

import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-xl border-b border-white/20">
            <div className="container mx-auto px-8 h-24 flex items-center justify-between">
                {/* Left Links */}
                <div className="flex items-center gap-8 w-1/3">
                    <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors">Home</Link>
                    <Link href="/products" className="text-sm font-medium hover:text-gray-500 transition-colors">Products</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-gray-500 transition-colors">Contact</Link>
                </div>

                {/* Center Logo */}
                <div className="w-1/3 flex justify-center">
                    <Link href="/" className="text-2xl font-bold tracking-[0.15em] uppercase text-gray-900">
                        WERA
                    </Link>
                </div>

                {/* Right Area */}
                <div className="flex items-center justify-end gap-6 w-1/3">
                    <Link href="/login" className="text-sm font-medium hover:text-gray-500 transition-colors whitespace-nowrap">
                        Sign In
                    </Link>
                    <button className="hover:text-gray-500 transition-colors">
                        <Search className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                    </button>
                    <Link href="/cart" className="hover:text-gray-500 transition-colors relative">
                        <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
