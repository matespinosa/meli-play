import StatusBar from '../components/feature/StatusBar'
import TopBar from '../components/feature/TopBar'
import { SearchIcon } from '../components/foundations/icons'

export default function Search() {
  return (
    <div className="flex min-h-full flex-col bg-surface-elevated">
      <StatusBar />
      <TopBar title="Búsqueda" showBell={false} />

      <main className="flex flex-col gap-6 p-4 pb-[100px]">
        <label className="flex items-center gap-3 rounded-pill bg-grey-500 px-4 py-3 text-grey-200">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Busca películas, series o personas"
            className="flex-1 bg-transparent text-sm-r text-white outline-none placeholder:text-grey-200"
          />
        </label>

        <div className="flex flex-col items-center justify-center gap-3 pt-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-grey-500 text-grey-200">
            <SearchIcon className="h-8 w-8" />
          </div>
          <h2 className="text-md-sb text-white">Encuentra qué ver</h2>
          <p className="max-w-[260px] text-sm-r text-grey-200">
            Busca por título, género o el nombre de alguien de tu círculo.
          </p>
        </div>
      </main>
    </div>
  )
}
