import { AuditorHeader } from "@/components/AuditorHeader"
import { Footer } from "@/components/Footer"

export default function AuditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-dvh flex-col">
      <AuditorHeader />
      <div className="container mx-auto grow p-4 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}
