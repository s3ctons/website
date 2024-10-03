import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { ProtocolApplicationForm } from "@/components/ProtocolApplicationForm"

export default function ProtocolApplicationPage() {
  return (
    <section>
      <div className="bg-gradient-to-b from-primary-900 to-secondary-900">
        <div className="container mx-auto px-6 py-6 lg:py-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-center text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
              Apply for an audit of your protocol
            </h1>
            <p className="text-center text-base md:text-lg">
              Some extra text. We can write that we will connect in 1-2 days or
              smth idk
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <Link href="/" className="mb-4 flex items-center gap-3 text-lg">
          <FaArrowLeft size={15} />
          Back
        </Link>
        <div className="border border-secondary-700 bg-secondary-800 p-6">
          <ProtocolApplicationForm />
        </div>
      </div>
    </section>
  )
}
