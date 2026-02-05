import React from 'react';

export default function Analytics() {
  const performanceMetrics = [
    { label: 'Total Calls', value: '1,247', change: '+18%', trend: 'up' },
    { label: 'Messages Sent', value: '3,456', change: '+24%', trend: 'up' },
    { label: 'Leads Generated', value: '342', change: '+15%', trend: 'up' },
    { label: 'Viewings Scheduled', value: '156', change: '+22%', trend: 'up' },
    { label: 'Deals Closed', value: '48', change: '+12%', trend: 'up' },
    { label: 'Conversion Rate', value: '32%', change: '+5%', trend: 'up' },
  ];

  const channelStats = [
    { channel: 'Phone Calls', inbound: 542, outbound: 389, conversion: '34%', color: 'bg-blue-500' },
    { channel: 'WhatsApp', inbound: 1234, outbound: 876, conversion: '28%', color: 'bg-green-500' },
    { channel: 'SMS', inbound: 234, outbound: 567, conversion: '25%', color: 'bg-purple-500' },
  ];

  const teamPerformance = [
    { name: 'Sarah Ahmed', calls: 156, messages: 423, viewings: 34, deals: 12, conversion: '35%' },
    { name: 'Mohammed Ali', calls: 142, messages: 398, viewings: 28, deals: 10, conversion: '32%' },
    { name: 'Fatima Hassan', calls: 134, messages: 367, viewings: 25, deals: 8, conversion: '29%' },
    { name: 'Ahmed Khalil', calls: 128, messages: 345, viewings: 22, deals: 7, conversion: '28%' },
  ];

  const languageBreakdown = [
    { language: 'English', percentage: 45, count: 562 },
    { language: 'Arabic', percentage: 30, count: 375 },
    { language: 'Hindi', percentage: 15, count: 188 },
    { language: 'Russian', percentage: 7, count: 88 },
    { language: 'Urdu', percentage: 3, count: 37 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-sm text-gray-600 mt-1">Track performance and key metrics</p>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
              <div className="text-3xl">
                {index === 0 && '📞'}
                {index === 1 && '💬'}
                {index === 2 && '👥'}
                {index === 3 && '📅'}
                {index === 4 && '🎉'}
                {index === 5 && '📊'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Performance */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Channel Performance</h3>
          <div className="space-y-4">
            {channelStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{stat.channel}</span>
                  <span className="text-sm text-gray-600">Conv: {stat.conversion}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 rounded p-2">
                    <span className="text-gray-600">Inbound: </span>
                    <span className="font-medium text-blue-900">{stat.inbound}</span>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <span className="text-gray-600">Outbound: </span>
                    <span className="font-medium text-green-900">{stat.outbound}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${stat.color} h-2 rounded-full`} style={{ width: stat.conversion }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🌍 Language Distribution</h3>
          <div className="space-y-3">
            {languageBreakdown.map((lang, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{lang.language}</span>
                  <span className="text-sm font-medium text-gray-900">{lang.percentage}% ({lang.count})</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              💡 AI Agent automatically detects and responds in the client's preferred language
            </p>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Team Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Agent Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Calls</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Messages</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Viewings</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Deals Closed</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Conversion</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {teamPerformance.map((member, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{member.calls}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{member.messages}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{member.viewings}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{member.deals}</td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-medium text-green-600">{member.conversion}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < 4 - index ? 'text-yellow-400' : 'text-gray-300'}>⭐</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Activity Timeline (Last 7 Days)</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-xs text-gray-600 mb-2">{day}</p>
              <div className="space-y-1">
                <div className="bg-blue-100 rounded p-2">
                  <p className="text-xs font-medium text-blue-900">{45 + index * 5}</p>
                  <p className="text-[10px] text-blue-600">Calls</p>
                </div>
                <div className="bg-green-100 rounded p-2">
                  <p className="text-xs font-medium text-green-900">{120 + index * 10}</p>
                  <p className="text-[10px] text-green-600">Messages</p>
                </div>
                <div className="bg-purple-100 rounded p-2">
                  <p className="text-xs font-medium text-purple-900">{15 + index * 2}</p>
                  <p className="text-[10px] text-purple-600">Viewings</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">📄 Export Reports</h3>
            <p className="text-sm text-primary-100">Download comprehensive analytics and performance reports</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white text-primary-700 rounded-lg hover:bg-primary-50 font-medium">
              Export PDF
            </button>
            <button className="px-4 py-2 bg-white text-primary-700 rounded-lg hover:bg-primary-50 font-medium">
              Export Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
