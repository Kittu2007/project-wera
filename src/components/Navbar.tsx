"use client"

import Link from "next/link"
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/shop", label: "Shop" },
    { href: "/files", label: "Files" },
    { href: "/contact", label: "Contact" },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                        {/* Shield-like Logo Placeholder */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L3 7V12C3 17.52 6.84 22.74 12 24C17.16 22.74 21 17.52 21 12V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">W</text>
                        </svg>
                    </div>
                    {/* Text hidden on small screens if needed, but reference shows no text, just logo? Or Logo + Text? keeping Text for brand safety */}
                    <span className="text-xl font-bold tracking-tight">WERA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="hidden sm:block text-gray-600 hover:text-black transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <Link href="/cart" className="relative text-gray-600 hover:text-black transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </Link>
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t py-4 px-6 bg-white space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="block text-sm font-medium text-gray-600 hover:text-black py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
