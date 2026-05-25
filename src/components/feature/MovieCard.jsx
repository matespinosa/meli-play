import Avatar from '../ui/Avatar'

export default function MovieCard({ poster, title, reviewer, onClick }) {
  const Wrapper = onClick ? 'button' : 'div'
  return (
    <Wrapper
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`flex w-[126px] shrink-0 flex-col gap-2 text-left ${
        onClick ? 'cursor-pointer transition-opacity active:opacity-80' : ''
      }`}
    >
      <div className="relative h-[182px] w-[126px] overflow-hidden rounded-2xl">
        <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />

        {reviewer && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-pill bg-white/25 py-[2px] pl-[2px] pr-2 backdrop-blur-sm">
            <Avatar src={reviewer.avatar} alt={reviewer.name} size="sm" />
            <span className="text-xs-r text-white">{reviewer.name}</span>
          </div>
        )}
      </div>
      <p className="text-md-r text-white">{title}</p>
    </Wrapper>
  )
}
