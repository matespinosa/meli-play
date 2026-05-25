import { useEffect, useState } from 'react'
import BottomSheet from '../ui/BottomSheet'
import Button from '../ui/Button'
import TextArea from '../ui/TextArea'
import MiniMovieCard from './MiniMovieCard'
import UserSelectCard from './UserSelectCard'
import ActionRow from './ActionRow'
import { LinkIcon, PlusIcon, ShareIcon } from '../foundations/icons'
import { contacts } from '../../data/mock'

const SEND_DELAY = 900 // simulated network latency

export default function RecommendSheet({ open, onClose, onSent, movie }) {
  const [selected, setSelected] = useState(() => new Set(['mama', 'hermana']))
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  // Reset state every time the sheet reopens.
  useEffect(() => {
    if (open) {
      setSelected(new Set(['mama', 'hermana']))
      setNote('')
      setLoading(false)
    }
  }, [open])

  const toggle = (id) => {
    if (loading) return
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleSend = () => {
    if (loading || selected.size === 0) return
    setLoading(true)
    setTimeout(() => {
      const recipients = contacts.filter((c) => selected.has(c.id))
      onSent?.({ recipients, note })
      onClose?.()
    }, SEND_DELAY)
  }

  if (!movie) return null

  return (
    <BottomSheet open={open} onClose={loading ? undefined : onClose}>
      <div className="flex flex-col gap-6">
        <MiniMovieCard
          poster={movie.image}
          title={movie.title}
          meta={`Serie ${movie.year} ${movie.genre}`}
        />

        <h2 className="text-md-sb text-white">Elige a quien recomiendas</h2>

        <div className="flex flex-col gap-3">
          {contacts.map((c) => (
            <UserSelectCard
              key={c.id}
              avatar={c.avatar}
              name={c.name}
              lastActive={c.lastActive}
              selected={selected.has(c.id)}
              onToggle={() => toggle(c.id)}
            />
          ))}

          <ActionRow
            icon={<PlusIcon className="h-5 w-5" />}
            label="Agregar nuevo contacto"
            hint="Invítalo a Meli Play"
          />
          <ActionRow
            icon={<LinkIcon className="h-5 w-5" />}
            label="Copiar enlace"
            hint="Compártelo en otra app"
          />
        </div>

        <TextArea
          label="Añadir nota"
          optionalLabel="Opcional"
          placeholder="¿Por qué la recomiendas?"
          value={note}
          onChange={setNote}
        />

        <Button
          variant="primary"
          fullWidth
          onClick={handleSend}
          loading={loading}
          disabled={selected.size === 0}
          icon={<ShareIcon className="h-5 w-5" />}
        >
          {loading ? 'Enviando…' : 'Enviar recomendación'}
        </Button>
      </div>
    </BottomSheet>
  )
}
