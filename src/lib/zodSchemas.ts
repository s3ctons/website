import { z } from "zod"

export const ProtocolApplicationSchema = z.object({
  name: z
    .string()
    .trim()
    .refine((val) => val.length <= 30 && val.length >= 3, {
      message: "Must be from 3 to 30 symbols",
    }),
  telegram_username: z
    .string()
    .trim()
    .refine((val) => val.length <= 30 && val.length >= 3, {
      message: "Must be from 3 to 30 symbols",
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Field is required" })
    .pipe(z.string().email({ message: "Invalid email format" })),
  company_name: z
    .string()
    .trim()
    .refine((val) => val.length <= 30 && val.length >= 3, {
      message: "Must be from 3 to 30 symbols",
    }),
  company_website: z.string().max(100, {
    message: "Must be less or equal to 100 symbols",
  }),
  description: z.string(),
  start_date: z.string(),
  source: z.string(),
})

export type ProtocolApplication = z.infer<typeof ProtocolApplicationSchema>

export const JudgeApplicationSchema = z.object({
  name: z
    .string()
    .trim()
    .refine((val) => val.length <= 30 && val.length >= 3, {
      message: "Must be from 3 to 30 symbols",
    }),
  telegram_username: z
    .string()
    .trim()
    .refine((val) => val.length <= 30 && val.length >= 3, {
      message: "Must be from 3 to 30 symbols",
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Field is required" })
    .pipe(z.string().email({ message: "Invalid email format" })),
  source: z.string(),
  description: z
    .string()
    .trim()
    .refine((val) => val.length >= 30, {
      message: "Must be at least 30 symbols",
    }),
})

export type JudgeApplication = z.infer<typeof JudgeApplicationSchema>
