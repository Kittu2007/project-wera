import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/types'

interface CartState {
    items: CartItem[]
    addItem: (product: Product, size: string, quantity: number) => void
    removeItem: (productId: string, size: string) => void
    updateQuantity: (productId: string, size: string, quantity: number) => void
    clearCart: () => void
    totalItems: () => number
    subtotal: () => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product, size, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.id === product.id && item.selectedSize === size
                    )
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id && item.selectedSize === size
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        }
                    }
                    return {
                        items: [...state.items, { ...product, selectedSize: size, quantity }],
                    }
                })
            },
            removeItem: (productId, size) => {
                set((state) => ({
                    items: state.items.filter(
                        (item) => !(item.id === productId && item.selectedSize === size)
                    ),
                }))
            },
            updateQuantity: (productId, size, quantity) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === productId && item.selectedSize === size
                            ? { ...item, quantity }
                            : item
                    ),
                }))
            },
            clearCart: () => set({ items: [] }),
            totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
            subtotal: () =>
                get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        }),
        {
            name: 'wera-cart',
        }
    )
)
