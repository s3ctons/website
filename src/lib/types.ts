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
