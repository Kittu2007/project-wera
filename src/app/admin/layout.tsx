import Link from "next/link"
import { Package, ShoppingCart, Users, BarChart3, Tag, Home, ChevronDown, Search } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-transparent p-6 gap-8">
            {/* Sidebar Floating Glass Panel */}
            <aside className="hidden w-72 flex-col justify-between rounded-[2.5rem] bg-white/70 border border-white/60 shadow-soft backdrop-blur-xl lg:flex p-8">
                <div>
                    <div className="flex items-center mb-12">
                        <Link href="/" className="text-3xl font-bold tracking-widest text-gray-900">WERA</Link>
                    </div>

                    <nav className="flex flex-col space-y-2">
                        <Link href="/admin" className="flex items-center gap-4 rounded-full bg-blue-100/50 px-6 py-4 text-blue-900 font-semibold shadow-sm transition-all hover:bg-blue-100">
                            <Home className="h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link href="/admin/orders" className="flex items-center gap-4 rounded-full px-6 py-4 text-gray-500 font-medium transition-all hover:bg-white/50 hover:text-gray-900">
                            <ShoppingCart className="h-5 w-5" />
                            Orders
                        </Link>
                        <Link href="/admin/products" className="flex items-center gap-4 rounded-full px-6 py-4 text-gray-500 font-medium transition-all hover:bg-white/50 hover:text-gray-900">
                            <Package className="h-5 w-5" />
                            Products
                        </Link>
                        <Link href="/admin/customers" className="flex items-center gap-4 rounded-full px-6 py-4 text-gray-500 font-medium transition-all hover:bg-white/50 hover:text-gray-900">
                            <Users className="h-5 w-5" />
                            Customers
                        </Link>
                        <Link href="/admin/discounts" className="flex items-center gap-4 rounded-full px-6 py-4 text-gray-500 font-medium transition-all hover:bg-white/50 hover:text-gray-900">
                            <Tag className="h-5 w-5" />
                            Discounts
                        </Link>
                        <Link href="/admin/analytics" className="flex items-center gap-4 rounded-full px-6 py-4 text-gray-500 font-medium transition-all hover:bg-white/50 hover:text-gray-900">
                            <BarChart3 className="h-5 w-5" />
                            Analytics
                        </Link>
                    </nav>
                </div>

                {/* User Profile */}
                <div className="flex items-center justify-between mt-8 p-2 rounded-full hover:bg-white/40 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            {/* Avatar placeholder */}
                            <img src="https://i.pravatar.cc/150?img=11" alt="John Doe" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-semibold text-sm text-gray-900">John Doe</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500 mr-2" />
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col pt-4">
                {/* Top Header */}
                <header className="flex h-16 items-center justify-between px-2 mb-6">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden text-gray-800">
                            <Home className="w-6 h-6" /> {/* Mobile menu toggle icon placeholder */}
                        </button>
                        <h1 className="text-lg font-medium text-gray-500">Home</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="p-2 rounded-full hover:bg-white/50 text-gray-500 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-pink-100 text-pink-600 transition-colors relative">
                            <div className="w-2 h-2 rounded-full bg-blue-400 absolute top-1 right-2"></div>
                            {/* Bell Icon, replacing lucide bell for quick placeholder since not imported */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
                            <img src="https://i.pravatar.cc/150?img=11" alt="John Doe" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}
