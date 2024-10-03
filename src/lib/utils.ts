import { AuditType } from "@/lib/types"

export const getAuditType = (
  startDate: string,
  endDate: string,
): AuditType | undefined => {
  if (Date.parse(endDate) > Date.now() && Date.parse(startDate) <= Date.now()) {
    return "active"
  } else if (Date.parse(startDate) >= Date.now()) {
    return "upcoming"
  } else if (
    Date.parse(startDate) < Date.now() &&
    Date.parse(endDate) < Date.now()
  ) {
    return "completed"
  }
}
