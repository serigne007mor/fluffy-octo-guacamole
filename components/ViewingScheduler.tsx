import React, { useState } from 'react';

export default function ViewingScheduler() {
  const [selectedDate, setSelectedDate] = useState('2024-02-15');

  const scheduledViewings = [
    {
      id: 1,
      time: '10:00 AM',
      client: 'Ahmed Al Maktoum',
      property: 'Dubai Marina Tower, Unit 2305',
      agent: 'Sarah Ahmed',
      status: 'Confirmed',
      phone: '+971 50 123 4567'
    },
    {
      id: 2,
      time: '2:00 PM',
      client: 'Natasha Ivanova',
      property: 'Downtown Penthouse, Sky View',
      agent: 'Mohammed Ali',
      status: 'Confirmed',
      phone: '+971 55 234 5678'
    },
    {
      id: 3,
      time: '4:30 PM',
      client: 'Rajesh Kumar',
      property: 'JVC Apartment, Building 12',
      agent: 'Fatima Hassan',
      status: 'Pending',
      phone: '+971 52 456 7890'
    },
  ];

  const upcomingViewings = [
    { date: 'Today', count: 3, properties: 'Marina Tower, Sky View, JVC Apt' },
    { date: 'Tomorrow', count: 5, properties: 'Palm Villa, Business Bay, +3 more' },
    { date: 'This Week', count: 12, properties: 'Various locations' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Viewing Scheduler</h2>
            <p className="text-sm text-gray-600 mt-1">Manage property viewings and appointments</p>
          </div>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            + Schedule Viewing
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {upcomingViewings.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">{item.date}</p>
              <span className="text-2xl font-bold text-primary-600">{item.count}</span>
            </div>
            <p className="text-xs text-gray-600">{item.properties}</p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Calendar</h3>
          
          {/* Mini Calendar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-3">
              <button className="p-1 hover:bg-gray-100 rounded">←</button>
              <span className="font-medium text-gray-900">February 2024</span>
              <button className="p-1 hover:bg-gray-100 rounded">→</button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              <div className="text-gray-600 font-medium">Su</div>
              <div className="text-gray-600 font-medium">Mo</div>
              <div className="text-gray-600 font-medium">Tu</div>
              <div className="text-gray-600 font-medium">We</div>
              <div className="text-gray-600 font-medium">Th</div>
              <div className="text-gray-600 font-medium">Fr</div>
              <div className="text-gray-600 font-medium">Sa</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {[...Array(28)].map((_, i) => {
                const day = i + 1;
                const hasViewings = [5, 10, 15, 20, 25].includes(day);
                const isSelected = day === 15;
                return (
                  <button
                    key={i}
                    className={`p-2 rounded hover:bg-primary-50 ${
                      isSelected ? 'bg-primary-600 text-white' : 
                      hasViewings ? 'bg-green-100 text-green-800 font-medium' : 
                      'text-gray-700'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-green-100 rounded"></div>
              <span className="text-gray-600">Has viewings</span>
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="space-y-4">
            {scheduledViewings.map((viewing) => (
              <div key={viewing.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 rounded-lg px-3 py-2 text-center min-w-[70px]">
                      <p className="text-xs text-primary-600 font-medium">Time</p>
                      <p className="text-sm font-bold text-primary-900">{viewing.time}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{viewing.client}</h4>
                      <p className="text-sm text-gray-600 mt-1">{viewing.property}</p>
                      <p className="text-xs text-gray-500 mt-1">Agent: {viewing.agent}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    viewing.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {viewing.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex space-x-3 text-sm">
                    <button className="text-primary-600 hover:text-primary-800">📞 Call</button>
                    <button className="text-green-600 hover:text-green-800">💬 Message</button>
                    <button className="text-purple-600 hover:text-purple-800">📍 Location</button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-xs text-gray-600 hover:text-gray-800">Edit</button>
                    <button className="text-xs text-red-600 hover:text-red-800">Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📲 Automated Follow-ups</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Confirmation SMS</h4>
              <div className="w-10 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Sent 24 hours before viewing</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Reminder Call</h4>
              <div className="w-10 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">AI agent calls 2 hours before</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Feedback Request</h4>
              <div className="w-10 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">WhatsApp message after viewing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
