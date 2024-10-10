"use client"

import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-3 text-lg"
    >
      <FaArrowLeft size={15} />
      Back
    </button>
  )
}
