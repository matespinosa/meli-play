import CastMember from './CastMember'

export default function CastRow({ cast }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
      {cast.map((member) => (
        <CastMember key={member.id} photo={member.photo} name={member.name} />
      ))}
    </div>
  )
}
