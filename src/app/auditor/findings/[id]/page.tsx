import { redirect } from "next/navigation"
import { FaChevronDown } from "react-icons/fa"
import findings from "@/mocks/findings.json"
import { BackButton } from "@/components/BackButton"

export default function FindingPage({ params }: { params: { id: number } }) {
  const finding = findings.find((finding) => finding.id === Number(params.id))

  if (!finding) {
    // Todo make finding 404 page
    redirect("/auditor/findings")
  }

  return (
    <section className="container mx-auto flex size-full flex-col">
      <div className="mb-4">
        <BackButton />
      </div>

      <div className="size-full border border-secondary-700 bg-secondary-800 p-6">
        <form className="flex size-full flex-col">
          <h2 className="mb-6 text-center text-3xl font-semibold">
            UPDATE THE FINDING
          </h2>

          <div className="flex w-full grow flex-col gap-4">
            <div>
              <div className="mb-2 block">Risk rating *</div>
              <div className="relative md:max-w-[330px]">
                <select
                  defaultValue={finding.type}
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
              >
                {finding.content}
              </textarea>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-2 md:flex-row md:gap-6">
              <button className="bg-secondary-700 px-[13px] py-[9px] font-bold hover:bg-secondary-600">
                UNDO CHANGES
              </button>
              <button className="bg-rose-950 px-[13px] py-[9px] font-bold hover:bg-rose-900">
                WITHDRAW FINDING
              </button>
              <button className="bg-primary-900 px-[13px] py-[9px] font-bold hover:bg-primary-800">
                UPDATE ISSUE
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
