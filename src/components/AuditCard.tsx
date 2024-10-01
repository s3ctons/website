import moment from "moment"
import { FaCrow } from "react-icons/fa"
import { Badge } from "@/components/Badge"
import { IAudit, AuditType } from "@/types"

const getAuditTimeCount = (
  startDate: string,
  endDate: string,
  type: AuditType,
) => {
  switch (type) {
    case "active":
      return `ENDS ${moment(endDate).fromNow().toUpperCase()}`
    case "upcoming":
      return `STARTS ${moment(startDate).fromNow().toUpperCase()}`
    case "completed":
      return "ENDED"
  }
}

const getPoolString = (amount: number, currency: string): string => {
  return `${amount.toLocaleString()} in ${currency}`
}

export const AuditCard = ({
  audit,
  type,
}: {
  audit: IAudit
  type: AuditType
}) => {
  return (
    <div
      key={audit.id}
      className="flex cursor-pointer flex-col gap-2 border border-secondary-700 bg-secondary-800 p-5 hover:bg-secondary-700"
    >
      <div className="flex justify-between border-b border-b-secondary-600 pb-1">
        <div>{getAuditTimeCount(audit.start_date, audit.end_date, type)}</div>
        <div>{getPoolString(audit.amount, audit.currency)}</div>
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
    </div>
  )
}
