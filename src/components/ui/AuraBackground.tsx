"use client"

export function AuraBackground() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-white">
            {/* Top Left: Cool Blue/Lavender (Behind Text) */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"
                style={{
                    background: "radial-gradient(circle, rgba(196, 219, 255, 1) 0%, rgba(224, 242, 254, 0) 70%)"
                }}
            />

            {/* Top Right: Warm Peach/Orange (Behind Model) */}
            <div
                className="absolute top-[-5%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[90px] opacity-35 animate-blob animation-delay-2000"
                style={{
                    background: "radial-gradient(circle, rgba(255, 218, 185, 1) 0%, rgba(255, 237, 213, 0) 70%)"
                }}
            />

            {/* Bottom Center: Soft Purple/Pink Fade */}
            <div
                className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"
                style={{
                    background: "radial-gradient(circle, rgba(230, 200, 255, 1) 0%, rgba(240, 200, 240, 0) 70%)"
                }}
            />
        </div>
    )
}
