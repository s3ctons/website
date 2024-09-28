import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { InfoBoxes } from "@/components/InfoBoxes"
import { InfoSection } from "@/components/InfoSection"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex grow flex-col">
        <Hero />
        <InfoBoxes />
        <div className="mx-auto p-4 lg:container">
          <InfoSection />
        </div>
      </div>
      <Footer />
    </>
  )
}
