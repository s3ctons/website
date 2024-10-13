import auditSumbissions from "@/mocks/audit_submissions.json"
import { AuditSubmissionsBlock } from "@/components/AuditSubmissionsBlock"

export default function AuditorFindingsPage() {
  const activeAuditSumbissions = auditSumbissions.filter(
    (auditSumbission) =>
      Date.parse(auditSumbission.end_date) > Date.now() &&
      Date.parse(auditSumbission.start_date) <= Date.now(),
  )

  const completedAuditSumbissions = auditSumbissions.filter(
    (auditSumbission) =>
      Date.parse(auditSumbission.start_date) < Date.now() &&
      Date.parse(auditSumbission.end_date) < Date.now(),
  )
  return (
    <section className="flex flex-col gap-6">
      <AuditSubmissionsBlock
        title="ACTIVE AUDIT SUBMISSIONS"
        auditSubmissions={activeAuditSumbissions}
        noAuditSubmissionsText="There are no audits you participate in"
      />
      <AuditSubmissionsBlock
        title="COMPLETED AUDIT SUBMISSIONS"
        auditSubmissions={completedAuditSumbissions}
        noAuditSubmissionsText="There are no completed audits you participated in"
      />
    </section>
  )
}
