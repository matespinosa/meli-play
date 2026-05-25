import Chip from '../ui/Chip'

export default function FeaturedCard({ image, badge, title, type, year, genres, onClick }) {
  const Wrapper = onClick ? 'button' : 'div'
  return (
    <Wrapper
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`relative block h-[174px] w-full overflow-hidden rounded-2xl text-left ${
        onClick ? 'transition-transform active:scale-[0.99]' : ''
      }`}
    >
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative flex h-full flex-col justify-end gap-[10px] p-4">
        <div className="flex w-[220px] flex-col items-start gap-[5px]">
          {badge && <Chip variant="light">{badge}</Chip>}
          <h2 className="text-lg-sb font-medium text-white">{title}</h2>
          <div className="flex items-center gap-4 text-xs-r text-grey-100">
            <span>{type}</span>
            <div className="flex items-center gap-1">
              <span>{year}</span>
              {genres.map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
