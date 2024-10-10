import Link from "next/link"
import { FaArrowLeft, FaChevronDown } from "react-icons/fa"

export default function SubmitFindingPage({
  params,
}: {
  params: { id: number }
}) {
  return (
    <section className="container mx-auto flex size-full flex-col">
      <Link
        href={`/auditor/audits/${params.id}`}
        className="mb-4 flex items-center gap-3 text-lg"
      >
        <FaArrowLeft size={15} />
        Back
      </Link>
      <div className="size-full border border-secondary-700 bg-secondary-800 p-6">
        <form className="flex size-full flex-col">
          <h2 className="mb-6 text-center text-3xl font-semibold">
            SUBMIT A FINDING
          </h2>

          <div className="flex w-full grow flex-col gap-4">
            <div>
              <div className="mb-2 block">Risk rating *</div>
              <div className="relative md:max-w-[330px]">
                <select
                  name="risk_rating"
                  className="relative w-full cursor-pointer appearance-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
                >
                  {[
                    "QA Report (low/non-critical)",
                    "Medium Risk",
                    "High Risk",
                    "Gas Optimizations",
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

            <div className="flex grow flex-col">
              <label htmlFor="description" className="mb-2 block">
                Report contents *
              </label>
              <textarea
                id="report_contents"
                name="report_contents"
                className="size-full min-h-[200px] resize-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
              ></textarea>
            </div>

            <button
              className="mt-6 w-full self-center bg-primary-900 px-[13px] py-[9px] font-bold hover:bg-primary-800 md:w-[300px]"
              type="submit"
            >
              CREATE ISSUE
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
