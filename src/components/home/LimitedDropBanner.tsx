"use client"

import { motion } from "framer-motion"

export function LimitedDropBanner() {
    return (
        <div className="w-full h-10 overflow-hidden bg-gradient-to-r from-teal-200 via-pink-200 to-orange-200 flex items-center relative z-20 shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-y-2 border-white/50">
            <motion.div
                className="flex whitespace-nowrap min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="flex items-center px-4 gap-4">
                        <span className="text-[0.8rem] font-bold tracking-widest uppercase text-gray-900">
                            LIMITED DROP
                        </span>
                        <span className="text-lg leading-none text-gray-900 font-bold">+</span>
                        <span className="text-[0.8rem] font-bold tracking-widest uppercase text-gray-900">
                            ANIMATED BANNER
                        </span>
                        <span className="text-lg leading-none text-gray-900 font-bold">+</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
