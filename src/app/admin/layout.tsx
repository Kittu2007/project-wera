import Link from "next/link"
import { Package, ShoppingCart, Users, BarChart3, Settings } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Sidebar */}
            <aside className="hidden w-64 border-r bg-white lg:block">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">WERA Admin</Link>
                </div>
                <nav className="flex flex-col space-y-1 p-4">
                    <Link href="/admin" className="flex items-center gap-3 rounded-lg bg-primary/5 px-4 py-3 text-primary font-medium">
                        <BarChart3 className="h-5 w-5" />
                        Overview
                    </Link>
                    <Link href="/admin/orders" className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground hover:bg-gray-100 font-medium">
                        <ShoppingCart className="h-5 w-5" />
                        Orders
                    </Link>
                    <Link href="/admin/products" className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground hover:bg-gray-100 font-medium">
                        <Package className="h-5 w-5" />
                        Products
                    </Link>
                    <Link href="/admin/customers" className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground hover:bg-gray-100 font-medium">
                        <Users className="h-5 w-5" />
                        Customers
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground hover:bg-gray-100 font-medium">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                <header className="flex h-16 items-center border-b bg-white px-6">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </header>
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
