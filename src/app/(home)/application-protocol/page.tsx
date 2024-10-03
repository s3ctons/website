import Link from "next/link"
import { FaArrowLeft, FaChevronDown } from "react-icons/fa"

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
          <form>
            <h2 className="mb-6 text-center text-3xl font-semibold">
              Protocol Audit Application
            </h2>

            <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-8">
              <div className="flex w-full flex-col gap-4">
                <div>
                  <label htmlFor="name" className="mb-2 block">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>

                <div>
                  <label htmlFor="telegram_username" className="mb-2 block">
                    Telegram username *
                  </label>
                  <input
                    id="telegram_username"
                    name="telegram_username"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>

                <div>
                  <label htmlFor="company_name" className="mb-2 block">
                    Company name *
                  </label>
                  <input
                    id="company_name"
                    name="company_name"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>

                <div>
                  <label htmlFor="company_website" className="mb-2 block">
                    Company website
                  </label>
                  <input
                    id="company_website"
                    name="company_website"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-4">
                <div className="flex grow flex-col">
                  <label htmlFor="description" className="mb-2 block">
                    Tell us about yout protocol
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="size-full min-h-[130px] resize-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  ></textarea>
                </div>

                <div>
                  <div className="mb-2 block">Preferred start date *</div>
                  <div className="relative">
                    <select
                      name="start_date"
                      className="relative w-full cursor-pointer appearance-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                    >
                      {[
                        "Within 1 week",
                        "Between 1 week and 1 month",
                        "More than 1 month away",
                      ].map((typeOption, index) => (
                        <option value={typeOption} key={index}>
                          {typeOption}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown
                      className="pointer-events-none absolute right-4 top-4"
                      size={12}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sourse" className="mb-2 block">
                    How did you hear about Sectons?
                  </label>
                  <input
                    id="sourse"
                    name="sourse"
                    className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                  />
                </div>

                <div>
                  <button
                    className="mt-8 w-full bg-primary-900 px-[13px] py-[9px] font-bold hover:bg-primary-800 disabled:bg-secondary-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
