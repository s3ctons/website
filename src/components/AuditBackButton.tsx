"use client"

import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export const AuditBackButton = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="flex items-center gap-3">
      <FaArrowLeft size={15} />
      Back
    </button>
  )
}
