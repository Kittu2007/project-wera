export interface Product {
    id: string
    name: string
    description: string
    price: number
    images: string[]
    category: string
    inventory: number
    podStatus: boolean
    slug: string
}

export interface CartItem extends Product {
    quantity: number
    selectedSize?: string
    selectedColor?: string
}

export interface User {
    id: string
    email: string
    name?: string
    role: "USER" | "ADMIN"
}
