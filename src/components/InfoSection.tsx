export const InfoSection = () => {
  return (
    <div className="flex flex-col gap-6 border border-secondary-700 bg-secondary-800 p-6 md:flex-row md:justify-between md:gap-4">
      <div className="flex items-center">
        If you are interested in TON smart contract security, check our
        educational project
      </div>
      <a
        href="https://www.hacktheton.com/"
        target="_blank"
        className="flex min-w-[130px] items-center justify-center self-center bg-yellow p-2 text-center font-semibold text-secondary-900 hover:bg-secondary-900 hover:text-yellow"
      >
        Hack the TON
      </a>
    </div>
  )
}
