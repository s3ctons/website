import Link from "next/link"
import moment from "moment"
import { FaFrog, FaChevronRight } from "react-icons/fa"
import { IFinding } from "@/lib/types"

export const ProfileBlock = ({
  name,
  findings,
}: {
  name: string
  findings: IFinding[]
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3 lg:flex-row lg:items-center lg:gap-2">
      <div className="flex items-center gap-6 lg:justify-between">
        <div className="bg-secondary-900 p-5">
          <FaFrog className="size-8 text-red-300" />
        </div>
        <div className="text-lg">{name}</div>
      </div>
      {findings.length === 0 ? (
        <div className="sm:pr-6">No audits you participated in</div>
      ) : (
        <div className="flex flex-col justify-between gap-3 md:flex-row lg:border-l lg:border-secondary-700 lg:pl-3">
          {findings.map((finding) => (
            <Link
              key={finding.id}
              href={`/auditor/findings/${finding.id}`}
              className="flex grow flex-col gap-1 bg-secondary-700 p-2 text-sm hover:bg-secondary-600"
            >
              <div className="border-b border-secondary-500">
                {finding.audit_title.toUpperCase()}
              </div>
              <div>{moment(finding.date).fromNow()}</div>
              <div>{finding.type}</div>
            </Link>
          ))}
          <Link
            href="/auditor/findings"
            className="flex flex-col items-center justify-center gap-2 bg-secondary-900 p-2 hover:bg-secondary-700"
          >
            <div className="text-center text-sm">ALL FINDINGS</div>
            <FaChevronRight />
          </Link>
        </div>
      )}
    </div>
  )
}
