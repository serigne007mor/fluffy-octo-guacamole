import React from 'react';

export default function DashboardOverview() {
  const stats = [
    { label: 'Active Leads', value: '156', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { label: 'Today\'s Calls', value: '48', change: '+8%', icon: '📞', color: 'bg-green-500' },
    { label: 'Scheduled Viewings', value: '23', change: '+15%', icon: '📅', color: 'bg-purple-500' },
    { label: 'Conversion Rate', value: '32%', change: '+5%', icon: '📊', color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { time: '2 mins ago', text: 'AI Agent qualified new lead: Ahmed Al Maktoum', type: 'lead' },
    { time: '15 mins ago', text: 'Property viewing scheduled for Dubai Marina Tower', type: 'viewing' },
    { time: '32 mins ago', text: 'Outbound call completed: Follow-up with Fatima Hassan', type: 'call' },
    { time: '1 hour ago', text: 'WhatsApp conversation: Property inquiry - Palm Jumeirah', type: 'whatsapp' },
    { time: '2 hours ago', text: 'Lead moved to "Offer" stage in pipeline', type: 'pipeline' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-2">{stat.change} from yesterday</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  {activity.type === 'lead' && '👤'}
                  {activity.type === 'viewing' && '🏢'}
                  {activity.type === 'call' && '📞'}
                  {activity.type === 'whatsapp' && '💬'}
                  {activity.type === 'pipeline' && '📈'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-primary-900">Schedule New Viewing</span>
              <span className="text-lg">📅</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-green-900">Make Outbound Call</span>
              <span className="text-lg">📞</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-purple-900">Send Bulk WhatsApp</span>
              <span className="text-lg">💬</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-orange-900">View All Leads</span>
              <span className="text-lg">👥</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Agent Status Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
              🤖
            </div>
            <div>
              <h3 className="text-xl font-bold">AI Agent is Active</h3>
              <p className="text-primary-100 mt-1">Handling calls and messages across all channels</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Online</span>
            </div>
            <p className="text-xs text-primary-200">5 active conversations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
