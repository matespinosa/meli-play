import { BellIcon, ChevronLeftIcon } from '../foundations/icons'

export default function TopBar({ title = 'Meli Play', onBack, showBell = true }) {
  return (
    <div className="flex items-center justify-between bg-surface-elevated px-4 py-[10px]">
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Volver"
            className="text-white transition-opacity active:opacity-60"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        )}
        <h1 className="text-md-sb text-white">{title}</h1>
      </div>

      {showBell && (
        <button
          type="button"
          aria-label="Notificaciones"
          className="text-white transition-opacity active:opacity-60"
        >
          <BellIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
