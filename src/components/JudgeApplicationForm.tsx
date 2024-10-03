"use client"

import { useFormState, useFormStatus } from "react-dom"
import { sendJudgeApplication, JudgeFormState } from "@/lib/serverActions"

export const JudgeApplicationForm = () => {
  const initialState: JudgeFormState = {}
  const [state, formAction] = useFormState(sendJudgeApplication, initialState)

  return (
    <form action={formAction}>
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Judge Audit Application
      </h2>

      <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-8">
        <div className="flex w-full flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-2 block">
              Name *
            </label>
            <input
              id="name"
              name="name"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
            {state.errors?.name?._errors &&
              state.errors?.name?._errors.map((error: string) => (
                <p className="mt-1 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <label htmlFor="telegram_username" className="mb-2 block">
              Telegram username *
            </label>
            <input
              id="telegram_username"
              name="telegram_username"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
            {state.errors?.telegram_username?._errors &&
              state.errors?.telegram_username?._errors.map((error: string) => (
                <p className="mt-1 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block">
              Email *
            </label>
            <input
              id="email"
              name="email"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
            {state.errors?.email?._errors &&
              state.errors?.email?._errors.map((error: string) => (
                <p className="mt-1 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <label htmlFor="sourse" className="mb-2 block">
              How did you hear about Sectons?
            </label>
            <input
              id="sourse"
              name="sourse"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex grow flex-col">
            <label htmlFor="description" className="mb-2 block">
              Tell us about yourself *
            </label>
            <textarea
              id="description"
              name="description"
              className="size-full min-h-[200px] resize-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
              placeholder="Your qualification, experience, achievements"
            ></textarea>
            {state.errors?.description?._errors &&
              state.errors?.description?._errors.map((error: string) => (
                <p className="mt-1 text-sm text-red-400" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <SubmitButton />
            {state.error && (
              <p className="mt-2 text-sm text-red-400">{state.error}</p>
            )}
            {state.message && (
              <p className="mt-2 text-sm text-primary-400">{state.message}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      className="mt-8 w-full bg-primary-900 px-[13px] py-[9px] font-bold hover:bg-primary-800 disabled:bg-secondary-700"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  )
}
