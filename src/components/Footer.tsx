import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-16 px-6 lg:px-12">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">W</span>
                    </div>
                </Link>

                {/* Nav */}
                <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <Link href="/products" className="hover:text-black transition-colors">Products</Link>
                    <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
                    <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                </nav>

                {/* Social */}
                <div className="flex gap-6 text-gray-400">
                    <Link href="#" className="hover:text-black transition-colors"><Facebook className="w-5 h-5" /></Link>
                    <Link href="#" className="hover:text-black transition-colors"><Twitter className="w-5 h-5" /></Link>
                    <Link href="#" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></Link>
                </div>

                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} WERA. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
