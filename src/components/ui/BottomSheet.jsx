import { useEffect, useState } from 'react'

const DURATION = 280 // keep in sync with the Tailwind duration class below

export default function BottomSheet({ open, onClose, children }) {
  // `mounted` controls whether the sheet is in the DOM at all.
  // `visible` toggles the transform/opacity classes — enter on next frame,
  // exit before unmount so the transition has a chance to play.
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

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

  // Lock body scroll while the sheet is on screen (including during close anim).
  useEffect(() => {
    if (!mounted) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      className={`absolute inset-0 z-50 flex items-end transition-colors duration-[280ms] ease-out ${
        visible ? 'bg-black/65' : 'bg-black/0'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative max-h-[88%] w-full overflow-y-auto rounded-t-[32px] bg-surface-elevated px-4 pb-6 pt-10 transition-transform duration-[280ms] ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          aria-hidden
          className="absolute left-1/2 top-3 h-1 w-16 -translate-x-1/2 rounded-full bg-grey-100/80"
        />
        {children}
      </div>
    </div>
  )
}
