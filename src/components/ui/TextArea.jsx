export default function TextArea({
  label,
  optionalLabel,
  placeholder,
  value,
  onChange,
  rows = 3,
  className = '',
}) {
  return (
    <label className={`relative block w-full rounded-2xl border border-grey-100 px-[14px] py-[18px] ${className}`}>
      {(label || optionalLabel) && (
        <div className="flex items-center gap-2 pb-2 text-xs-r text-grey-200">
          {label && <span>{label}</span>}
          {optionalLabel && <span className="italic">({optionalLabel})</span>}
        </div>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="block w-full resize-none border-0 bg-transparent text-xs-r text-white outline-none placeholder:text-[color:#5C5C5C]"
      />
    </label>
  )
}
