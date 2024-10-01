"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaHouseUser } from "react-icons/fa"
import {
  FaFileAlt,
  FaClipboardList,
  FaFont,
  FaClipboardCheck,
} from "react-icons/fa"
import { Bars } from "@/components/svg/Bars"
import { Cross } from "@/components/svg/Cross"
import { Logo } from "@/components/svg/Logo"

export const AuditorHeader = () => {
  const pathname = usePathname()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeMobileMenu = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }
    document.body.addEventListener("click", closeMobileMenu)
    return () => document.body.removeEventListener("click", closeMobileMenu)
  }, [])
  return (
    <header className="flex w-full flex-wrap bg-gradient-to-b from-primary-900 to-secondary-900 md:flex-nowrap md:justify-start">
      <nav className="container mx-auto px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8">
        <div
          ref={mobileMenuRef}
          className="flex items-center justify-between gap-x-1"
        >
          <Link href="/auditor">
            <div className="flex select-none items-center gap-2">
              <Logo />
              <div className="text-4xl">SECTONS</div>
            </div>
          </Link>

          {isMobileMenuOpen ? (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex size-9 items-center justify-center border border-secondary-300 font-medium text-secondary-300 hover:bg-primary-800 md:hidden"
            >
              <Cross />
            </button>
          ) : (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex size-9 items-center justify-center border border-secondary-300 font-medium text-secondary-300 hover:bg-primary-900 md:hidden"
            >
              <Bars />
            </button>
          )}
        </div>

        <div
          className={`${isMobileMenuOpen ? "max-md:block" : "max-md:hidden"} grow basis-full overflow-hidden transition-all duration-300`}
        >
          <div className="max-h-[75vh] overflow-hidden overflow-y-auto">
            <div className="flex flex-col pt-2 md:flex-row md:items-center md:gap-1">
              <div className="grow">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-end">
                  <Link
                    className={`${pathname === "/auditor" && "bg-primary-900"} flex items-center p-2 hover:bg-primary-900`}
                    href="/auditor"
                  >
                    <FaHouseUser className="me-3 shrink-0 md:hidden" />
                    Home
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/findings" && "bg-primary-900"} flex items-center p-2 hover:bg-primary-900`}
                    href="/auditor/findings"
                  >
                    <FaClipboardList className="me-3 shrink-0 md:hidden" />
                    Findings
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/audits" && "bg-primary-900"} flex items-center p-2 hover:bg-primary-900`}
                    href="/auditor/audits"
                  >
                    <FaFont className="me-3 shrink-0 md:hidden" />
                    Audits
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/reports" && "bg-primary-900"} flex items-center p-2 hover:bg-primary-900`}
                    href="/auditor/reports"
                  >
                    <FaClipboardCheck className="me-3 shrink-0 md:hidden" />
                    Reports
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/docs" && "bg-primary-900"} flex items-center p-2 hover:bg-primary-900`}
                    href="/auditor/docs"
                  >
                    <FaFileAlt className="me-3 shrink-0 md:hidden" />
                    Docs
                  </Link>
                </div>
              </div>

              <div className="my-2 md:mx-2 md:my-0">
                <div className="h-px w-full bg-secondary-300 md:h-4 md:w-px"></div>
              </div>

              <Link
                className="mt-2 self-start border border-secondary-600 bg-secondary-900 px-3 py-2 font-medium hover:bg-secondary-800 md:ml-3 md:mt-0"
                href="/auditor/logout"
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
