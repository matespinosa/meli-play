export default function Section({ title, children, className = '' }) {
  return (
    <section className={`flex w-full flex-col gap-4 ${className}`}>
      <h2 className="text-md-sb text-white">{title}</h2>
      {children}
    </section>
  )
}
