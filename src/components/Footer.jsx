import { motion } from "framer-motion";
import { Calendar, Zap, Users, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import AnimatedCounter from "./AnimatedCounter"; // If this file exists

<section className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
{/* Background Grid Pattern */}
<div className="absolute inset-0 opacity-10">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
      linear-gradient(rgba(159, 239, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(159, 239, 0, 0.1) 1px, transparent 1px)
    `,
      backgroundSize: "50px 50px",
    }}
  />
</div>

{/* Glowing Border Effect */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#9FEF00] to-transparent opacity-50" />

<div className="container mx-auto max-w-6xl relative z-10">
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-2 h-2 bg-[#9FEF00] rounded-full animate-pulse" />
      <span className="text-[#9FEF00] font-mono text-sm tracking-wider uppercase">{">"} Community Hub</span>
    </div>
    <h2 className="text-5xl font-bold mb-6 text-white font-mono">
      <span className="text-[#9FEF00]">[</span>
      Events
      <span className="text-[#9FEF00]">]</span>
    </h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
      Join our community through regular events, workshops, and networking sessions
    </p>
  </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {[
      {
        badge: { text: "LIVE", className: "bg-[#9FEF00]/20 text-[#9FEF00] border-[#9FEF00]/50" },
        title: "Weekly Tech Meetups",
        description: "Every Friday at 7 PM. Live coding sessions, career guidance, and networking opportunities.",
        extra: "200+ attendees last week",
        icon: <Calendar className="w-5 h-5" />,
        status: "active",
      },
      {
        badge: { text: "UPCOMING", className: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
        title: "Web3 & Blockchain Basics",
        description: "This Friday at 7:00 PM. Introduction to Web3 and Blockchain technology fundamentals.",
        extra: null,
        icon: <Zap className="w-5 h-5" />,
        status: "pending",
      },
    ].map((event, index) => (
      <motion.div
        key={index}
        className="relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Glowing border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9FEF00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 group-hover:border-[#9FEF00]/30 transition-all duration-300">
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#9FEF00]/50" />
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#9FEF00]/50" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#9FEF00]/50" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#9FEF00]/50" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className={`${event.badge.className} font-mono text-xs`}>
                {event.badge.text}
              </Badge>
              <div className="text-[#9FEF00]">{event.icon}</div>
            </div>

            <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#9FEF00] transition-colors">
              {">"} {event.title}
            </h3>

            <p className="text-gray-400 font-mono text-sm leading-relaxed">{event.description}</p>

            {event.extra && (
              <div className="flex items-center gap-2 text-sm text-[#9FEF00] font-mono">
                <Users className="w-4 h-4" />
                {event.extra}
              </div>
            )}

            {/* Status indicator */}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-800">
              <div
                className={`w-2 h-2 rounded-full ${event.status === "active" ? "bg-[#9FEF00] animate-pulse" : "bg-blue-400"}`}
              />
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {event.status === "active" ? "Broadcasting" : "Scheduled"}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}

    {/* Stats Terminal */}
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9FEF00]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 group-hover:border-[#9FEF00]/30 transition-all duration-300">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-[#9FEF00]" />
          </div>
          <span className="text-xs font-mono text-gray-500">stats.exe</span>
        </div>

        <div className="text-center space-y-6">
          <div>
            <motion.div
              className="text-4xl font-bold text-[#9FEF00] font-mono"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              200<span className="text-white">+</span>
            </motion.div>
            <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
              {">"} Average Attendance
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-800">
            <div className="text-center">
              <AnimatedCounter value="15+" />
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Events/Month</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value="95%" />
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>

          {/* Terminal cursor */}
          <div className="flex items-center justify-center gap-1 text-[#9FEF00] font-mono text-sm">
            <Trophy className="w-4 h-4" />
            <span>Elite Status</span>
            <div className="w-2 h-4 bg-[#9FEF00] animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  </div>

  <motion.div
    className="text-center mt-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        className="bg-transparent text-[#9FEF00] border-[#9FEF00] hover:bg-[#9FEF00] hover:text-black font-mono font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-[#9FEF00]/25 transition-all duration-300 uppercase tracking-wider"
      >
        {">"} Access All Events
      </Button>
    </motion.div>
  </motion.div>
</div>

{/* Bottom glowing line */}
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#9FEF00] to-transparent opacity-30" />
</section>