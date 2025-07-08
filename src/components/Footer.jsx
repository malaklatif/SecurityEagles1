import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Github, Mail, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  const containerRef = useRef(null)

  // Simple mouse tracking
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  // Simple wave transformations
  const waveOffset = useTransform(springX, [0, 1], [-40, 40])
  const waveAmplitude = useTransform(springY, [0, 1], [20, 60])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <footer ref={containerRef} className="relative">
        {/* Single Clean Wave */}
        <div className="relative">
          <svg className="w-full h-32" viewBox="0 0 1200 150" preserveAspectRatio="none">
            <motion.path
              d="M0,75 C300,25 900,125 1200,75 L1200,150 L0,150 Z"
              fill="#1e3a8a"
              animate={{
                d: [
                  "M0,75 C300,25 900,125 1200,75 L1200,150 L0,150 Z",
                  "M0,85 C300,135 900,35 1200,85 L1200,150 L0,150 Z",
                  "M0,75 C300,25 900,125 1200,75 L1200,150 L0,150 Z",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Simple Content */}
        <div className="bg-blue-900">
          <div className="container mx-auto px-6 py-12">
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              {[Github, Mail, Youtube, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-blue-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Navigation */}
            <nav className="flex justify-center space-x-8 mb-8">
              {["Home", "About", "Skills", "Teams", "Contact"].map((item) => (
                <a key={item} href="#" className="text-white font-medium hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            {/* Simple Footer Text */}
            <div className="text-center">
              <p className="text-white">&copy; 2024 Simple Waves. Clean design.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}