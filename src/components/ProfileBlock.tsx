import { FaFrog } from "react-icons/fa"

export const ProfileBlock = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-between gap-4 border border-secondary-700 bg-secondary-800 p-3 sm:flex-row sm:items-center sm:gap-2">
      <div className="flex items-center gap-6 sm:justify-between">
        <div className="bg-secondary-900 p-5">
          <FaFrog className="size-8 text-red-300" />
        </div>
        <div className="text-lg">{name}</div>
      </div>
      <div className="sm:pr-6">No audits you participated in</div>
    </div>
  )
}
