import Link from "next/link"
import { ChevronRight, Bold, Italic, Underline, List, Link as LinkIcon, Image as ImageIcon, Upload } from "lucide-react"

export default function AdminAddProductPage() {
    return (
        <div className="space-y-6 pb-12 font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Link href="/admin/products" className="text-gray-500 hover:text-gray-900 transition-colors">Products</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">Add New Product</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                        Discard
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-md shadow-sm transition-colors">
                        Save draft
                    </button>
                    <button className="px-4 py-2 text-sm font-bold text-white bg-gray-900 hover:bg-black rounded-md shadow-sm transition-colors">
                        Publish product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Product Details Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Product Details</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product title</label>
                                <input
                                    type="text"
                                    defaultValue="Classic T-Shirt"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                                <div className="border border-gray-300 rounded-md overflow-hidden">
                                    {/* Toolbar */}
                                    <div className="flex items-center gap-1 border-b border-gray-200 p-2 bg-gray-50">
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><Bold className="w-4 h-4" /></button>
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><Italic className="w-4 h-4" /></button>
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><Underline className="w-4 h-4" /></button>
                                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><List className="w-4 h-4" /></button>
                                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><LinkIcon className="w-4 h-4" /></button>
                                        <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded"><ImageIcon className="w-4 h-4" /></button>
                                    </div>
                                    <textarea
                                        rows={6}
                                        className="w-full p-4 text-sm focus:outline-none resize-none text-gray-900"
                                        placeholder="Write a description..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Variants Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Variants</h2>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">+ Add variant</button>
                        </div>

                        <div className="space-y-5">
                            {/* Size Variants */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                                <div className="flex flex-wrap gap-2">
                                    {['S', 'M', 'L', 'XL'].map((size) => (
                                        <span key={size} className="inline-flex items-center px-3 py-1.5 rounded border border-gray-200 text-sm font-medium bg-white text-gray-800 shadow-sm">
                                            {size}
                                            <button className="ml-2 text-gray-400 hover:text-gray-600 text-xs shadow-none border-none p-0 outline-none select-none flex items-center justify-center -mr-1">
                                                ✕
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Color Variants */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Ash', 'Black', 'Blue', 'Pink'].map((color) => (
                                        <span key={color} className="inline-flex items-center px-3 py-1.5 rounded border border-gray-200 text-sm font-medium bg-white text-gray-800 shadow-sm">
                                            {color}
                                            <button className="ml-2 text-gray-400 hover:text-gray-600 text-xs shadow-none border-none p-0 outline-none select-none flex items-center justify-center -mr-1">
                                                ✕
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prices Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Prices</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Base price</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-gray-500 text-sm">$</span>
                                    <input
                                        type="text"
                                        defaultValue="16.99"
                                        className="w-full rounded-md border border-gray-300 pl-7 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Compare at</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-gray-500 text-sm">$</span>
                                    <input
                                        type="text"
                                        defaultValue="24.99"
                                        className="w-full rounded-md border border-gray-300 pl-7 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tax (%)</label>
                                <input
                                    type="text"
                                    defaultValue="18"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Inventory Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Inventory</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">SKU</label>
                                <input
                                    type="text"
                                    defaultValue="TS-001"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 font-mono"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Barcode</label>
                                <input
                                    type="text"
                                    defaultValue="123456789"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 font-mono"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                                <input
                                    type="number"
                                    defaultValue="150"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Images Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Product Images</h2>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-gray-100">
                                <Upload className="w-5 h-5 text-gray-500" />
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                                Drop your images here, or <span className="text-blue-600">browse</span>
                            </p>
                            <p className="text-xs text-gray-500 font-medium">
                                Support format: JPEG, PNG, GIF, WEBP
                            </p>
                        </div>

                        {/* Image Thumbnails Mock */}
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`aspect-square rounded-md overflow-hidden bg-gray-100 border ${i === 1 ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'}`}>
                                    <img
                                        src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=150&q=80&sig=${i}`}
                                        alt={`Thumbnail ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="aspect-square rounded-md border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 cursor-pointer transition-colors bg-white">
                                +
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
