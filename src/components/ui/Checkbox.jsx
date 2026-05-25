import { CheckIcon } from '../foundations/icons'

export default function Checkbox({ checked, onChange, ariaLabel }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange?.(!checked)}
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
        checked ? 'bg-meli-yellow' : 'border border-grey-200 bg-transparent'
      }`}
    >
      {checked && <CheckIcon className="h-4 w-4 text-meli-navy-text" />}
    </button>
  )
}
