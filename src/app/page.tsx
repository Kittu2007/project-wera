import { Hero } from "@/components/home/Hero"
import { LimitedDropBanner } from "@/components/home/LimitedDropBanner"
import { TrendingSlider } from "@/components/home/TrendingSlider"
import { InstagramFeed } from "@/components/home/InstagramFeed"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { FeaturedCollection } from "@/components/home/FeaturedCollection"

export default function Home() {
  return (
    <>
      <Hero />
      <LimitedDropBanner />
      <TrendingSlider />
      <FeaturedCollection />
      <InstagramFeed />
      <ReviewsSection />
    </>
  )
}
