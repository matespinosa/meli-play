export function BellIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 6.44v3.33M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.5 23.5 0 0 0 14.74 0 2.18 2.18 0 0 0 1.2-3.25l-1.27-2.12c-.34-.58-.62-1.6-.62-2.28v-2.1C18.7 5 15.7 2 12.02 2Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M15.33 18.82A3.33 3.33 0 0 1 12 22.15a3.34 3.34 0 0 1-2.36-.98 3.34 3.34 0 0 1-.97-2.35"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export function ChevronRightIcon({ className = 'w-4 h-4', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.91 19.92 15.43 13.4a1.98 1.98 0 0 0 0-2.8L8.91 4.08"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronLeftIcon({ className = 'w-6 h-6', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.09 19.92 8.57 13.4a1.98 1.98 0 0 1 0-2.8l6.52-6.52"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlayIcon({ className = 'w-6 h-6', fill = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.94 12V8.39c0-4.49 3.18-6.32 7.06-4.08L14.13 6l3.13 1.8c3.88 2.25 3.88 5.9 0 8.15L14.13 17.77l-3.13 1.8c-3.88 2.24-7.06.41-7.06-4.08V12Z"
        fill={fill}
      />
    </svg>
  )
}

export function ShareIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.96 6.17V2.5L21.5 7.04l-4.54 4.55V7.8c-3.16 0-5.72 2.56-5.72 5.72 0 .96.24 1.87.66 2.67-1.93-1.06-3.23-3.11-3.23-5.46 0-3.46 2.8-6.26 6.27-6.26"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.92 21.5h4.16c4.16 0 5.83-1.67 5.83-5.83v-1.04"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.09 14.63v1.04c0 4.16 1.67 5.83 5.83 5.83"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CloseIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckIcon({ className = 'w-4 h-4', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8.5 6.2 11.6 13 4.8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlusIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12h12M12 6v12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HomeIcon({ className = 'w-6 h-6', stroke = 'currentColor', fill = 'none' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.02 2.84 3.63 7.04C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.99v-3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon({ className = 'w-6 h-6', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PeopleIcon({ className = 'w-6 h-6', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.43 4.43 0 0 1 9 2a4.44 4.44 0 0 1 .16 8.87Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.41 4a3.5 3.5 0 0 1 1.78 6.52c-.13 0-.23 0-.36.04-1.79-.05-3.21-1.52-3.21-3.33 0-.92.42-1.74 1.07-2.28A3.46 3.46 0 0 1 16.41 4Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.06 20a4.4 4.4 0 0 0 1.79-.79c1.49-1.12 1.49-2.96 0-4.08-.55-.42-1.17-.7-1.83-.84"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function UserIcon({ className = 'w-6 h-6', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Spinner({ className = 'w-5 h-5' }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.25" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SparkleIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3l1.66 5.34L19 10l-5.34 1.66L12 17l-1.66-5.34L5 10l5.34-1.66L12 3Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M18.5 15.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LinkIcon({ className = 'w-5 h-5', stroke = 'currentColor' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.06 10.94a4.95 4.95 0 0 0-7 0l-3.06 3.06a4.95 4.95 0 0 0 7 7l1.94-1.94M10.94 13.06a4.95 4.95 0 0 0 7 0l3.06-3.06a4.95 4.95 0 0 0-7-7l-1.94 1.94"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SignalIcon({ className = 'w-[18px] h-3' }) {
  return (
    <svg className={className} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="8" width="3" height="4" rx="0.5" fill="white" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.5" fill="white" />
      <rect x="9.5" y="3" width="3" height="9" rx="0.5" fill="white" />
      <rect x="14" y="0.5" width="3" height="11.5" rx="0.5" fill="white" />
    </svg>
  )
}

export function WifiIcon({ className = 'w-[17px] h-3' }) {
  return (
    <svg className={className} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 2.2c2.65 0 5.18 1 7.12 2.82a.55.55 0 0 0 .78-.01l1.05-1.07a.61.61 0 0 0-.01-.84A13.36 13.36 0 0 0 8.5 0 13.36 13.36 0 0 0-.94 3.1a.61.61 0 0 0-.01.84l1.05 1.07a.55.55 0 0 0 .78.01A10.36 10.36 0 0 1 8.5 2.2Z" fill="white" />
      <path d="M8.5 6c1.69 0 3.31.62 4.56 1.75a.6.6 0 0 0 .8-.02l1.06-1.08a.6.6 0 0 0-.02-.86 9.55 9.55 0 0 0-12.8 0 .6.6 0 0 0-.02.86L3.14 7.73a.6.6 0 0 0 .8.02A6.74 6.74 0 0 1 8.5 6Z" fill="white" />
      <path d="M11.55 9.4a.62.62 0 0 0 .02-.88A4.5 4.5 0 0 0 8.5 7.3a4.5 4.5 0 0 0-3.07 1.22.62.62 0 0 0 .02.88l2.62 2.62c.24.24.63.24.86 0l2.62-2.62Z" fill="white" />
    </svg>
  )
}

export function BatteryIcon({ className = 'w-[27px] h-[13px]' }) {
  return (
    <svg className={className} viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="white" opacity="0.5" />
      <rect x="2" y="2" width="20" height="9" rx="2" fill="white" />
      <path d="M25 4.5v4a1 1 0 0 0 .7-.95v-2.1a1 1 0 0 0-.7-.95Z" fill="white" opacity="0.5" />
    </svg>
  )
}
