import moment from "moment"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FaCrow, FaGithub } from "react-icons/fa"
import { BackButton } from "@/components/BackButton"
import audits from "@/mocks/audits.json"
import findings from "@/mocks/findings.json"
import { getAuditType } from "@/lib/utils"

const getAuditTimeCount = (startDate: string, endDate: string) => {
  const type = getAuditType(startDate, endDate)

  switch (type) {
    case "active":
      return `COMPETITION ENDS ${moment(endDate).fromNow().toUpperCase()}`
    case "upcoming":
      return `COMPETITION STARTS ${moment(startDate).fromNow().toUpperCase()}`
    case "completed":
      return "COMPETITION ENDED"
  }
}

export default function AuditPage({ params }: { params: { id: string } }) {
  const audit = audits.find((audit) => audit.id === Number(params.id))

  if (!audit) {
    // Todo make audit 404 page
    redirect("/auditor/audits")
  }

  const auditFindings = findings.filter(
    (finding) => finding.audit_id === Number(params.id),
  )

  return (
    <section className="flex flex-col gap-6">
      <BackButton />
      <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3 sm:flex-row sm:items-center sm:gap-2">
        <div className="flex items-center gap-6 sm:justify-between">
          <div className="bg-secondary-900 p-5">
            <FaCrow className="size-8 text-yellow" />
          </div>
          <div>
            <div className="text-xl">{audit.title}</div>
            {audit.company_description && (
              <div>{audit.company_description}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Link
            className="flex items-center justify-center gap-2 border border-secondary-600 bg-secondary-900 p-3 font-medium hover:bg-secondary-800"
            href="#"
          >
            <FaGithub size={20} />
            <div>View repo</div>
          </Link>
          <Link
            className="bg-primary-900 p-3 text-center font-medium hover:bg-primary-800"
            href={`/auditor/audits/${audit.id}/submit-finding`}
          >
            Submit finding
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3">
        <div className="flex flex-col justify-between border-b border-b-secondary-700 pb-1 sm:flex-row sm:items-center">
          <div>{getAuditTimeCount(audit.start_date, audit.end_date)}</div>
          <div>{`${audit.amount.toLocaleString()} in ${audit.currency}`}</div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div>{`Duration: ${moment(audit.end_date).diff(moment(audit.start_date), "days")} days`}</div>
          <div>
            <span className="whitespace-nowrap">{`${moment(audit.start_date).format("lll")}`}</span>
            <span> - </span>
            <span className="whitespace-nowrap">{`${moment(audit.end_date).format("lll")}`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3">
        <div className="self-start border-b border-b-secondary-700 pb-1">
          YOUR FINDINGS
        </div>
        {auditFindings.length === 0 ? (
          <div>You have no submitted findings</div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {auditFindings.map((finding) => (
              <Link
                key={finding.id}
                href={`/auditor/findings/${finding.id}`}
                className="flex flex-col gap-2 bg-secondary-700 p-3 hover:bg-secondary-600"
              >
                <div className="border-b border-secondary-500 font-semibold">
                  {finding.type}
                </div>
                <div className="text-sm">{`Submitted ${moment(finding.date).fromNow()}`}</div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3">
        <div className="self-start border-b border-b-secondary-700 pb-1">
          DESCRIPTION
        </div>
        <div>No description provided</div>
      </div>
    </section>
  )
}
