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
          href="#"
          className="bg-secondary-900 px-4 py-3 hover:bg-secondary-800"
        >
          LOG IN
        </Link>
      </div>
    </header>
  )
}
