import { PlusIcon } from '../foundations/icons'

// `variant`: "user" (default — avatar + optional dot) | "all" (yellow emoji circle) | "add" (white-border + plus)
export default function StoryItem({
  variant = 'user',
  label,
  avatar,
  emoji,
  active = false,
  hasUpdate = false,
  onClick,
}) {
  const labelClasses = active
    ? 'text-sm-r font-semibold text-white'
    : 'text-sm-r text-grey-200'

  let circle
  if (variant === 'all') {
    circle = (
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-meli-yellow bg-[#7C7321] text-2xl">
        {emoji ?? '👥'}
      </div>
    )
  } else if (variant === 'add') {
    circle = (
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white text-white">
        <PlusIcon className="h-6 w-6" />
      </div>
    )
  } else {
    circle = (
      <div className="relative">
        <img
          src={avatar}
          alt={label}
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
        {hasUpdate && (
          <span
            aria-hidden
            className="absolute right-0 top-0 h-2 w-2 rounded-full bg-meli-yellow ring-2 ring-surface-elevated"
          />
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-[60px] shrink-0 flex-col items-center gap-2 transition-transform active:scale-[0.97]"
    >
      {circle}
      <span className={labelClasses}>{label}</span>
    </button>
  )
}
