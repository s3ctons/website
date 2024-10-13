import { IAuditSubmission } from "@/lib/types"
import { AuditSubmission } from "@/components/AuditSubmission"

export const AuditSubmissionsBlock = ({
  title,
  noAuditSubmissionsText,
  auditSubmissions,
}: {
  title: string
  noAuditSubmissionsText: string
  auditSubmissions: IAuditSubmission[]
}) => {
  return (
    <div>
      <div className="py-4 text-2xl">{title}</div>
      {auditSubmissions.length === 0 && <div>{noAuditSubmissionsText}</div>}

      {auditSubmissions.length > 0 && (
        <div className="flex flex-col gap-6">
          {auditSubmissions.map((auditSumbission) => (
            <AuditSubmission
              key={auditSumbission.id}
              auditSubmission={auditSumbission}
            />
          ))}
        </div>
      )}
    </div>
  )
}
