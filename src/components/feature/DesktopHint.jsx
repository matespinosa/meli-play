import { useEffect, useState } from 'react'
import BottomSheet from '../ui/BottomSheet'
import { SparkleIcon } from '../foundations/icons'

const STORAGE_KEY = 'meli-play:desktop-hint-dismissed'
const DESKTOP_BREAKPOINT = 1000
const SHOW_DELAY = 700 // ms before the sheet slides in on first load

export default function DesktopHint() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < DESKTOP_BREAKPOINT) return
    if (window.localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, '1')
    }
  }

  return (
    <BottomSheet open={open} onClose={handleClose}>
      <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-meli-yellow/20 text-meli-yellow">
          <SparkleIcon className="h-6 w-6" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg-sb text-white">Mejor desde tu celular</h2>
          <p className="text-sm-r text-grey-200">
            Meli Play está pensado como una experiencia mobile. Para verlo tal
            cual fue diseñado, abre este prototipo en tu teléfono o reduce el
            ancho de la ventana a menos de 1000px.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="mt-2 flex w-full items-center justify-center rounded-pill bg-meli-yellow p-3 text-md-sb text-meli-navy-text transition-all duration-200 ease-out active:scale-[0.97]"
        >
          Continuar en escritorio
        </button>
      </div>
    </BottomSheet>
  )
}
