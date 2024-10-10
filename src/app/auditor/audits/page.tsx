import { AuditCardsBlock } from "@/components/AuditCardsBlock"
import audits from "@/mocks/audits.json"

export default function AuditorAuditsPage() {
  const activeAudits = audits.filter(
    (audit) =>
      Date.parse(audit.end_date) > Date.now() &&
      Date.parse(audit.start_date) <= Date.now(),
  )

  const upcomingAudits = audits.filter(
    (audit) => Date.parse(audit.start_date) >= Date.now(),
  )

  const completedAudits = audits.filter(
    (audit) =>
      Date.parse(audit.start_date) < Date.now() &&
      Date.parse(audit.end_date) < Date.now(),
  )

  return (
    <section className="flex flex-col gap-6">
      <AuditCardsBlock
        title="ACTIVE AUDITS"
        noAuditsText="There are no active audits"
        audits={activeAudits}
      />
      <AuditCardsBlock
        title="UPCOMING AUDITS"
        noAuditsText="There are no upcoming audits"
        audits={upcomingAudits}
      />
      <AuditCardsBlock
        title="COMPLETED AUDITS"
        noAuditsText="There are no completed audits"
        audits={completedAudits}
      />
    </section>
  )
}
