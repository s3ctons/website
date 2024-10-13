import audits from "@/mocks/audits.json"
import findings from "@/mocks/findings.json"
import { AuditCardsBlock } from "@/components/AuditCardsBlock"
import { ProfileBlock } from "@/components/ProfileBlock"

export default function AuditorHomePage() {
  const activeAudits = audits.filter(
    (audit) =>
      Date.parse(audit.end_date) > Date.now() &&
      Date.parse(audit.start_date) <= Date.now(),
  )

  const upcomingAudits = audits.filter(
    (audit) => Date.parse(audit.start_date) >= Date.now(),
  )

  const lastFindings = findings
    .filter((finding) => Date.parse(finding.audit_end_date) > Date.now())
    .sort(
      (firstItem, secondItem) =>
        Date.parse(firstItem.date) - Date.parse(secondItem.date),
    )
    .slice(0, 3)

  return (
    <section className="flex flex-col gap-6">
      <ProfileBlock name="Auditor Name" findings={lastFindings} />

      <div>
        <AuditCardsBlock
          title="ACTIVE AUDITS"
          noAuditsText="There are no active audits"
          audits={activeAudits}
        />
      </div>

      <div>
        <AuditCardsBlock
          title="UPCOMING AUDITS"
          noAuditsText="There are no upcoming audits"
          audits={upcomingAudits}
        />
      </div>
    </section>
  )
}
