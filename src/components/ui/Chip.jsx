const VARIANTS = {
  // dark filter chip in the top scroller
  filter: 'bg-grey-500 text-white text-sm-r px-3 py-2',
  // white "Estreno" tag over the hero image
  light: 'bg-white text-meli-yellow-text text-xs-r px-3 py-1',
  // translucent count chip ("3 nuevas")
  ghost: 'bg-white/15 text-white text-xs-r px-3 py-1',
  // yellow "Nueva" badge
  accent: 'bg-meli-yellow text-meli-yellow-text text-xs-sb px-2 py-1',
  // translucent grey badge over hero ("Recomendado por Mamá")
  translucent: 'bg-[rgba(119,119,119,0.4)] text-white text-xs-r px-2 py-[6px]',
  // green match score chip ("98% Match") and "Vista" state in Mi círculo feed
  match: 'bg-green-200/20 text-green-500 text-xs-r px-2 py-1',
  // soft yellow translucent chip with yellow text — "Nueva" badge inside Mi círculo cards
  'soft-yellow': 'bg-meli-yellow/30 text-meli-yellow text-xs-r px-2 py-1',
}

export default function Chip({ children, variant = 'filter', className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-pill ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
