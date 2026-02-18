import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock Data
const PRODUCTS = [
    { id: "1", name: "Ganesh Graphic Hoodie", price: 68.0, image: "/placeholder-hoodie.jpg", slug: "ganesh-graphic-hoodie" },
    { id: "2", name: "WERA & Graphic Cap", price: 68.0, image: "/placeholder-cap.jpg", slug: "wera-graphic-cap" },
    { id: "3", name: "Celebrity Tote Bag", price: 34.0, image: "/placeholder-bag.jpg", slug: "celebrity-tote-bag" },
    { id: "4", name: "Graphic Tee", price: 45.0, image: "/placeholder-tee.jpg", slug: "graphic-tee" },
    { id: "5", name: "Pastel Knit Sweater", price: 85.0, image: "/placeholder-sweater.jpg", slug: "pastel-knit-sweater" },
    { id: "6", name: "Classic Logo Tee", price: 35.0, image: "/placeholder-logo.jpg", slug: "classic-logo-tee" },
]

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">Shop All</h1>
                    <p className="text-muted-foreground mt-2">Explore our latest drops and essentials.</p>
                </div>

                {/* Simple Filter mock */}
                <select className="bg-background border rounded-md px-3 py-2 text-sm">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`}>
                        <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-secondary/20">
                            <CardContent className="p-0">
                                <div className="aspect-[4/5] relative bg-white overflow-hidden rounded-t-lg flex items-center justify-center">
                                    <div className="text-muted-foreground/20 text-4xl font-black">WERA</div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
            </div>
        </div>
    )
}
