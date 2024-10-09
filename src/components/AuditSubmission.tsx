import Link from "next/link"
import moment from "moment"
import { FaCrow } from "react-icons/fa"
import { getAuditType } from "@/lib/utils"
import { IAuditSubmission } from "@/lib/types"

const getAuditTimeCount = (startDate: string, endDate: string) => {
  const type = getAuditType(startDate, endDate)

  switch (type) {
    case "active":
      return `ENDS ${moment(endDate).fromNow().toUpperCase()}`
    case "completed":
      return "ENDED"
  }
}

export const AuditSubmission = ({
  auditSubmission,
}: {
  auditSubmission: IAuditSubmission
}) => {
  return (
    <div className="flex flex-col gap-6 border border-secondary-700 bg-secondary-800 p-6">
      <div className="flex justify-between gap-4 border-b border-b-secondary-600 pb-2">
        <div className="items flex items-center justify-between gap-4">
          <div className="bg-secondary-900 p-2">
            <FaCrow className="size-5 text-yellow" />
          </div>
          <div className="flex items-center justify-center text-xl font-semibold">
            {auditSubmission.title}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {getAuditTimeCount(
            auditSubmission.start_date,
            auditSubmission.end_date,
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {auditSubmission.findings.map((finding) => (
          <Link
            key={finding.id}
            href={`/auditor/findings/${finding.id}`}
            className="flex flex-col gap-2 bg-secondary-700 p-4 hover:bg-secondary-600"
          >
            <div className="border-b border-secondary-500 font-semibold">
              {finding.type}
            </div>
            <div className="text-sm">{`Submitted ${moment(finding.date).fromNow()}`}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
