import { useMemo, useState } from 'react'
import TopBar from '../components/feature/TopBar'
import StoryRow from '../components/feature/StoryRow'
import CircleFeedCard from '../components/feature/CircleFeedCard'
import { circleFeed, circleMembers } from '../data/mock'

export default function MyCircle({ onBack, onOpenMovie }) {
  const [activeId, setActiveId] = useState('all')

  const membersById = useMemo(
    () => Object.fromEntries(circleMembers.map((m) => [m.id, m])),
    [],
  )

  const filteredFeed = useMemo(() => {
    if (activeId === 'all') return circleFeed
    return circleFeed.filter((item) => item.reviewerId === activeId)
  }, [activeId])

  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <TopBar title="Mi círculo" onBack={onBack} />

      <main className="flex flex-col gap-8 p-4 pb-[100px]">
        <StoryRow members={circleMembers} activeId={activeId} onSelect={setActiveId} />

        <div className="flex flex-col gap-4">
          {filteredFeed.map((item) => (
            <CircleFeedCard
              key={item.id}
              reviewer={membersById[item.reviewerId]}
              status={item.status}
              movie={item.movie}
              comment={item.comment}
              onClick={() => onOpenMovie?.(item.movieId)}
            />
          ))}
          {filteredFeed.length === 0 && (
            <p className="text-center text-sm-r text-grey-200">
              No hay recomendaciones de este contacto todavía.
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
