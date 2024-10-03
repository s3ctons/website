import moment from "moment"
import Link from "next/link"
import { FaCrow } from "react-icons/fa"
import { Badge } from "@/components/Badge"
import { getAuditType } from "@/utils"
import { IAudit } from "@/lib/types"

const getAuditTimeCount = (startDate: string, endDate: string) => {
  const type = getAuditType(startDate, endDate)

  switch (type) {
    case "active":
      return `ENDS ${moment(endDate).fromNow().toUpperCase()}`
    case "upcoming":
      return `STARTS ${moment(startDate).fromNow().toUpperCase()}`
    case "completed":
      return "ENDED"
  }
}

export const AuditCard = ({ audit }: { audit: IAudit }) => {
  return (
    <Link
      href={`/auditor/audits/${audit.id}`}
      key={audit.id}
      className="flex cursor-pointer flex-col gap-2 border border-secondary-700 bg-secondary-800 p-5 hover:bg-secondary-700"
    >
      <div className="flex justify-between border-b border-b-secondary-600 pb-1">
        <div>{getAuditTimeCount(audit.start_date, audit.end_date)}</div>
        <div>{`${audit.amount.toLocaleString()} in ${audit.currency}`}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-secondary-900 p-2">
            <FaCrow className="size-5 text-yellow" />
          </div>
          <div className="text-xl font-semibold">{audit.title}</div>
        </div>
        <div className="flex flex-wrap gap-1">
          {audit.tags.map((tag) => (
            <Badge text={tag} key={`${audit.id}${tag}`} />
          ))}
        </div>
      </div>
    </Link>
  )
}
