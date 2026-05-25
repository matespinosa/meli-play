export default function CastMember({ photo, name }) {
  return (
    <div className="flex w-[84px] shrink-0 flex-col items-center gap-3">
      <img
        src={photo}
        alt={name}
        className="h-[60px] w-[60px] rounded-full object-cover"
      />
      <p className="w-[100px] text-center text-sm-r text-white">{name}</p>
    </div>
  )
}
