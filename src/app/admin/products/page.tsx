"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Upload, Plus } from "lucide-react"

export default function AdminProductsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Products</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Add Product Form */}
                <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Add New Product</CardTitle>
                        <CardDescription>Create a new product for your store.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Product Title</label>
                            <Input placeholder="e.g. Graphic Hoodie" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Description</label>
                            <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Product description..." />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Price ($)</label>
                                <Input type="number" placeholder="0.00" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Inventory</label>
                                <Input type="number" placeholder="0" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option>Select category</option>
                                <option>Hoodies</option>
                                <option>T-Shirts</option>
                                <option>Accessories</option>
                            </select>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-peach text-foreground font-semibold hover:opacity-90 transition-opacity">
                            Save Product
                        </Button>
                    </CardContent>
                </Card>

                {/* Image Upload Side */}
                <Card className="border-none shadow-sm h-fit">
                    <CardHeader>
                        <CardTitle>Product Images</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-secondary/50 transition-colors bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                            <Upload className="h-8 w-8 text-muted-foreground mb-4" />
                            <p className="text-sm font-medium">Click to upload</p>
                            <p className="text-xs text-muted-foreground mt-1">or drag and drop</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square bg-secondary rounded-md" />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
