import React from 'react';

export default function DashboardOverview() {
  const stats = [
    { label: 'Active Leads', value: '156', change: '+12%', icon: '👥', gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-50 to-cyan-50' },
    { label: 'Today\'s Calls', value: '48', change: '+8%', icon: '📞', gradient: 'from-emerald-500 to-green-500', bgGradient: 'from-emerald-50 to-green-50' },
    { label: 'Scheduled Viewings', value: '23', change: '+15%', icon: '📅', gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-50 to-pink-50' },
    { label: 'Conversion Rate', value: '32%', change: '+5%', icon: '📊', gradient: 'from-orange-500 to-amber-500', bgGradient: 'from-orange-50 to-amber-50' },
  ];

  const recentActivity = [
    { time: '2 mins ago', text: 'AI Agent qualified new lead: Ahmed Al Maktoum', type: 'lead', color: 'bg-blue-500' },
    { time: '15 mins ago', text: 'Property viewing scheduled for Dubai Marina Tower', type: 'viewing', color: 'bg-purple-500' },
    { time: '32 mins ago', text: 'Outbound call completed: Follow-up with Fatima Hassan', type: 'call', color: 'bg-green-500' },
    { time: '1 hour ago', text: 'WhatsApp conversation: Property inquiry - Palm Jumeirah', type: 'whatsapp', color: 'bg-emerald-500' },
    { time: '2 hours ago', text: 'Lead moved to "Offer" stage in pipeline', type: 'pipeline', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
            
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2 group-hover:scale-105 transition-transform">{stat.value}</p>
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-green-700 bg-green-100">
                  ↑ {stat.change}
                </span>
                <span className="text-xs text-gray-600 font-medium">from yesterday</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Recent Activity
            </h3>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className={`flex-shrink-0 w-10 h-10 ${activity.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {activity.type === 'lead' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {activity.type === 'viewing' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {activity.type === 'call' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {activity.type === 'whatsapp' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {activity.type === 'pipeline' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 leading-snug">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6 space-y-3">
            <button className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-200">
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Schedule New Viewing</span>
              </span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-200">
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Make Outbound Call</span>
              </span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200">
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Send Bulk WhatsApp</span>
              </span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full group flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-200">
              <span className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>View All Leads</span>
              </span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* AI Agent Status Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-strong overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl animate-pulse-slow">
                🤖
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">AI Agent is Active</h3>
                <p className="text-blue-100 font-medium">Handling calls and messages across all channels</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end space-x-3 mb-2">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
                <span className="text-lg font-bold text-white">Online</span>
              </div>
              <p className="text-sm text-blue-200 font-semibold">5 active conversations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
