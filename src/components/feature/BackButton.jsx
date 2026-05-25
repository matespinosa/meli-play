import { ChevronLeftIcon } from '../foundations/icons'

export default function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Volver"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-opacity active:opacity-70"
    >
      <ChevronLeftIcon className="h-5 w-5" />
    </button>
  )
}
