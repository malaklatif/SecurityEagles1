'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Globe, Import, Search, Filter, Eye, Heart } from 'lucide-react'
import { motion } from "framer-motion"
import Image from '../Image/ImageHawk.png'
import Image1 from '../Image/Logo1.png'
import { staticEvents } from '../mockEvents'

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [featuredEvents, setFeaturedEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [ongoingEvents, setOngoingEvents] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedEventType, setSelectedEventType] = useState('all')
  const [selectedPriority, setSelectedPriority] = useState('all')
  const [isPhysicalOnly, setIsPhysicalOnly] = useState(false)
  const [isOnlineOnly, setIsOnlineOnly] = useState(false)
  const [registering, setRegistering] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 3;
  const [totalEvents, setTotalEvents] = useState(0)

  // Check if user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem('access_token')
  }

  // Use staticEvents for all event lists
  useEffect(() => {
    setEvents(staticEvents);
    setFeaturedEvents(staticEvents.filter(e => e.priority === 'high'));
    setOngoingEvents([]); // Add logic if needed
    setPastEvents([]); // Add logic if needed
    setCategories([
      { slug: 'webinar', name: 'Webinar' },
      { slug: 'workshop', name: 'Workshop' },
      { slug: 'competition', name: 'Competition' },
    ]);
    setLoading(false);
    setTotalEvents(staticEvents.length);
    setCurrentPage(1);
  }, []);

  // Calculate paginated events
  const paginatedEvents = events.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage);
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage * eventsPerPage < events.length;

  // Handle event registration
  const handleRegister = async (eventSlug) => {
    if (!isLoggedIn()) {
      alert('Please log in to register for events')
      return
    }

    setRegistering(eventSlug)
    try {
      const result = await apiService.registerForEvent(eventSlug, {
        registration_data: {
          dietary_requirements: "None",
          company: "SecurityEagles"
        },
        notes: "Looking forward to the event!"
      })
      
      if (result) {
        // Update the event registration count
        setEvents(prev => 
          prev.map(event => 
            event.slug === eventSlug 
              ? { 
                  ...event, 
                  attendee_count: event.attendee_count + 1,
                  spots_remaining: event.spots_remaining - 1
                }
              : event
          )
        )
        alert('Successfully registered for the event!')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed. Please try again.')
    } finally {
      setRegistering(null)
    }
  }

  // Handle read more - navigate to event details
  const handleReadMore = (eventSlug) => {
    window.location.assign(`/event/${eventSlug}`);
  }

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    // fetchEvents(1, searchQuery, selectedCategory)
  }

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    // fetchEvents(1, searchQuery, category)
  }

  // Handle pagination
  const handlePageChange = (page) => {
    // fetchEvents(page, searchQuery, selectedCategory)
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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

  if (loading && events.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events & Webinars</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join our community events, webinars, and workshops. Connect with industry experts,
            learn cutting-edge technologies, and advance your career.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-green-500 hover:bg-green-600 text-white px-6"
            >
              Search
            </Button>
          </form>

          {/* Category Filters */}
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryFilter(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.slug
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events Section */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold">Featured Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featuredEvents || []).slice(0, 3).map((event) => (
                <Card key={event.id} className="bg-slate-800 border-slate-700 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getCategoryColor(event.category?.slug || 'default')}>
                        {event.category?.name || 'Uncategorized'}
                      </Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        Featured
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.start_time)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendee_count}/{event.max_attendees}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleReadMore(event.slug)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Ongoing Events Section */}
        {ongoingEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-semibold">Ongoing Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingEvents.map((event) => (
                <Card key={event.id} className="bg-slate-800 border-green-500/30 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Live Now
                      </Badge>
                      <Badge className={getCategoryColor(event.category?.slug || 'default')}>
                        {event.category?.name || 'Uncategorized'}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Ends {formatTime(event.end_time)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendee_count} attending</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => window.open(event.join_url, '_blank')}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Join Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Main Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Events List */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5" />
              <h2 className="text-2xl font-semibold">All Events</h2>
            </div>

            <div className="space-y-6">
              {paginatedEvents.map((event) => (
                <Card key={event.id} className="bg-slate-800 border-slate-700 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={getCategoryColor(event.category?.slug || 'default')}>
                            {event.category?.name || 'Uncategorized'}
                          </Badge>
                          <Badge className={getPriorityColor(event.priority)}>
                            {event.priority}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-slate-400 mb-4">{event.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(event.start_time)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{formatTime(event.start_time)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendee_count}/{event.max_attendees}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{event.views}</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-64 space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-slate-400">Duration:</div>
                            <div>{event.duration_hours}h</div>
                          </div>
                          <div>
                            <div className="text-slate-400">Location:</div>
                            <div className="flex items-center gap-1">
                              {event.is_physical ? (
                                <>
                                  <MapPin className="w-3 h-3" />
                                  <span>{event.location}</span>
                                </>
                              ) : (
                                <>
                                  <Globe className="w-3 h-3" />
                                  <span>Online</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm">
                          <div className="text-slate-400">Spots Remaining:</div>
                          <div>{event.spots_remaining}</div>
                        </div>

                        <Button 
                          onClick={() => handleReadMore(event.slug)}
                          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {(hasNextPage || hasPrevPage) && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={!hasPrevPage}
                  className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50"
                >
                  Previous
                </Button>
                <span className="text-gray-400">Page {currentPage}</span>
                <Button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={!hasNextPage}
                  className="bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            )}

            {events.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Stats */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Event Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Events</span>
                  <span className="font-semibold">{totalEvents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Featured</span>
                  <span className="font-semibold">{featuredEvents.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Categories</span>
                  <span className="font-semibold">{categories.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">This Month</span>
                  <span className="font-semibold">{events.filter(e => new Date(e.start_time).getMonth() === new Date().getMonth()).length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>Recent Past Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pastEvents.map((event) => (
                    <div key={event.id} className="space-y-2">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>{formatDate(event.start_time)}</span>
                        <span>{event.attendee_count} attended</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{event.rating || 'N/A'}</span>
                        {event.recording_url && (
                          <span className="text-xs text-slate-400 ml-2 cursor-pointer hover:text-blue-400">
                            Watch Recording
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400 mb-4">
                  Get notified about upcoming events, workshops, and exclusive content.
                </p>
                <form className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-slate-700 border-slate-600"
                  />
                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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

