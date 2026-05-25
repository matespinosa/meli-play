import MovieCard from './MovieCard'

export default function MovieRow({ movies, onSelect }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          poster={m.poster}
          title={m.title}
          reviewer={m.reviewer}
          onClick={onSelect ? () => onSelect(m.id) : undefined}
        />
      ))}
    </div>
  )
}
