import { ShareIcon } from '../foundations/icons'

export default function MiniMovieCard({ poster, title, meta, onShare }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[20px] bg-surface-card p-4">
      <div className="relative h-[60px] w-[56px] shrink-0 overflow-hidden rounded-xl">
        <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-md-sb text-white">{title}</p>
        <p className="text-xs-r text-grey-100">{meta}</p>
      </div>
      <button
        type="button"
        onClick={onShare}
        aria-label="Compartir"
        className="text-white transition-opacity active:opacity-60"
      >
        <ShareIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
