import { Spinner } from '../foundations/icons'

const VARIANTS = {
  primary: 'bg-meli-yellow text-meli-navy-text border-transparent',
  outline: 'bg-transparent text-white border-white',
}

const SIZES = {
  sm: 'text-sm-r px-4 py-2 gap-1',
  md: 'text-md-sb px-3 py-3 gap-2',
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = null,
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
}) {
  const isInactive = loading || disabled
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isInactive}
      className={`inline-flex items-center justify-center rounded-pill border transition-all duration-200 ease-out will-change-transform hover:brightness-95 active:scale-[0.97] active:opacity-85 disabled:active:scale-100 disabled:hover:brightness-100 ${
        isInactive ? 'cursor-not-allowed opacity-80' : ''
      } ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? 'w-full flex-1' : ''} ${className}`}
    >
      {loading ? <Spinner className="h-5 w-5" /> : icon}
      {children}
    </button>
  )
}
