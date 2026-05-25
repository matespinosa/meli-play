import { useState } from 'react'
import Hero from '../components/feature/Hero'
import Button from '../components/ui/Button'
import NoteCard from '../components/feature/NoteCard'
import Section from '../components/feature/Section'
import CastRow from '../components/feature/CastRow'
import RecommendSheet from '../components/feature/RecommendSheet'
import Toast from '../components/feature/Toast'
import { PlayIcon, ShareIcon } from '../components/foundations/icons'
import { movieDetails } from '../data/mock'

export default function MovieDetail({ movieId = 'the-bear', onBack }) {
  const movie = movieDetails[movieId]
  const [sheetOpen, setSheetOpen] = useState(false)
  const [toast, setToast] = useState({ open: false, recipients: [] })

  if (!movie) return null

  const handleSent = ({ recipients }) => {
    // Wait for the sheet's exit animation (~280ms) before slipping the toast in.
    setTimeout(() => setToast({ open: true, recipients }), 320)
  }

  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <Hero
        image={movie.image}
        recommendedBy={movie.recommendedBy}
        title={movie.title}
        year={movie.year}
        seasons={movie.seasons}
        genre={movie.genre}
        matchScore={movie.matchScore}
        onBack={onBack}
      />

      <main className="flex flex-col gap-6 p-4 pb-12">
        <div className="flex gap-4">
          <Button variant="primary" fullWidth icon={<PlayIcon className="h-5 w-5" />}>
            Ver ahora
          </Button>
          <Button
            variant="outline"
            fullWidth
            icon={<ShareIcon className="h-5 w-5" />}
            onClick={() => setSheetOpen(true)}
          >
            Recomendar
          </Button>
        </div>

        {movie.note && (
          <NoteCard
            avatar={movie.note.avatar}
            reviewerName={movie.note.reviewerName}
            note={movie.note.text}
          />
        )}

        <Section title="Sinopsis">
          <p className="text-sm-r text-grey-200">{movie.synopsis}</p>
        </Section>

        <Section title="Elenco">
          <CastRow cast={movie.cast} />
        </Section>
      </main>

      <RecommendSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSent={handleSent}
        movie={movie}
      />

      <Toast
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        title="Recomendación enviada"
        recipients={toast.recipients}
      />
    </div>
  )
}
