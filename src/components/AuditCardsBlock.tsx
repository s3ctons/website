import { AuditCard } from "@/components/AuditCard"
import { IAudit } from "@/lib/types"

export const AuditCardsBlock = ({
  title,
  noAuditsText,
  audits,
}: {
  title: string
  noAuditsText: string
  audits: IAudit[]
}) => {
  return (
    <div>
      <div className="py-4 text-2xl">{title}</div>
      {audits.length === 0 && <div>{noAuditsText}</div>}

      {audits.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audits.map((audit) => (
            <AuditCard audit={audit} key={audit.id} />
          ))}
        </div>
      )}
    </div>
  )
}
