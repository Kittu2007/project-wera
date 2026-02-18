"use client"

export function AuraBackground() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-white">
            {/* Top Center: Blue-Lavender Glow */}
            <div
                className="absolute top-[-10%] left-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"
                style={{
                    background: "radial-gradient(circle, rgba(224, 242, 254, 1) 0%, rgba(230, 230, 255, 0) 70%)" // accent-blue to transparent
                }}
            />

            {/* Right Side: Warm Peach Glow */}
            <div
                className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-25 animate-blob animation-delay-2000"
                style={{
                    background: "radial-gradient(circle, rgba(255, 237, 213, 1) 0%, rgba(255, 245, 230, 0) 70%)" // accent-peach
                }}
            />

            {/* Bottom/Middle: Soft Purple Fade */}
            <div
                className="absolute bottom-[-10%] left-[20%] w-[80vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"
                style={{
                    background: "radial-gradient(circle, rgba(243, 232, 255, 1) 0%, rgba(240, 240, 255, 0) 70%)" // accent-purple
                }}
            />
        </div>
    )
}
