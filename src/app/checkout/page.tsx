"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label" // Removed to fix build error

// Simple Label component inline for speed as I didn't create ui/label.tsx
function SimpleLabel({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" {...props}>{children}</label>
}

export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">Checkout</h1>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <SimpleLabel htmlFor="email">Email address</SimpleLabel>
                                <input id="email" type="email" placeholder="john@example.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Shipping Address</h2>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <SimpleLabel htmlFor="fname">First name</SimpleLabel>
                                    <input id="fname" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                                </div>
                                <div className="grid gap-2">
                                    <SimpleLabel htmlFor="lname">Last name</SimpleLabel>
                                    <input id="lname" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <SimpleLabel htmlFor="address">Address</SimpleLabel>
                                <input id="address" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <SimpleLabel htmlFor="city">City</SimpleLabel>
                                    <input id="city" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                                </div>
                                <div className="grid gap-2">
                                    <SimpleLabel htmlFor="zip">ZIP Code</SimpleLabel>
                                    <input id="zip" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full h-12 text-lg">Pay Now</Button>
                </div>

                {/* Order Summary */}
                <div className="bg-secondary/20 p-8 rounded-2xl h-fit">
                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        {/* Mock Items */}
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-white rounded-md flex items-center justify-center">
                                <div className="text-xs text-muted-foreground">Image</div>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Ganesh Graphic Hoodie</p>
                                <p className="text-sm text-muted-foreground">Size: M</p>
                            </div>
                            <p className="font-medium">$68.00</p>
                        </div>

                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>$68.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>$5.00</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2">
                                <span>Total</span>
                                <span>$73.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
