"use client"

import { motion } from "framer-motion"

export function LimitedDropBanner() {
    return (
        <div className="w-full h-12 overflow-hidden bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 flex items-center border-y border-white/50 relative z-20">
            <motion.div
                className="flex whitespace-nowrap min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 15,
                }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex items-center mx-4 gap-4">
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-800">
                            LIMITED DROP
                        </span>
                        <span className="text-xl leading-none text-gray-400">+</span>
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-800">
                            ANIMATED BANNER
                        </span>
                        <span className="text-xl leading-none text-gray-400">+</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
