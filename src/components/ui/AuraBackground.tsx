"use client"

export function AuraBackground() {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-white">
            {/* Top Left: Cool Blue (Behind Text) */}
            <div
                className="absolute top-[-20%] left-[-20%] w-[90vw] h-[90vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"
            />

            {/* Top Right: Warm Peach (Behind Image) */}
            <div
                className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-orange-100/60 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"
            />

            {/* Bottom Center: Soft Purple */}
            <div
                className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[60vw] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"
            />
        </div>
    )
}
