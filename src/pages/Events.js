'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Globe, Import } from 'lucide-react'
import { motion } from "framer-motion"
import Image from '../Image/ImageHawk.png'
import Image1 from '../Image/Logo1.png'

// API service functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

const apiService = {
  async getUpcomingEvents() {
    const response = await fetch(`${API_BASE_URL}/events/upcoming/`)
    if (!response.ok) throw new Error('Failed to fetch upcoming events')
    return response.json()
  },

  async getPastEvents() {
    const response = await fetch(`${API_BASE_URL}/events/past/`)
    if (!response.ok) throw new Error('Failed to fetch past events')
    return response.json()
  },

  async getEventStats() {
    const response = await fetch(`${API_BASE_URL}/events/stats/`)
    if (!response.ok) throw new Error('Failed to fetch event stats')
    return response.json()
  },

  async registerForEvent(eventId) {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    return response.json()
  },

  async subscribeNewsletter(email) {
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    return response.json()
  }
}

// Add mock data for fallback
const mockUpcomingEvents = [
  {
    id: 1,
    title: "Weekly Tech Meetups",
    description: "Every Friday at 7 PM. Live coding sessions, career guidance, and networking opportunities.",
    date: "2024-06-14",
    time: "19:00",
    duration: "2h",
    location: "Online",
    type: "Webinar",
    category: "Career Development",
    speaker: "Jane Doe",
    speaker_title: "Senior Engineer",
    registered: 120,
    capacity: 200,
    is_online: true
  }
]
const mockPastEvents = [
  {
    id: 1,
    title: "Cloud Security Bootcamp",
    date: "2024-05-10",
    attendees: 180,
    rating: 4.8
  }
]
const mockEventStats = {
  events_this_month: 4,
  total_attendees: 600,
  avg_rating: 4.7,
  countries: 12
}

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [eventStats, setEventStats] = useState(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcoming, past, stats] = await Promise.all([
          apiService.getUpcomingEvents(),
          apiService.getPastEvents(),
          apiService.getEventStats()
        ])
        setUpcomingEvents(upcoming)
        setPastEvents(past)
        setEventStats(stats)
      } catch (error) {
        console.error('Error fetching data:', error)
        setUpcomingEvents(mockUpcomingEvents)
        setPastEvents(mockPastEvents)
        setEventStats(mockEventStats)
      } finally {
        setLoading(false)
        setTimeout(() => setIsLoading(false), 1200)
      }
    }

    fetchData()
  }, [])

  const handleRegister = async (eventId) => {
    setRegistering(eventId)
    try {
      const result = await apiService.registerForEvent(eventId)
      if (result.success) {
        // Update the event registration count
        setUpcomingEvents(prev => 
          prev.map(event => 
            event.id === eventId 
              ? { ...event, registered: event.registered + 1 }
              : event
          )
        )
        alert('Successfully registered for the event!')
      } else {
        alert(result.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setRegistering(null)
    }
  }

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault()
    try {
      const result = await apiService.subscribeNewsletter(email)
      if (result.success) {
        setEmail('')
        alert('Successfully subscribed to newsletter!')
      } else {
        alert(result.message || 'Subscription failed')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      alert('Subscription failed. Please try again.')
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Cloud Security': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Career Development': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Networking': 'bg-green-500/20 text-green-400 border-green-500/30',
    }
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  const getTypeColor = (type) => {
    const colors = {
      'Webinar': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Panel': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Workshop': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    }
    return colors[type] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  // Animated LoadingScreen component (copied and adapted from Home.js)
  const LoadingScreen = ({ isLoading }) => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
      if (isLoading) {
        const timer = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(timer)
              return 100
            }
            return prev + Math.random() * 15
          })
        }, 100)
        return () => clearInterval(timer)
      }
    }, [isLoading])
    return (
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.div
              className="w-20 h-20 mx-auto relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <img src={Image1} alt="SecurityEagles Logo" className="w-full h-full object-contain" />
            </motion.div>
            <motion.h1
              className="text-3xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SecurityEagles
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Loading events...
            </motion.p>
          </motion.div>
          <motion.div
            className="w-80 mx-auto space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-full bg-slate-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-sm text-gray-400">
              {Math.round(progress)}% Complete
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Initializing event modules...
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>
      </motion.div>
    )
  }

  if (loading || isLoading) {
    return <LoadingScreen isLoading={isLoading} />
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learn & Network</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join our community events, webinars, and workshops. Connect with industry experts,
            learn cutting-edge technologies, and advance your career.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Upcoming Events */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5" />
                <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className={getTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-slate-400 mb-4">{event.description}</p>
                          
                          <div className="flex items-center gap-1 text-sm text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{event.speaker} • {event.speaker_title}</span>
                          </div>
                        </div>

                        <div className="lg:w-64 space-y-3">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-slate-400">Date:</div>
                              <div>{event.date}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Time:</div>
                              <div>{event.time}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Duration:</div>
                              <div>{event.duration}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Location:</div>
                              <div className="flex items-center gap-1">
                                {event.is_online ? (
                                  <>
                                    <Globe className="w-3 h-3" />
                                    <span>Online</span>
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="w-3 h-3" />
                                    <span>{event.location}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-sm">
                            <div className="text-slate-400">Registered:</div>
                            <div>{event.registered}/{event.capacity}</div>
                          </div>

                          <Button 
                            onClick={() => handleRegister(event.id)}
                            disabled={registering === event.id || event.registered >= event.capacity}
                            className="w-full bg-blue-700 hover:from-blue-700 hover:to-green-600 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-0 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {registering === event.id ? 'Registering...' : 'Register Now'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Stats */}
            {eventStats && (
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Event Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">This Month</span>
                    <span className="font-semibold">{eventStats.events_this_month} Events</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Attendees</span>
                    <span className="font-semibold">{eventStats.total_attendees.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Avg. Rating</span>
                    <span className="font-semibold">{eventStats.avg_rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Countries</span>
                    <span className="font-semibold">{eventStats.countries}+</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Past Events */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Past Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastEvents.map((event) => (
                  <div key={event.id} className="space-y-2">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>{event.date}</span>
                      <span>{event.attendees} attended</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{event.rating}</span>
                      <span className="text-xs text-slate-400 ml-2">Watch Recording</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400 mb-4">
                  Get notified about upcoming events, workshops, and exclusive content.
                </p>
                <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600"
                  />
                  <Button type="submit" className="w-full bg-blue-700 hover:from-blue-700 hover:to-green-600 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-0 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

