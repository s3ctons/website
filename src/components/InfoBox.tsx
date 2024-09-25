import Link from "next/link"

interface IProps {
  heading: string
  text: string
  buttonText: string
}

export const InfoBox = ({ heading, text, buttonText }: IProps) => {
  return (
    <div className="flex grow-0 flex-col border border-secondary-700 bg-secondary-800 p-6">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mb-4 mt-2 grow">{text}</p>
      <Link
        className="inline-block grow-0 self-start bg-primary-900 px-4 py-2 font-semibold hover:bg-primary-800"
        href="#"
      >
        {buttonText}
      </Link>
    </div>
  )
}
