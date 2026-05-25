import { ChevronRightIcon } from '../foundations/icons'
import Chip from '../ui/Chip'

export default function SectionHeader({ title, count, linkLabel = 'Ver todo', onLink }) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-lg-sb text-white">{title}</h2>
        {count != null && <Chip variant="ghost">{count} nuevas</Chip>}
      </div>

      <button
        type="button"
        onClick={onLink}
        className="flex items-center gap-3 text-xs-r text-white transition-opacity active:opacity-60"
      >
        <span>{linkLabel}</span>
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
