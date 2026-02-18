"use client"

import { motion } from "framer-motion"

export function LimitedDropBanner() {
    return (
        <div className="relative w-full overflow-hidden py-3 text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80")' }}
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-0" />

            <motion.div
                className="relative z-10 flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                <div className="flex items-center gap-8 mx-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="text-sm font-bold tracking-widest uppercase">
                            Limited Drop + Animated Banner + Limited Drop +
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
