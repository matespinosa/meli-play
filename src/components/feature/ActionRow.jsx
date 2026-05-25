export default function ActionRow({ icon, label, hint, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-dashed border-grey-200 p-3 text-left transition-colors active:bg-grey-500/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grey-500 text-white">
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm-r text-white">{label}</p>
        {hint && <p className="text-xs-r text-grey-200">{hint}</p>}
      </div>
    </button>
  )
}
