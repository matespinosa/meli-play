import TopBar from '../components/feature/TopBar'
import ChipsRow from '../components/feature/ChipsRow'
import FeaturedCard from '../components/feature/FeaturedCard'
import RecommendationCard from '../components/feature/RecommendationCard'
import SectionHeader from '../components/feature/SectionHeader'
import MovieRow from '../components/feature/MovieRow'
import { circleMovies, featured, filters, recommendation, trending } from '../data/mock'

export default function Home({ onOpenMovie, onOpenMyCircle }) {
  const handleFilterTap = (label) => {
    if (label === 'Mi círculo') onOpenMyCircle?.()
  }

  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <TopBar title="Meli Play" />

      <main className="flex flex-col gap-8 p-4 pb-[100px]">
        <ChipsRow items={filters} onSelect={handleFilterTap} />

        <FeaturedCard {...featured} onClick={() => onOpenMovie?.(featured.id)} />

        <RecommendationCard {...recommendation} onWatch={() => onOpenMovie?.('the-bear')} />

        <section className="flex flex-col gap-6">
          <SectionHeader title="De tu círculo" count={3} onLink={onOpenMyCircle} />
          <MovieRow movies={circleMovies} onSelect={onOpenMovie} />
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeader title="Tendencias" />
          <MovieRow movies={trending} onSelect={onOpenMovie} />
        </section>
      </main>
    </div>
  )
}
