"use client"

import { motion } from "framer-motion"

export function LimitedDropBanner() {
    return (
        <div className="w-full overflow-hidden bg-primary py-3 text-primary-foreground">
            <motion.div
                className="flex whitespace-nowrap"
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
