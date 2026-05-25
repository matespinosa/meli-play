import Avatar from '../ui/Avatar'
import Chip from '../ui/Chip'

const STATUS_VARIANT = {
  new: 'soft-yellow',
  seen: 'match',
}

const STATUS_LABEL = {
  new: 'Nueva',
  seen: 'Vista',
}

export default function CircleFeedCard({
  reviewer,
  status, // "new" | "seen"
  movie,
  comment,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col gap-3 rounded-2xl bg-grey-500 p-3 text-left transition-opacity active:opacity-90"
    >
      <header className="flex items-start gap-4">
        <Avatar src={reviewer.avatar} alt={reviewer.name} size="sm" />
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-xs-sb text-white">{reviewer.name}</p>
          <p className="text-xs-r text-grey-200">Te recomendó</p>
        </div>
        {status && <Chip variant={STATUS_VARIANT[status]}>{STATUS_LABEL[status]}</Chip>}
      </header>

      <div className="flex items-start gap-3">
        <div className="relative h-[113px] w-[69px] shrink-0 overflow-hidden rounded-xl">
          <img
            src={movie.poster}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-md-sb text-white">{movie.title}</p>
            <p className="text-xs-r text-grey-100">
              {movie.type}&nbsp;&nbsp;{movie.year}&nbsp;&nbsp;{movie.genre}
            </p>
          </div>
          {comment && comment !== '-' && <p className="text-sm-r text-white">“{comment}”</p>}
        </div>
      </div>
    </button>
  )
}
