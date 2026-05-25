import Avatar from '../ui/Avatar'

export default function NoteCard({ avatar, reviewerName, note }) {
  return (
    <div className="flex w-full items-start gap-3 rounded-2xl bg-grey-500 p-3">
      <Avatar src={avatar} alt={reviewerName} size="lg" />
      <div className="flex flex-1 flex-col gap-3">
        <p className="text-xs-r text-grey-200">Nota de {reviewerName.toLowerCase()}</p>
        <p className="text-sm-r text-white">“{note}”</p>
      </div>
    </div>
  )
}
