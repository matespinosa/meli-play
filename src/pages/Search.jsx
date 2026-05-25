import { useState } from 'react'
import TopBar from '../components/feature/TopBar'
import { CloseIcon, SearchIcon, SparkleIcon, Spinner } from '../components/foundations/icons'
import { movieDetails } from '../data/mock'

const AI_DELAY = 1200 // simulated "AI" latency
const SEARCH_RECOMMENDATIONS = [
  'the-bear',
  'dune-2',
  'past-lives',
  'oppenheimer',
  'fallout',
  'toy-story-4',
]
const stripText = (value) =>
  (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

const STOPWORDS = new Set([
  'una', 'uno', 'unos', 'unas', 'que', 'con', 'por', 'para', 'los', 'las',
  'del', 'sus', 'esta', 'este', 'eso', 'esa', 'ese', 'era', 'fue', 'son',
  'pero', 'cuando', 'como', 'sobre', 'donde', 'hace', 'algo', 'todo', 'todos',
  'muy', 'mas', 'más', 'sin', 'ser', 'son', 'hay', 'fui', 'tan',
])

// Naive keyword matcher across title / genre / synopsis / cast — enough to feel "smart"
// without actually calling an LLM. Returns top N matches with the reasons that matched.
function matchMovies(query, max = 3) {
  const tokens = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .split(/[^a-z0-9áéíóúñ]+/i)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w))

  if (tokens.length === 0) return []

  const scored = Object.values(movieDetails).map((m) => {
    const title = stripText(m.title)
    const genre = stripText(m.genre)
    const synopsis = stripText(m.synopsis)
    const cast = (m.cast || []).map((c) => stripText(c.name)).join(' ')

    const reasons = new Set()
    let score = 0
    for (const t of tokens) {
      if (title.includes(t)) { score += 4; reasons.add('título') }
      if (synopsis.includes(t)) { score += 2; reasons.add('trama') }
      if (genre.includes(t)) { score += 2; reasons.add('género') }
      if (cast.includes(t)) { score += 2; reasons.add('reparto') }
    }

    return { movie: m, score, reasons: Array.from(reasons) }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
}

function searchMovies(query) {
  const normalizedQuery = stripText(query).trim()
  if (!normalizedQuery) return []

  const words = normalizedQuery
    .split(/[^a-z0-9áéíóúñ]+/i)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))

  return Object.values(movieDetails)
    .map((movie) => {
      const title = stripText(movie.title)
      const genre = stripText(movie.genre)
      const synopsis = stripText(movie.synopsis)
      const seasons = stripText(movie.seasons)
      const cast = (movie.cast || []).map((c) => stripText(c.name)).join(' ')
      const searchable = `${title} ${genre} ${synopsis} ${seasons} ${cast} ${movie.year}`

      let score = 0
      if (title.includes(normalizedQuery)) score += 8
      if (genre.includes(normalizedQuery)) score += 4
      if (cast.includes(normalizedQuery)) score += 3
      if (synopsis.includes(normalizedQuery)) score += 2

      for (const word of words) {
        if (title.includes(word)) score += 5
        if (genre.includes(word)) score += 3
        if (cast.includes(word)) score += 2
        if (synopsis.includes(word)) score += 1
        if (seasons.includes(word)) score += 1
        if (String(movie.year).includes(word)) score += 1
      }

      return searchable.includes(normalizedQuery) || score > 0
        ? { movie, score }
        : null
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.movie.title.localeCompare(b.movie.title))
    .map(({ movie }) => movie)
}

export default function Search({ onOpenMovie }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [aiOpen, setAiOpen] = useState(false)
  const [aiQuery, setAiQuery] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiResults, setAiResults] = useState(null) // null = not searched yet
  const searchResults = searchMovies(searchQuery)
  const hasSearchQuery = searchQuery.trim().length > 0

  const handleSearch = () => {
    if (!aiQuery.trim() || aiLoading) return
    setAiLoading(true)
    setAiResults(null)
    setTimeout(() => {
      setAiResults(matchMovies(aiQuery))
      setAiLoading(false)
    }, AI_DELAY)
  }

  const closeAi = () => {
    setAiOpen(false)
    setAiQuery('')
    setAiResults(null)
    setAiLoading(false)
  }

  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <TopBar title="Búsqueda" showBell={false} />

      <main className="flex flex-col gap-5 p-4 pb-[100px]">
        <label className="flex items-center gap-3 rounded-pill bg-grey-500 px-4 py-3 text-grey-200">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Busca películas, series o personas"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="flex-1 bg-transparent text-sm-r text-white outline-none placeholder:text-grey-200"
          />
        </label>

        {hasSearchQuery && (
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-md-sb text-white">Resultados</h2>
              <span className="text-xs-r text-grey-200">{searchResults.length}</span>
            </div>

            {searchResults.length === 0 ? (
              <div className="rounded-2xl bg-grey-500/60 p-4 text-sm-r text-grey-200">
                No encontramos resultados para "{searchQuery}".
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {searchResults.map((movie) => (
                  <SearchResultCard
                    key={movie.id}
                    movie={movie}
                    onOpen={() => onOpenMovie?.(movie.id)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {!hasSearchQuery && !aiOpen ? (
          <button
            type="button"
            onClick={() => setAiOpen(true)}
            className="flex items-center gap-3 rounded-2xl border border-[#7957F6] bg-gradient-to-r from-[#312B42] to-[#28223F] p-4 text-left transition-all duration-200 ease-out active:scale-[0.98]"
          >
            <div className="flex shrink-0 items-center justify-center rounded-pill bg-[#2F2849] p-2 text-[#A78BFA]">
              <SparkleIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm-r font-medium text-[#7957F6]">¿No recuerdas el título?</p>
              <p className="text-xs-r text-white">
                Describe lo que recuerdas y Meli IA te ayuda a encontrarlo
              </p>
            </div>
          </button>
        ) : !hasSearchQuery ? (
          <section className="flex flex-col gap-4 rounded-2xl border border-[#7957F6] bg-gradient-to-r from-[#312B42] to-[#28223F] p-4">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#7957F6]">
                <SparkleIcon className="h-6 w-6" />
                <p className="text-md-sb">Buscar con Meli IA</p>
              </div>
              <button
                type="button"
                onClick={closeAi}
                aria-label="Cerrar búsqueda con IA"
                className="text-white transition-opacity active:opacity-70"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </header>

            <p className="text-sm-r text-grey-200">
              Cuéntanos de qué se trata: una escena, un género, dónde pasa o quién actúa.
            </p>

            <div className="flex flex-col gap-3">
              <label htmlFor="ai-query" className="text-xs-r text-grey-100">
                Describe el contenido
              </label>
              <div className="h-24 rounded-2xl border border-[#5C5C5C] px-[14px] py-4">
                <textarea
                  id="ai-query"
                  value={aiQuery}
                  onChange={(event) => setAiQuery(event.target.value)}
                  placeholder='Ej: "Era una serie de cocina en Chicago…"'
                  className="block h-full w-full resize-none border-0 bg-transparent text-xs-r text-white outline-none placeholder:text-[#767676]"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSearch}
              disabled={!aiQuery.trim() || aiLoading}
              aria-label={aiLoading ? 'Buscando coincidencias' : 'Buscar'}
              className="flex h-12 w-full items-center justify-center rounded-pill bg-[#7957F6] p-3 text-md-sb transition-all duration-200 ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {aiLoading ? (
                <span className="flex h-5 w-6 items-center gap-1" aria-hidden="true">
                  <span className="ai-wave-bar" style={{ height: '14px' }} />
                  <span className="ai-wave-bar" style={{ height: '20px' }} />
                  <span className="ai-wave-bar" style={{ height: '14px' }} />
                </span>
              ) : (
                <span className="text-white">Buscar</span>
              )}
            </button>

            {aiLoading && (
              <div className="flex items-center justify-center gap-2 pt-1 text-xs-r text-grey-200">
                <Spinner className="h-4 w-4" />
                <span>Meli IA está analizando tu descripción…</span>
              </div>
            )}

            {aiResults !== null && !aiLoading && (
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <SparkleIcon className="h-4 w-4 text-[#A78BFA]" />
                  <p className="text-xs-sb text-white">
                    Posibles resultados
                    {aiResults.length > 0 && (
                      <span className="ml-1 text-grey-200">({aiResults.length})</span>
                    )}
                  </p>
                </div>

                {aiResults.length === 0 ? (
                  <p className="text-xs-r text-grey-200">
                    No encontramos coincidencias. Intenta con otras palabras o agrega más detalles.
                  </p>
                ) : (
                  aiResults.map(({ movie, reasons }) => (
                    <ResultCard
                      key={movie.id}
                      movie={movie}
                      reasons={reasons}
                      onOpen={() => onOpenMovie?.(movie.id)}
                    />
                  ))
                )}
              </div>
            )}
          </section>
        ) : null}

        {!hasSearchQuery && !aiOpen && (
          <section className="flex flex-col gap-3 pt-1">
            <div className="flex items-center justify-between">
              <h2 className="text-md-sb text-white">Recomendadas para ti</h2>
              <span className="text-xs-r text-grey-200">Hoy</span>
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-4">
              {SEARCH_RECOMMENDATIONS.map((id) => {
                const movie = movieDetails[id]
                return (
                  <button
                    key={movie.id}
                    type="button"
                    onClick={() => onOpenMovie?.(movie.id)}
                    className="min-w-0 text-left transition-opacity active:opacity-75"
                  >
                    <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-grey-500">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                        <span className="rounded-pill bg-black/35 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                          {movie.matchScore}% match
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 min-w-0">
                      <p className="truncate text-xs-sb text-white">{movie.title}</p>
                      <p className="truncate text-[11px] font-normal leading-[1.3] text-grey-200">
                        {movie.year} · {movie.genre}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

function SearchResultCard({ movie, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex gap-3 rounded-2xl bg-grey-500/70 p-3 text-left transition-opacity active:opacity-75"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="h-[96px] w-[70px] shrink-0 rounded-xl object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        <p className="truncate text-md-sb text-white">{movie.title}</p>
        <p className="truncate text-xs-r text-grey-200">
          {movie.year} · {movie.genre}
        </p>
        <p className="line-clamp-2 text-xs-r text-grey-100">{movie.synopsis}</p>
      </div>
    </button>
  )
}

function ResultCard({ movie, reasons, onOpen }) {
  return (
    <article className="flex gap-3 rounded-2xl bg-grey-500/70 p-3">
      <button type="button" onClick={onOpen} className="block shrink-0 active:scale-95 transition-transform">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-[88px] w-[64px] rounded-xl object-cover"
        />
      </button>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <button type="button" onClick={onOpen} className="block text-left">
          <p className="truncate text-md-sb text-white">{movie.title}</p>
          <p className="truncate text-xs-r text-grey-200">
            {movie.year} · {movie.genre}
          </p>
        </button>

        {reasons.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {reasons.map((r) => (
              <span
                key={r}
                className="rounded-pill bg-[#2F2849] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#A78BFA]"
              >
                {r}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
