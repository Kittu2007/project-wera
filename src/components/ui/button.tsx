import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "glass"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-black text-white hover:bg-black/90 shadow-md":
                            variant === "default",
                        "border border-black bg-transparent hover:bg-black hover:text-white":
                            variant === "outline",
                        "bg-white text-black hover:bg-gray-100 shadow-sm border border-gray-200":
                            variant === "secondary",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "text-primary underline-offset-4 hover:underline": variant === "link",
                        "bg-white/80 backdrop-blur-md border border-white/50 text-black shadow-sm hover:bg-white": variant === "glass",
                        "h-12 px-8 py-3": size === "default",
                        "h-9 px-4": size === "sm",
                        "h-14 px-10 text-base": size === "lg",
                        "h-12 w-12": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
