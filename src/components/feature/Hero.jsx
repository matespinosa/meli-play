import Chip from '../ui/Chip'
import BackButton from './BackButton'

export default function Hero({
  image,
  recommendedBy,
  title,
  year,
  seasons,
  genre,
  matchScore,
  onBack,
}) {
  return (
    <div className="relative h-[248px] w-full overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      {/* Base layer: uniformly darkens the whole image so the hero reads more cinematic. */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Gradient: weights the bottom for text legibility and blends into the page bg. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/95" />

      {onBack && (
        <div className="absolute left-4 top-3 z-10">
          <BackButton onClick={onBack} />
        </div>
      )}

      <div className="relative flex h-full flex-col items-start justify-end gap-[5px] p-4">
        {recommendedBy && (
          <Chip variant="translucent" className="leading-[130%]">
            Recomendado por {recommendedBy}
          </Chip>
        )}
        <h1 className="text-lg-sb font-medium text-white leading-[130%]">{title}</h1>
        <div className="flex items-center gap-3 text-xs-r text-grey-100 leading-[130%]">
          {year && <span>{year}</span>}
          {seasons && <span>{seasons}</span>}
          {genre && <span>{genre}</span>}
        </div>
        {matchScore != null && <Chip variant="match" className="leading-[130%]">{matchScore}% Match</Chip>}
      </div>
    </div>
  )
}
