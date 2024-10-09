export interface IAudit {
  id: number
  title: string
  company_description?: string
  start_date: string
  end_date: string
  amount: number
  currency: string
  tags: string[]
}

export type AuditType = "active" | "upcoming" | "completed"

export interface IAuditSubmission {
  id: number
  audit_id: number
  title: string
  start_date: string
  end_date: string
  findings: { id: number; type: string; date: string }[]
}
