import Avatar from '../ui/Avatar'
import Checkbox from '../ui/Checkbox'

export default function UserSelectCard({ avatar, name, lastActive, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle?.(!selected)}
      className={`flex w-full items-center justify-between rounded-2xl p-3 text-left transition-colors ${
        selected ? 'border border-meli-yellow bg-meli-yellow/5' : 'border border-transparent'
      }`}
    >
      <div className="flex flex-1 items-center gap-[11px]">
        <Avatar src={avatar} alt={name} size="lg" />
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-sm-r text-white">{name}</p>
          <p className="text-xs-r text-grey-200">Activo hace {lastActive}</p>
        </div>
      </div>
      <Checkbox checked={selected} onChange={onToggle} ariaLabel={`Seleccionar ${name}`} />
    </button>
  )
}
