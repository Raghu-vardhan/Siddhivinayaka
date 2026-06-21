const P = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  pin: <><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  caret: <path d="m6 9 6 6 6-6"/>,
  flask: <><path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7 3h10M8 14h8"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18"/></>,
  gear: <><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3.2"/></>,
  building: <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6"/>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></>,
  truck: <><path d="M3 7h13v10H3zM16 10h3l2 3v4h-5M5.5 17a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/></>,
  globe2: <><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></>,
  textile: <path d="M4 4h16v4l-3 2v10H7V10L4 8z"/>,
  paint: <><path d="M3 12a9 9 0 1 0 18 0c0-5-4-9-9-9-2 4-9 4-9 9Z"/><circle cx="12" cy="12" r="2.5"/></>,
  drop: <path d="M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10Z"/>,
  cube: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9z"/></>,
  beaker: <path d="M5 11a7 7 0 0 1 14 0M3 11h18l-2 9H5z"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/></>,
  chart: <path d="M3 3v18h18M7 14l3-3 3 3 5-6"/>,
  shield: <><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/></>,
  box: <><path d="m3 7 9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7"/></>,
  lock: <><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4z"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></>,
  star: <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>,
  grid: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></>,
  factory: <><path d="M4 7h13v10H4zM17 10h3l2 3v4h-5"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></>,
  users: <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM4 21a8 8 0 0 1 16 0"/>,
  award: <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></>,
  leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2-2 6-6 6 2 0 4-1 5-3 0 6-5 10-7 15z"/>,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></>,
}

export default function Icon({ name, size = 24, stroke = 1.7, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
         strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {P[name] || null}
    </svg>
  )
}
