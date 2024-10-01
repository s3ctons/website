import { AuditCard } from "@/components/AuditCard"
import { AuditType, IAudit } from "@/types"

export const AuditCardsBlock = ({
  type,
  title,
  noAuditsText,
  audits,
}: {
  type: AuditType
  title: string
  noAuditsText: string
  audits: IAudit[]
}) => {
  return (
    <>
      <div className="py-4 text-2xl">{title}</div>
      {audits.length === 0 && <div>{noAuditsText}</div>}

      {audits.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audits.map((audit) => (
            <AuditCard audit={audit} type={type} key={audit.id} />
          ))}
        </div>
      )}
    </>
  )
}
