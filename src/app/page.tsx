import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/home/Hero"
import { LimitedDropBanner } from "@/components/home/LimitedDropBanner"
import { TrendingSlider } from "@/components/home/TrendingSlider"
import { InstagramFeed } from "@/components/home/InstagramFeed"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { FeaturedCollection } from "@/components/home/FeaturedCollection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <LimitedDropBanner />
        <TrendingSlider />
        <FeaturedCollection />
        <InstagramFeed />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
