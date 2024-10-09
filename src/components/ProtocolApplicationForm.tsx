"use client"

import { useFormState } from "react-dom"
import { FaChevronDown } from "react-icons/fa"
import { sendProtocolApplication, ProtocolFormState } from "@/lib/serverActions"
import { FormValidationText } from "@/components/FormValidationText"
import { FormSubmitButton } from "@/components/FormSubmitButton"

export const ProtocolApplicationForm = () => {
  const initialState: ProtocolFormState = {}
  const [state, formAction] = useFormState(
    sendProtocolApplication,
    initialState,
  )
  return (
    <form action={formAction}>
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Audit Application
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
                <FormValidationText isValid={false} text={error} key="name" />
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
                <FormValidationText
                  isValid={false}
                  text={error}
                  key="telegram_username"
                />
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
                <FormValidationText isValid={false} text={error} key="email" />
              ))}
          </div>

          <div>
            <label htmlFor="company_name" className="mb-2 block">
              Company name *
            </label>
            <input
              id="company_name"
              name="company_name"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
            {state.errors?.company_name?._errors &&
              state.errors?.company_name?._errors.map((error: string) => (
                <FormValidationText
                  isValid={false}
                  text={error}
                  key="company_name"
                />
              ))}
          </div>

          <div>
            <label htmlFor="company_website" className="mb-2 block">
              Company website
            </label>
            <input
              id="company_website"
              name="company_website"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex grow flex-col">
            <label htmlFor="description" className="mb-2 block">
              Tell us about yout protocol
            </label>
            <textarea
              id="description"
              name="description"
              className="size-full min-h-[130px] resize-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            ></textarea>
          </div>

          <div>
            <div className="mb-2 block">Preferred start date *</div>
            <div className="relative">
              <select
                name="start_date"
                className="relative w-full cursor-pointer appearance-none border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
              >
                {[
                  "Within 1 week",
                  "Between 1 week and 1 month",
                  "More than 1 month away",
                ].map((typeOption, index) => (
                  <option value={typeOption} key={index}>
                    {typeOption}
                  </option>
                ))}
              </select>
              <FaChevronDown
                className="pointer-events-none absolute right-4 top-4"
                size={12}
              />
            </div>
          </div>

          <div>
            <label htmlFor="source" className="mb-2 block">
              How did you hear about Sectons?
            </label>
            <input
              id="source"
              name="source"
              className="w-full border border-secondary-700 bg-secondary-700 px-3 py-2 outline-none focus:border-secondary-500"
            />
          </div>

          <div>
            <FormSubmitButton />
            {state.error && (
              <FormValidationText isValid={false} text={state.error} />
            )}
            {state.message && (
              <FormValidationText isValid text={state.message} />
            )}
          </div>
        </div>
      </div>
    </form>
  )
}
