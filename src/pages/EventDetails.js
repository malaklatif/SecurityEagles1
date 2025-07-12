import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star, ArrowLeft, Globe, Mail, Phone, User, Building, FileText, Share2, Heart, Eye, Tag, Import } from 'lucide-react'
import { motion } from "framer-motion"
import { staticEvents } from '../mockEvents'

export default function EventDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registrationData, setRegistrationData] = useState({
    dietary_requirements: '',
    company: '',
    notes: ''
  })

  // Check if user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem('access_token')
  }

  // Fetch event details from staticEvents
  useEffect(() => {
    setLoading(true);
    const found = staticEvents.find(e => e.slug === slug);
    setEvent(found || null);
    setLoading(false);
  }, [slug]);

  // Handle registration
  const handleRegister = async () => {
    if (!isLoggedIn()) {
      alert('Please log in to register for this event')
      return
    }

    setRegistering(true)
    try {
      setIsRegistered(true);
      setEvent(prev => ({
        ...prev,
        attendee_count: prev.attendee_count + 1,
        spots_remaining: prev.spots_remaining - 1
      }));
      alert('Successfully registered for the event!');
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setRegistering(false)
    }
  }

  // Handle unregistration
  const handleUnregister = async () => {
    setRegistering(true)
    try {
      setIsRegistered(false);
      setEvent(prev => ({
        ...prev,
        attendee_count: prev.attendee_count - 1,
        spots_remaining: prev.spots_remaining + 1
      }));
      alert('Successfully unregistered from the event.');
    } catch (error) {
      console.error('Unregistration error:', error)
      alert('Unregistration failed. Please try again.')
    } finally {
      setRegistering(false)
    }
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Format time
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'conference': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'workshop': 'bg-green-500/20 text-green-400 border-green-500/30',
      'webinar': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'panel': 'bg-red-500/20 text-red-400 border-red-500/30',
      'training': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    }
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  // Get priority color
  const getPriorityColor = (priority) => {
    const colors = {
      'low': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'normal': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'high': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'urgent': 'bg-red-500/20 text-red-400 border-red-500/30',
    }
    return colors[priority] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-slate-400 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/events')} className="bg-green-500 hover:bg-green-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/events')} 
          className="mb-6 bg-slate-700 hover:bg-slate-600 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Button>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={getCategoryColor(event.category?.slug || 'default')}>
              {event.category?.name || 'Uncategorized'}
            </Badge>
            <Badge className={getPriorityColor(event.priority)}>
              {event.priority}
            </Badge>
            {event.is_featured && (
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-slate-400 mb-6">{event.description}</p>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(event.start_time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{event.attendee_count}/{event.max_attendees} registered</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{event.views} views</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About This Event</h3>
                  <p className="text-slate-300 leading-relaxed">{event.description}</p>
                </div>

                {event.agenda && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Agenda</h3>
                    <div className="space-y-3">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex gap-4 p-3 bg-slate-700 rounded-lg">
                          <div className="text-sm text-slate-400 min-w-[80px]">
                            {item.time}
                          </div>
                          <div>
                            <div className="font-medium">{item.title}</div>
                            {item.description && (
                              <div className="text-sm text-slate-400">{item.description}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.learning_objectives && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                      {event.learning_objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.prerequisites && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                      {event.prerequisites.map((prerequisite, index) => (
                        <li key={index}>{prerequisite}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Speakers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-slate-700 rounded-lg">
                        <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
                          <User className="w-8 h-8 text-slate-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{speaker.name}</h4>
                          <p className="text-sm text-slate-400 mb-2">{speaker.title}</p>
                          <p className="text-sm text-slate-300">{speaker.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} className="bg-slate-700 text-slate-300 border-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Event Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    {event.spots_remaining} spots left
                  </div>
                  <div className="text-sm text-slate-400">
                    {event.attendee_count} of {event.max_attendees} registered
                  </div>
                </div>

                {!isRegistered ? (
                  <div className="space-y-4">
                    <Input
                      placeholder="Dietary Requirements"
                      value={registrationData.dietary_requirements}
                      onChange={(e) => setRegistrationData(prev => ({
                        ...prev,
                        dietary_requirements: e.target.value
                      }))}
                      className="bg-slate-700 border-slate-600"
                    />
                    <Input
                      placeholder="Company/Organization"
                      value={registrationData.company}
                      onChange={(e) => setRegistrationData(prev => ({
                        ...prev,
                        company: e.target.value
                      }))}
                      className="bg-slate-700 border-slate-600"
                    />
                    <textarea
                      placeholder="Additional Notes"
                      value={registrationData.notes}
                      onChange={(e) => setRegistrationData(prev => ({
                        ...prev,
                        notes: e.target.value
                      }))}
                      className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 resize-none"
                      rows={3}
                    />
                    
                    <Button 
                      onClick={handleRegister}
                      disabled={registering || !event.registration_open || event.spots_remaining === 0}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
                    >
                      {registering ? 'Registering...' : 
                       !event.registration_open ? 'Registration Closed' :
                       event.spots_remaining === 0 ? 'Fully Booked' : 'Register Now'}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-green-400 font-semibold mb-4">✓ You're registered!</div>
                    <Button 
                      onClick={handleUnregister}
                      disabled={registering}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
                    >
                      {registering ? 'Unregistering...' : 'Unregister'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Event Info */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <div>
                    <div className="font-medium">{formatDate(event.start_time)}</div>
                    <div className="text-sm text-slate-400">{formatTime(event.start_time)} - {formatTime(event.end_time)}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-slate-400">{event.duration_hours} hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {event.is_physical ? (
                    <MapPin className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Globe className="w-5 h-5 text-slate-400" />
                  )}
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-slate-400">
                      {event.is_physical ? event.location : 'Online Event'}
                    </div>
                  </div>
                </div>

                {event.organizer && (
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="font-medium">Organizer</div>
                      <div className="text-sm text-slate-400">{event.organizer}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            {event.contact_email && (
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-400" />
                    <a href={`mailto:${event.contact_email}`} className="text-blue-400 hover:text-blue-300">
                      {event.contact_email}
                    </a>
                  </div>
                  {event.contact_phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <a href={`tel:${event.contact_phone}`} className="text-blue-400 hover:text-blue-300">
                        {event.contact_phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Share Event */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => navigator.share({ title: event.title, url: window.location.href })}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Share
                  </Button>
                  <Button 
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="bg-slate-700 hover:bg-slate-600"
                  >
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 