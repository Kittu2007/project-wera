"use client"

import Link from "next/link"

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">

            {/* LEFT COLUMN: Main Form */}
            <div className="w-full lg:w-[55%] xl:w-[60%] bg-white pt-10 pb-24 px-6 lg:px-12 xl:px-24 flex flex-col items-center lg:items-end border-r border-gray-200">
                <div className="w-full max-w-2xl">

                    {/* Header Logo */}
                    <div className="w-full mb-8">
                        <Link href="/" className="text-3xl font-bold tracking-widest text-gray-900 block">
                            WERA
                        </Link>
                    </div>

                    <div className="space-y-10">
                        {/* Contact Form */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-900">Contact</h2>
                                <Link href="/login" className="text-sm text-gray-600 underline hover:text-gray-900 transition-colors">Log in</Link>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email or mobile phone number"
                                    className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <input
                                    type="checkbox"
                                    id="marketing"
                                    defaultChecked
                                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                                />
                                <label htmlFor="marketing" className="text-sm text-gray-600 cursor-pointer select-none">
                                    Email me with news and offers
                                </label>
                            </div>
                        </section>

                        {/* Delivery Form */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-900">Delivery</h2>

                            <div className="space-y-3 pt-1">
                                <div>
                                    <select className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none appearance-none bg-white font-medium text-gray-900 cursor-pointer">
                                        <option value="IN">India</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Apartment, suite, etc. (optional)"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                    <select className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none appearance-none bg-white text-gray-500">
                                        <option value="" disabled selected>State</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="DL">Delhi</option>
                                        <option value="KA">Karnataka</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="PIN code"
                                        className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <input
                                    type="checkbox"
                                    id="save-info"
                                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                                />
                                <label htmlFor="save-info" className="text-sm text-gray-600 cursor-pointer select-none">
                                    Save this information for next time
                                </label>
                            </div>
                        </section>

                        <div className="pt-4">
                            <button className="w-full lg:w-auto px-8 py-4 bg-gray-900 text-white rounded-md text-sm font-bold shadow-lg hover:bg-black transition-all hover:shadow-xl float-right">
                                Pay now
                            </button>
                        </div>

                        <hr className="border-gray-200 mt-16" />

                        <div className="pt-4 flex gap-4 text-xs text-gray-500 font-medium">
                            <Link href="#" className="hover:text-gray-900 transition-colors">Refund policy</Link>
                            <Link href="#" className="hover:text-gray-900 transition-colors">Shipping policy</Link>
                            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy policy</Link>
                            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of service</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Order Summary */}
            <div className="w-full lg:w-[45%] xl:w-[40%] bg-gray-50/50 pt-10 pb-24 px-6 lg:px-12 xl:px-16 flex flex-col items-center lg:items-start border-l border-white shadow-[-1px_0_0_rgba(0,0,0,0.02)]">
                <div className="w-full max-w-md space-y-6">

                    {/* Items List */}
                    <div className="space-y-4">
                        {/* Mock Item */}
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-md bg-white border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80"
                                        alt="Product"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs font-bold flex items-center justify-center rounded-full leading-none">
                                    1
                                </span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-900">CELEBRITY ART T-SHIRT</h3>
                                <p className="text-xs text-gray-500 font-medium mt-0.5">Ash / M</p>
                            </div>

                            <p className="text-sm font-medium text-gray-900">$16.99</p>
                        </div>
                    </div>

                    {/* Discount Input */}
                    <div className="flex gap-3 pt-2">
                        <input
                            type="text"
                            placeholder="Discount code or gift card"
                            className="flex-1 rounded-md border border-gray-300 px-4 py-3.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none placeholder:text-gray-500"
                        />
                        <button className="px-6 py-3.5 bg-gray-200 text-gray-900 text-sm font-bold rounded-md hover:bg-gray-300 transition-colors">
                            Apply
                        </button>
                    </div>

                    {/* Totals */}
                    <div className="space-y-3 pt-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 font-medium">Subtotal</span>
                            <span className="text-gray-900 font-medium">$16.99</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 font-medium">Shipping</span>
                            <span className="text-gray-500 font-medium text-xs">Enter shipping address</span>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <span className="text-gray-900 font-bold text-lg">Total</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 font-medium">USD</span>
                                <span className="text-gray-900 font-bold text-2xl">$16.99</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
