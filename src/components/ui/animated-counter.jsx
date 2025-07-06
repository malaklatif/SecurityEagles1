import { useCountUp } from "../hooks/use-count-up"

// Remove TypeScript interface and use plain JS props
// interface AnimatedCounterProps {
//   end: number
//   duration?: number
//   isActive: boolean
//   suffix?: string
// }

export function AnimatedCounter({ end, duration = 2000, isActive, suffix = "" }) {
  const count = useCountUp({ end, duration, isActive })

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}
