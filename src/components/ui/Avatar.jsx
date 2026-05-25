const SIZES = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
}

export default function Avatar({ src, alt, size = 'sm', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`shrink-0 rounded-full object-cover ${SIZES[size]} ${className}`}
    />
  )
}
