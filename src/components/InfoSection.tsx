import Link from "next/link"

export const InfoSection = () => {
  return (
    <div className="flex flex-col gap-6 border border-secondary-700 bg-secondary-800 p-6 md:flex-row md:justify-between md:gap-4">
      <div className="flex items-center">
        If you are a nooby-dumby little chick, visit our educational HackTheTon
        project. Created for you with love and absolutely free.
      </div>
      <Link
        href="#"
        className="flex min-w-[130px] items-center justify-center self-center bg-yellow p-2 text-center font-semibold text-secondary-900 hover:bg-secondary-900 hover:text-yellow"
      >
        I want to hack the TON!
      </Link>
    </div>
  )
}
