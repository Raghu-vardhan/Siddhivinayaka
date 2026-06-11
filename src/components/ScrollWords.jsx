import { useEffect, useRef, useState } from 'react'

export default function ScrollWords({ text, as: Tag = 'h2', className = '', style }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.unobserve(el) } },
      { threshold: 0.2, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={className} style={style}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="sw-outer">
          <span
            className={`sw${shown ? ' sw--in' : ''}`}
            style={{ transitionDelay: `${(i * 0.075).toFixed(3)}s` }}
          >
            {word}
          </span>
          {' '}
        </span>
      ))}
    </Tag>
  )
}
