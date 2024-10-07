import { ZodFormattedError } from "zod"
import {
  ProtocolApplication,
  ProtocolApplicationSchema,
  JudgeApplication,
  JudgeApplicationSchema,
} from "@/lib/zodSchemas"

export interface ProtocolFormState {
  errors?: ZodFormattedError<ProtocolApplication>
  message?: string
  error?: string
}

export const sendProtocolApplication = async (
  state: ProtocolFormState,
  formData: FormData,
) => {
  const parsedFormData = {
    name: formData.get("name"),
    telegram_username: formData.get("telegram_username"),
    email: formData.get("email"),
    company_name: formData.get("company_name"),
    company_website: formData.get("company_website"),
    description: formData.get("description"),
    start_date: formData.get("start_date"),
    source: formData.get("source"),
  }

  const validatedFields = ProtocolApplicationSchema.safeParse(parsedFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.format(),
    }
  }

  try {
    const response = await fetch("/api/email/protocol", {
      method: "POST",
      body: JSON.stringify(parsedFormData),
    })

    if (response.ok) {
      return {
        message: "Application has been sent. We will contact you in 1-2 days",
      }
    } else {
      return {
        error:
          "Failed to send application. Please try again or contact us via socials",
      }
    }
  } catch {
    return {
      error:
        "Failed to send application. Please try again or contact us via socials",
    }
  }
}

export interface JudgeFormState {
  errors?: ZodFormattedError<JudgeApplication>
  message?: string
  error?: string
}

export const sendJudgeApplication = async (
  state: JudgeFormState,
  formData: FormData,
) => {
  const parsedFormData = {
    name: formData.get("name"),
    telegram_username: formData.get("telegram_username"),
    email: formData.get("email"),
    source: formData.get("source"),
    description: formData.get("description"),
  }

  const validatedFields = JudgeApplicationSchema.safeParse(parsedFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.format(),
    }
  }

  try {
    const response = await fetch("/api/email/judge", {
      method: "POST",
      body: JSON.stringify(parsedFormData),
    })

    if (response.ok) {
      return {
        message: "Application has been sent. We will contact you in 1-2 days",
      }
    } else {
      return {
        error:
          "Failed to send application. Please try again or contact us via socials",
      }
    }
  } catch {
    return {
      error:
        "Failed to send application. Please try again or contact us via socials",
    }
  }
}
