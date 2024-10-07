interface IProps {
  heading: string
  text: string
  button: React.ReactNode
}

export const InfoBox = ({ heading, text, button }: IProps) => {
  return (
    <div className="flex grow-0 flex-col border border-secondary-700 bg-secondary-800 p-6">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mb-4 mt-2 grow">{text}</p>
      {button}
    </div>
  )
}
