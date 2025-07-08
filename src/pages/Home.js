"use client"

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image  from '../Image/ImageHawk.png'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import Image1 from '../Image/Logo1.png'
import { Check, TrendingUp, Star, Award, Shield, Zap, Calendar, Users, Trophy, Terminal, Code, Server, Monitor, Play, Settings } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Typewriter from "../components/ui/Typewriter"
import { AnimatedCounter } from "../components/ui/animated-counter"
import LoadingScreen from '../components/LoadingScreen'

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create your free account to access labs, events, and resources.",
  },
  {
    number: 2,
    title: "Choose a Path",
    description: "Select your learning path: networking, cloud, cybersecurity, or full-stack.",
  },
  {
    number: 3,
    title: "Practice in Labs",
    description: "Get hands-on experience with real-world tools and scenarios.",
  },
  {
    number: 4,
    title: "Earn Certifications",
    description: "Complete assessments and earn industry-recognized certificates.",
  },
  {
    number: 5,
    title: "Advance Your Career",
    description: "Showcase your skills, connect with employers, and land your dream job.",
  },
]

const testimonials = [
  {
    name: "Jane Doe",
    role: "Cloud Engineer",
    message: "The hands-on labs and community events helped me land my dream job!",
  },
  {
    name: "John Smith",
    role: "Cybersecurity Analyst",
    message: "The certifications are recognized by top companies. Highly recommended!",
  },
]

const features = [
  {
    icon: Shield,
    title: "Security-Focused",
    description: "Learn with labs and content designed by cybersecurity experts.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Certifications and real-world skills to boost your tech career.",
  },
  {
    icon: Star,
    title: "Expert Community",
    description: "Join a vibrant network of IT professionals and mentors.",
  },
  {
    icon: Award,
    title: "Recognized Credentials",
    description: "Earn certificates recognized by top employers and institutions.",
  },
]

const Hero = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const navigate = useNavigate()

  // Loading effect
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated glowing orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div className="relative z-10 container mx-auto px-6 py-20" style={{ y, opacity }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  The Premier IT Infrastructure & Cybersecurity Community{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    SecurityEagles
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-green-400 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Join thousands of professionals advancing their careers in networking, cloud computing, cybersecurity,
                  and cutting-edge technology solutions.
                </motion.p>
              </div>

              {/* Email signup form */}
              <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-md mx-auto flex flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    flex-1
                    bg-slate-800
                    border border-slate-700
                    text-white
                    placeholder:text-gray-400
                    focus:border-green-500
                    focus:ring-1 focus:ring-green-500
                    rounded-lg
                    h-11
                    shadow-sm
                    transition-all duration-300
                    outline-none
                  "
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="
                      min-w-[140px]
                      bg-gradient-to-r from-green-500 to-emerald-600
                      hover:from-green-600 hover:to-emerald-700
                      text-white
                      font-semibold
                      h-11
                      rounded-lg
                      shadow-md
                      transition-all duration-300
                      border-0
                      px-6
                      text-base
                    "
                  >
                    Join FREE
                  </Button>
                </motion.div>
              </motion.form>

              {/* Features */}
              <motion.div
                className="flex gap-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Beginner Friendly</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Guides and Challenges</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right content - Robot image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Animated glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-green-400/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                />

                {/* Robot image */}
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={Image}
                    alt="Cybersecurity learning illustration"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Animated floating elements */}
                <motion.div
                  className="absolute top-10 right-10 w-4 h-4 bg-green-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-32 left-4 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 relative bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-blue-600">SecurityEagles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch your tech career in one comprehensive platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/20 group h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-20 px-6 bg-blue-1400 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 font-mono text-sm tracking-wider uppercase">
              {">"} Practice Environment
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-white font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">[</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Hands-On Labs</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            Practice with real-world scenarios using industry-standard tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 " />
                <Badge variant="outline" className="bg-green-500/20 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 border-green-500/50 font-mono">
                  LIVE ENVIRONMENT
                </Badge>
              </div>

              <h3 className="text-3xl font-bold text-white font-mono">
                {">"} Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Practice</span>
              </h3>

              <p className="text-gray-400 leading-relaxed font-mono">
                Work with the same tools used by industry professionals. From cloud infrastructure to full-stack
                applications, practice with actual scenarios you'll face in your career.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Interactive Labs", icon: Server },
                { value: "98%", label: "Completion Rate", icon: Zap },
                { value: "24/7", label: "Lab Access", icon: Monitor },
                { value: "Latest", label: "Industry Tools", icon: Code },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 group-hover:border-green-500/30 transition-all duration-300">
                    {/* Corner brackets */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-green-500/50" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-green-500/50" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-green-500/50" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-green-500/50" />

                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                        <stat.icon className="w-4 h-4" />
                      </span>
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-mono font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 uppercase tracking-wider group"
                onClick={() => navigate('/labs')}
              >
                <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <span className="bg-clip-text text-white bg-gradient-to-r from-green-500 to-emerald-600"> Try a Free Lab</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

            <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg group-hover:border-green-500/30 transition-all duration-300">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
                  </div>
                  <span className="text-sm font-mono text-gray-400">lab-environment.sh</span>
                </div>

                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Badge
                      variant="outline"
                      className="bg-green-500/20 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 border-green-500/50 font-mono text-xs"
                    >
                      LIVE
                    </Badge>
                  </motion.div>
                  <Terminal className="w-4 h-4 text-green-500" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-white font-mono">{">"} Active Lab Session</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Broadcasting</span>
                    </div>
                  </div>

                  <motion.div
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 font-mono text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="flex items-center gap-2 text-green-500"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-gray-500">root@lab:</span>
                      <span className="text-green-400 font-mono">$ docker run -d --name web-server nginx</span>
                    </motion.div>

                    <motion.div
                      className="text-gray-400 ml-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {">"} Container started successfully...
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2 text-blue-400 mt-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <span className="text-gray-500">root@lab:</span>
                      <span className="text-blue-400 font-mono">$ kubectl apply -f deployment.yaml</span>
                    </motion.div>

                    <motion.div
                      className="text-gray-400 ml-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                    >
                      {">"} deployment.apps/web-app created
                    </motion.div>

                    <span className="text-gray-500">root@lab:</span>

                    <Typewriter
                      text={[
                        " $ Welcome To Security Eagles",
                        " $ The Premier IT Infrastructure & Cybersecurity Community"
                      ]}
                      speed={40}
                      delay={1000}
                      loop={true}
                      className="text-green-400 font-mono"
                    />
                  </motion.div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="text-sm text-gray-400 font-mono">{">"} Real-time collaboration enabled</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-gray-500">2 users connected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner brackets for the entire terminal */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-500/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-500/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-500/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-500/50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
    </section>

      {/* Community Events Section */}
      <section className="py-20 px-6 bg-blue-1400 relative overflow-hidden">
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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 font-mono text-sm tracking-wider uppercase">{">"} Community Hub</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-white font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">[</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Events</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            Join our community through regular events, workshops, and networking sessions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              badge: { text: "LIVE", className: "bg-gradient-to-r from-green-500 to-emerald-600/20 text-white border-green-500/50" },
              title: "Weekly Tech Meetups",
              description: "Every Friday at 7 PM. Live coding sessions, career guidance, and networking opportunities.",
              extra: "200+ attendees last week",
              icon: <Calendar className="w-5 h-5 text-white group-hover:text-green-500 transition-colors duration-300" />,
              status: "active",
            },
            {
              badge: { text: "UPCOMING", className: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
              title: "Web3 & Blockchain Basics",
              description: "This Friday at 7:00 PM. Introduction to Web3 and Blockchain technology fundamentals.",
              extra: null,
              icon: <Zap className="w-5 h-5 text-white group-hover:text-green-500 transition-colors duration-300" />,
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 group-hover:border-green-500/30 transition-all duration-300">
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green-500/50" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-green-500/50" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-500/50" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-500/50" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`${event.badge.className} font-mono text-xs`}>
                      {event.badge.text}
                    </Badge>
                    <div className="text-green-500">{event.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-green-500 transition-colors">
                    {">"} {event.title}
                  </h3>

                  <p className="text-white font-mono text-sm group-hover:text-green-500 leading-relaxed">{event.description}</p>

                  {event.extra && (
                    <div className="flex items-center gap-2 text-sm text-green-500 font-mono">
                      <Users className="w-4 h-4  transition-colors duration-300" />
                      {event.extra}
                    </div>
                  )}

                  {/* Status indicator */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800">
                    <div
                      className={`w-2 h-2 rounded-full ${event.status === "active" ? "bg-green-500 animate-pulse" : "bg-blue-400"}`}
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

            <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 group-hover:border-green-500/30 transition-all duration-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-gray-500">stats.exe</span>
              </div>

              <div className="text-center space-y-6">
                <div>
                  <motion.div
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 font-mono"
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
                <div className="flex items-center justify-center gap-1 text-green-500 font-mono text-sm">
                  <Trophy className="w-4 h-4 group-hover:text-green-500 transition-colors duration-300" />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600'> Elite Status</span>
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
              className=" text-green-500 border-white hover:bg-green-500 hover:text-black font-mono font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 uppercase tracking-wider"
              onClick={() => navigate('/events')}
            >
              {">"} Access All Events
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
    </section>

      {/* Certifications Section */}
      <section className="py-20 px-6  bg-blue-1400 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
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

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-500 font-mono text-sm tracking-wider uppercase">{">"} Credentials</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white font-mono">
              National <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Certifications</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
              Earn industry-recognized credentials that open doors to your tech career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Award className="h-6 w-6 text-green-500" />
                  </motion.div>
                  <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/50 font-mono">
                    ACCREDITED
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white font-mono">
                  {">"} Government-Backend <span className="text-green-500">Credentials</span>
                </h3>
                <p className="text-gray-400 leading-relaxed font-mono">
                  Officially recognized by the Ministry of Education and accepted by major tech companies. Each
                  certificate is blockchain-verified and easily shareable on professional platforms.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Blockchain Verified",
                    description: "Tamper-proof and instantly verifiable by employers",
                    color: "text-green-500",
                  },
                  {
                    icon: TrendingUp,
                    title: "Industry Accepted",
                    description: "Recognized by 500+ companies and government agencies",
                    color: "text-green-500",
                  },
                  {
                    icon: Star,
                    title: "LinkedIn Integration",
                    description: "Showcase credentials on professional platforms",
                    color: "text-green-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <div className="relative flex items-start gap-4 p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg group-hover:border-green-500/30 transition-all duration-300">
                      {/* Corner brackets */}
                      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-green-500/50" />
                      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-green-500/50" />

                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                        <item.icon className={`h-5 w-5 ${item.color} mt-1 flex-shrink-0`} />
                      </span>
                      <div>
                        <h4 className="font-bold text-white mb-1 font-mono">
                          {">"} {item.title}
                        </h4>
                        <p className="text-sm text-gray-400 font-mono">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-green-500 hover:bg-[#8FDF00] text-black font-mono font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 uppercase tracking-wider"
                  onClick={() => navigate('/certify')}
                >
                  {">"} View Certificate Programs
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 group-hover:border-green-500/30 transition-all duration-300">
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-500/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-500/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-500/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-500/50" />

                <div className="text-center space-y-6">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-[#0a0a0a] border border-green-500/30 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="h-8 w-8 text-green-500" />
                  </motion.div>

                  <div>
                    <motion.div
                      className="text-4xl font-bold text-green-500 mb-2 font-mono"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      24<span className="text-white">h</span>
                    </motion.div>
                    <div className="text-lg text-white mb-2 font-mono">Average Processing Time</div>
                    <div className="text-sm text-gray-400 font-mono">From completion to certificate delivery</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <AnimatedCounter value="350+" />
                      <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">
                        Certificates Issued
                      </div>
                    </div>
                    <div className="text-center">
                      <AnimatedCounter value="85%" />
                      <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">Job Placement Rate</div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">System Online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="container mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800">Start Your Tech Career Today</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Join the SecurityEagles Community now and get hands-on learning with national certification. Your future in
            tech starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-3 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border-0 group min-w-[220px]"
                onClick={() => navigate('/labs')}
              >
                Start Free Training
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <TrendingUp className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white px-16 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-900 min-w-[180px]"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Forum Section */}
      <section className="py-20 px-4 bg-slate-900">
        <motion.div
          className="container mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">Want to Go Further?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our SecurityEagles Forum to ask questions, share knowledge, and connect with other IT and cybersecurity
            enthusiasts!
          </p>
          <motion.a
            href="https://your-forum-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-16 py-3 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border-0">
              Join the Forum
            </Button>
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  )
}

// Animated Stats Section
const useIntersectionInView = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting

        if (inView && (!triggerOnce || !hasTriggered)) {
          setIsInView(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsInView(inView)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isInView }
}

export default Hero
