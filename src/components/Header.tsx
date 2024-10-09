import Link from "next/link"
import { Logo } from "@/components/svg/Logo"

export const Header = () => {
  return (
    <header className="bg-primary-900">
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <div className="flex select-none items-center gap-2">
            <Logo />
            <div className="text-4xl">SECTONS</div>
          </div>
        </Link>
        <Link
          className="border border-secondary-600 bg-secondary-900 px-3 py-2 font-medium hover:bg-secondary-800"
          href="/auditor"
        >
          Log In
        </Link>
      </div>
    </header>
  )
}
