export const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center justify-center border border-secondary-600 bg-secondary-800 px-2 py-1">
      <p className="whitespace-nowrap text-sm">{text}</p>
    </span>
  )
}
