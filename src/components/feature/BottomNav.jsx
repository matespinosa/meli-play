import { HomeIcon, PeopleIcon, SearchIcon } from '../foundations/icons'
import { user } from '../../data/mock'

const TABS = [
  { id: 'home', label: 'Inicio', Icon: HomeIcon },
  { id: 'search', label: 'Búsqueda', Icon: SearchIcon },
  { id: 'my-circle', label: 'Mi círculo', Icon: PeopleIcon },
  { id: 'profile', label: 'Perfil', isProfile: true },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav
      className="absolute bottom-4 left-4 right-4 z-40 rounded-[32px] border border-white/10 bg-black/40 px-3 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
      aria-label="Navegación principal"
    >
      <ul className="flex items-center justify-around">
        {TABS.map(({ id, label, Icon, isProfile }) => {
          const active = activeTab === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onTabChange?.(id)}
                aria-label={label}
                aria-current={active ? 'page' : undefined}
                className="flex items-center justify-center transition-transform duration-200 ease-out active:scale-[0.9]"
              >
                {isProfile ? (
                  <img
                    src={user.avatar}
                    alt={label}
                    className={`h-11 w-11 rounded-full object-cover transition-all duration-200 ${
                      active ? 'ring-2 ring-meli-yellow' : ''
                    }`}
                  />
                ) : (
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                      active
                        ? 'bg-meli-yellow/25 text-meli-yellow'
                        : 'text-white hover:text-meli-yellow'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
