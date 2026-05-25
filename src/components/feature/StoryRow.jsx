import StoryItem from './StoryItem'

export default function StoryRow({ activeId, members, onSelect, onAdd }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4">
      <StoryItem
        variant="all"
        label="Todos"
        active={activeId === 'all'}
        onClick={() => onSelect?.('all')}
      />
      {members.map((m) => (
        <StoryItem
          key={m.id}
          variant="user"
          label={m.name}
          avatar={m.avatar}
          hasUpdate={m.hasUpdate}
          active={activeId === m.id}
          onClick={() => onSelect?.(m.id)}
        />
      ))}
      <StoryItem variant="add" label="Agregar" onClick={onAdd} />
    </div>
  )
}
