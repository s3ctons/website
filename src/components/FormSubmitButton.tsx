import { useFormStatus } from "react-dom"

export const FormSubmitButton = () => {
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
