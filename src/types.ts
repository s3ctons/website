export interface IAudit {
  id: number
  title: string
  start_date: string
  end_date: string
  amount: number
  currency: string
  tags: string[]
}

export type AuditType = "active" | "upcoming" | "completed"
