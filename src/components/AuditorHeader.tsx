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
    <header className="flex w-full flex-wrap border-b border-secondary-700 bg-secondary-800 md:flex-nowrap md:justify-start">
      <nav className="container mx-auto p-4 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8">
        <div
          ref={mobileMenuRef}
          className="flex items-center justify-between gap-x-1"
        >
          <Link href="/auditor">
            <div className="flex select-none items-center gap-6">
              <div>icon</div>
              <div className="text-4xl">SECTONS</div>
            </div>
          </Link>

          {isMobileMenuOpen ? (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex size-9 items-center justify-center border border-secondary-700 font-medium hover:bg-secondary-700 focus:bg-secondary-700 focus:outline-none md:hidden"
            >
              <Cross />
            </button>
          ) : (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex size-9 items-center justify-center border border-secondary-700 font-medium hover:bg-secondary-700 focus:bg-secondary-700 focus:outline-none md:hidden"
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
                    className={`${pathname === "/auditor" && "bg-secondary-700"} flex items-center p-2 hover:bg-secondary-700`}
                    href="/auditor"
                  >
                    <FaHouseUser className="me-3 shrink-0 md:hidden" />
                    Home
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/findings" && "bg-secondary-700"} flex items-center p-2 hover:bg-secondary-700`}
                    href="/auditor/findings"
                  >
                    <FaClipboardList className="me-3 shrink-0 md:hidden" />
                    Findings
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/audits" && "bg-secondary-700"} flex items-center p-2 hover:bg-secondary-700`}
                    href="/auditor/audits"
                  >
                    <FaFont className="me-3 shrink-0 md:hidden" />
                    Audits
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/reports" && "bg-secondary-700"} flex items-center p-2 hover:bg-secondary-700`}
                    href="/auditor/reports"
                  >
                    <FaClipboardCheck className="me-3 shrink-0 md:hidden" />
                    Reports
                  </Link>

                  <Link
                    className={`${pathname === "/auditor/docs" && "bg-secondary-700"} flex items-center p-2 hover:bg-secondary-700`}
                    href="/auditor/docs"
                  >
                    <FaFileAlt className="me-3 shrink-0 md:hidden" />
                    Docs
                  </Link>
                </div>
              </div>

              <div className="my-2 md:mx-2 md:my-0">
                <div className="h-px w-full bg-secondary-700 md:h-4 md:w-px md:bg-secondary-300"></div>
              </div>

              <Link
                className="mt-2 self-start border border-secondary-700 bg-secondary-800 p-2 font-medium shadow-sm hover:bg-secondary-700 md:ml-3 md:mt-0"
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
