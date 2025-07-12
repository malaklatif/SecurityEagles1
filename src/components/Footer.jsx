import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Github, Mail, Youtube, Instagram, Twitter, Linkedin, Users, BookOpen, Calendar } from "lucide-react"
import logoImage from '../Image/Logo1.png'

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
      
        {/* Main Footer Content */}
        <div className="bg-slate-900">
          <div className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <img src={logoImage} alt="SecurityEagles Logo" className="w-8 h-8" />
                  <h3 className="text-xl font-bold text-white">SecurityEagles</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Empowering cybersecurity professionals with cutting-edge training, 
                  hands-on labs, and a vibrant community to advance your security career.
                </p>
                <div className="flex space-x-4 pt-4">
                  {[Github, Twitter, Linkedin, Youtube].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-500 hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Events", href: "/events" },
                    { name: "Labs", href: "/labs" },
                    { name: "News", href: "/news" },
                    { name: "Contact", href: "/contact" }
                  ].map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-slate-400 hover:text-cyan-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Resources</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Documentation", icon: BookOpen },
                    { name: "Community", icon: Users },
                    { name: "Events", icon: Calendar },
                    { name: "Training", icon: BookOpen },
                    { name: "Blog", icon: BookOpen },
                    { name: "Support", icon: Users }
                  ].map((item) => (
                    <li key={item.name} className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4 text-slate-500" />
                      <a 
                        href="#" 
                        className="text-slate-400 hover:text-cyan-500 transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-400 text-sm">info@securityeagles.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-400 text-sm">support@securityeagles.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-500" />
                    <span className="text-slate-400 text-sm">Join our Discord</span>
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-8">
                  <h5 className="text-sm font-medium text-white mb-3">Stay Updated</h5>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-r-lg text-sm font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-slate-400 text-sm">
                  <p>&copy; 2024 SecurityEagles. All rights reserved.</p>
                </div>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">Terms of Service</a>
                  <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Bottom Border Line */}
        <div className="border-b-2 border-cyan-500/20"></div>
      </footer>
  )
}