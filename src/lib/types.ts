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

export interface IFinding {
  id: number
  type: string
  date: string
  content: string
  audit_id: number
  audit_title: string
  audit_start_date: string
  audit_end_date: string
}
export interface IAuditSubmission {
  id: number
  audit_id: number
  title: string
  start_date: string
  end_date: string
  findings: { id: number; type: string; date: string }[]
}
