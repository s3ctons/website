import { Hero } from "@/components/Hero"
import { InfoBoxes } from "@/components/InfoBoxes"
import { InfoSection } from "@/components/InfoSection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <div className="mx-auto p-4 lg:container">
        <InfoSection />
      </div>
    </>
  )
}
