import { useEffect, useState } from 'react'
import { CheckIcon } from '../foundations/icons'

const DURATION = 280 // enter/exit animation
const AUTO_DISMISS = 3000

export default function Toast({ open, onClose, title, recipients = [] }) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  // Enter / exit lifecycle (mirrors BottomSheet pattern).
  useEffect(() => {
    if (open) {
      setMounted(true)
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
    setVisible(false)
    const id = setTimeout(() => setMounted(false), DURATION)
    return () => clearTimeout(id)
  }, [open])

  // Auto-dismiss after AUTO_DISMISS ms while open.
  useEffect(() => {
    if (!open) return
    const id = setTimeout(() => onClose?.(), AUTO_DISMISS)
    return () => clearTimeout(id)
  }, [open, onClose])

  if (!mounted) return null

  const avatars = recipients.slice(0, 3)

  return (
    <div
      className={`absolute bottom-6 left-4 right-4 z-50 transition-all duration-[280ms] ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex w-full items-center gap-5 rounded-2xl border border-green-500 bg-surface-card p-4">
        <div className="flex shrink-0 items-center justify-center rounded-full bg-green-200 p-1">
          <CheckIcon className="h-6 w-6 text-green-500" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-md-sb text-white">{title}</p>
          {recipients.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {avatars.map((r, i) => (
                  <img
                    key={r.id}
                    src={r.avatar}
                    alt={r.name}
                    className={`h-6 w-6 rounded-full object-cover ${i > 0 ? '-ml-3' : ''}`}
                  />
                ))}
              </div>
              <p className="text-md-r text-white">
                {recipients.length} {recipients.length === 1 ? 'persona' : 'personas'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
