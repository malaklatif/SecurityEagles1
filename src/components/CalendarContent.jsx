import React, { useState } from 'react';
import { Calendar } from '../components/ui/calendar';
import { Clock, MapPin, Users, Video, Plus } from 'lucide-react';

const CalendarContent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'CEH Study Group',
      time: '10:00 AM - 12:00 PM',
      date: '2024-12-18',
      type: 'Study Group',
      location: 'Virtual',
      attendees: 12
    },
    {
      id: 2,
      title: 'Network Security Workshop',
      time: '2:00 PM - 4:00 PM',
      date: '2024-12-19',
      type: 'Workshop',
      location: 'Lab Room A',
      attendees: 8
    },
    {
      id: 3,
      title: 'CISSP Exam Prep',
      time: '6:00 PM - 8:00 PM',
      date: '2024-12-20',
      type: 'Exam Prep',
      location: 'Virtual',
      attendees: 15
    },
    {
      id: 4,
      title: 'SecurityEagles Monthly Meet',
      time: '7:00 PM - 9:00 PM',
      date: '2024-12-21',
      type: 'Community',
      location: 'Conference Room',
      attendees: 25
    }
  ]);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    time: '',
    type: '',
    location: '',
    attendees: 0,
  });

  const [confirmation, setConfirmation] = useState("");

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Study Group':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Exam Prep':
        return 'bg-orange-100 text-orange-800';
      case 'Community':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Format date to YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const eventDates = events.map(event => event.date);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          onClick={() => setShowAddEvent(true)}
        >
          <Plus className="w-4 h-4" />
          <span>Add Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
            <Calendar
              key={events.length}
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setShowAddEvent(true);
              }}
              className="rounded-md border-0"
              eventDates={eventDates}
              tileContent={({ date, view }) => {
                if (view === 'month') {
                  console.log('tileContent date:', date, 'formatted:', date.toISOString().slice(0, 10), 'eventDates:', eventDates);
                }
                return view === 'month' && eventDates.includes(date.toISOString().slice(0, 10)) ? (
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 block"></span>
                  </div>
                ) : null;
              }}
            />
          </div>
        </div>

        {/* Events */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Events for {selectedDate.toLocaleDateString()}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {events.filter(event => event.date === formatDate(selectedDate)).length === 0 && (
                <div className="px-6 py-4 text-gray-500">No events for this date.</div>
              )}
              {events
                .filter(event => event.date === formatDate(selectedDate))
                .map((event) => (
                  <div key={event.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            {event.location === 'Virtual' ? (
                              <Video className="w-4 h-4" />
                            ) : (
                              <MapPin className="w-4 h-4" />
                            )}
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Users className="w-5 h-5" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Event for {selectedDate.toLocaleDateString()}</h2>
            <input
              className="border p-2 w-full mb-2"
              placeholder="Title"
              value={newEvent.title}
              onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Time (e.g. 2:00 PM - 4:00 PM)"
              value={newEvent.time}
              onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Type (e.g. Workshop)"
              value={newEvent.type}
              onChange={e => setNewEvent({ ...newEvent, type: e.target.value })}
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Location"
              value={newEvent.location}
              onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
            />
            <input
              className="border p-2 w-full mb-2"
              type="number"
              placeholder="Attendees"
              value={newEvent.attendees}
              onChange={e => setNewEvent({ ...newEvent, attendees: Number(e.target.value) })}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setShowAddEvent(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => {
                  setEvents([
                    ...events,
                    {
                      ...newEvent,
                      id: events.length + 1,
                      date: formatDate(selectedDate),
                    },
                  ]);
                  setShowAddEvent(false);
                  setNewEvent({ title: '', time: '', type: '', location: '', attendees: 0 });
                  setConfirmation('Event added!');
                  setTimeout(() => setConfirmation(''), 2000);
                }}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmation && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50 transition-all">
          {confirmation}
        </div>
      )}
    </div>
  );
};

export default CalendarContent;