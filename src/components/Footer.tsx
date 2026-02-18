import Link from "next/link"

const footerLinks = [
    {
        title: "Shop",
        links: [
            { label: "All Products", href: "/shop" },
            { label: "New Arrivals", href: "/shop?sort=new" },
            { label: "Best Sellers", href: "/shop?sort=best" },
        ],
    },
    {
        title: "About",
        links: [
            { label: "Our Story", href: "/about" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Shipping & Returns", href: "/shipping" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
]

export function Footer() {
    return (
        <footer className="border-t bg-secondary/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            WERA
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Premium print-on-demand fashion for the modern generation.
                        </p>
                    </div>
                    {footerLinks.map((section) => (
                        <div key={section.title} className="flex flex-col space-y-4">
                            <h4 className="text-sm font-semibold">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} WERA. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">
                            Instagram
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            TikTok
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
