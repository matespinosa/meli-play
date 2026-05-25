import Avatar from '../ui/Avatar'
import Button from '../ui/Button'
import Chip from '../ui/Chip'

export default function RecommendationCard({
  avatar,
  reviewerName,
  timeAgo,
  poster,
  isNew,
  title,
  comment,
  onWatch,
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar src={avatar} alt={reviewerName} size="sm" />
          <p className="text-md-sb text-white">{reviewerName} te recomendó</p>
        </div>
        <p className="text-xs-r text-grey-100">{timeAgo}</p>
      </div>

      <div className="relative flex w-full gap-3 rounded-[20px] border border-meli-yellow bg-surface-card p-4">
        {isNew && (
          <div className="absolute -top-[14px] right-5">
            <Chip variant="accent">Nueva</Chip>
          </div>
        )}

        <div className="relative h-[132px] w-[82px] shrink-0 overflow-hidden rounded-2xl">
          <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="text-xs-r text-grey-200">{reviewerName}</p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-md-sb text-white">Te recomendó “{title}”</p>
              <p className="text-xs-r text-grey-100">{comment}</p>
            </div>
            <Button onClick={onWatch} size="sm">
              Ver
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
