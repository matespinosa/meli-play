import Chip from '../ui/Chip'

export default function ChipsRow({ items, onSelect }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
      {items.map((label) =>
        onSelect ? (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(label)}
            className="shrink-0 transition-transform active:scale-[0.97]"
          >
            <Chip variant="filter">{label}</Chip>
          </button>
        ) : (
          <Chip key={label} variant="filter">
            {label}
          </Chip>
        ),
      )}
    </div>
  )
}
