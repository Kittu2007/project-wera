import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200/40 bg-transparent py-8 mt-auto">
            <div className="container mx-auto px-12 flex justify-between items-center text-sm text-gray-600 font-medium">
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-black transition-colors">Links</Link>
                    <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
                    <Link href="/shipping" className="hover:text-black transition-colors">Shippings</Link>
                    <Link href="/" className="hover:text-black transition-colors">Links</Link>
                    <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>
                <div>
                    © 2024 WERA.com
                </div>
            </div>
        </footer>
    )
}
