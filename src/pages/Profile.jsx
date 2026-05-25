import TopBar from '../components/feature/TopBar'
import { user } from '../data/mock'

const STATS = [
  { label: 'Vistas', value: '124' },
  { label: 'Recomendadas', value: '38' },
  { label: 'En mi círculo', value: '3' },
]

const MENU = [
  'Mi historial',
  'Mis recomendaciones',
  'Notificaciones',
  'Preferencias',
  'Ayuda',
  'Cerrar sesión',
]

export default function Profile() {
  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <TopBar title="Perfil" />

      <main className="flex flex-col gap-8 p-4 pb-[100px]">
        <section className="flex flex-col items-center gap-3 pt-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-24 w-24 rounded-full border-2 border-meli-yellow object-cover"
          />
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-lg-sb text-white">{user.name}</h2>
            <p className="text-sm-r text-grey-200">{user.email}</p>
          </div>
        </section>

        <section className="flex items-center justify-around rounded-2xl bg-grey-500 p-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <p className="text-lg-sb text-white">{s.value}</p>
              <p className="text-xs-r text-grey-200">{s.label}</p>
            </div>
          ))}
        </section>

        <ul className="flex flex-col gap-1">
          {MENU.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm-r text-white transition-colors active:bg-grey-500/60"
              >
                <span>{item}</span>
                <span className="text-grey-200">›</span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
