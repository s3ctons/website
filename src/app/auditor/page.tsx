import audits from "@/mocks/audits.json"
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

  return (
    <section className="flex flex-col gap-6">
      <ProfileBlock name="Xenia" />

      <div>
        <AuditCardsBlock
          type="active"
          title="ACTIVE AUDITS"
          noAuditsText="There are no active audits"
          audits={activeAudits}
        />
      </div>

      <div>
        <AuditCardsBlock
          type="upcoming"
          title="UPCOMING AUDITS"
          noAuditsText="There are no upcoming audits"
          audits={upcomingAudits}
        />
      </div>
    </section>
  )
}
