import React, { useState } from 'react';

export default function CommunicationHub() {
  const [activeTab, setActiveTab] = useState('calls');

  const callLogs = [
    { id: 1, name: 'Ahmed Al Maktoum', type: 'Inbound', duration: '5:23', status: 'Completed', time: '10:30 AM', outcome: 'Viewing Scheduled' },
    { id: 2, name: 'Fatima Hassan', type: 'Outbound', duration: '3:45', status: 'Completed', time: '11:15 AM', outcome: 'Follow-up Required' },
    { id: 3, name: 'John Smith', type: 'Inbound', duration: '2:10', status: 'Completed', time: '12:00 PM', outcome: 'Not Interested' },
    { id: 4, name: 'Maria Garcia', type: 'Outbound', duration: '8:55', status: 'Completed', time: '1:30 PM', outcome: 'Property Details Sent' },
    { id: 5, name: 'Unknown', type: 'Inbound', duration: '0:45', status: 'Missed', time: '2:15 PM', outcome: 'Callback Scheduled' },
  ];

  const whatsappChats = [
    { id: 1, name: 'Mohammed Ali', lastMessage: 'When can I schedule a viewing?', time: '2 mins ago', unread: 2, language: '🇦🇪' },
    { id: 2, name: 'Sarah Johnson', lastMessage: 'Thank you for the property details', time: '15 mins ago', unread: 0, language: '🇬🇧' },
    { id: 3, name: 'Rajesh Kumar', lastMessage: 'What is the price range?', time: '1 hour ago', unread: 1, language: '🇮🇳' },
    { id: 4, name: 'Natasha Ivanova', lastMessage: 'I\'m interested in Dubai Marina properties', time: '2 hours ago', unread: 3, language: '🇷🇺' },
  ];

  const smsMessages = [
    { id: 1, recipient: '+971 50 123 4567', message: 'Your viewing is confirmed for tomorrow at 3 PM', status: 'Delivered', time: '10 mins ago' },
    { id: 2, recipient: '+971 55 987 6543', message: 'Thank you for your interest. We will contact you soon.', status: 'Delivered', time: '30 mins ago' },
    { id: 3, recipient: '+971 52 456 7890', message: 'Property brochure link: https://meridian.ae/...', status: 'Sent', time: '1 hour ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Communication Hub</h2>
        <p className="text-sm text-gray-600 mt-1">View and manage all communications across channels</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="border-b border-gray-200">
          <div className="flex space-x-2 p-2">
            <button
              onClick={() => setActiveTab('calls')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'calls'
                  ? 'bg-primary-100 text-primary-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📞 Calls ({callLogs.length})
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'whatsapp'
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💬 WhatsApp ({whatsappChats.length})
            </button>
            <button
              onClick={() => setActiveTab('sms')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'sms'
                  ? 'bg-purple-100 text-purple-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📱 SMS ({smsMessages.length})
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Calls Tab */}
          {activeTab === 'calls' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Call Logs</h3>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Make Call
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Contact</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Duration</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Time</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Outcome</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {callLogs.map((call) => (
                      <tr key={call.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{call.name}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            call.type === 'Inbound' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {call.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">{call.duration}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{call.time}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{call.outcome}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            call.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {call.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-primary-600 hover:text-primary-800 text-sm">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* WhatsApp Tab */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">WhatsApp Conversations</h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  New Message
                </button>
              </div>
              <div className="space-y-3">
                {whatsappChats.map((chat) => (
                  <div key={chat.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
                        {chat.language}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{chat.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{chat.lastMessage}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">{chat.time}</p>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SMS Tab */}
          {activeTab === 'sms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">SMS Messages</h3>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Send SMS
                </button>
              </div>
              <div className="space-y-3">
                {smsMessages.map((sms) => (
                  <div key={sms.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{sms.recipient}</p>
                        <p className="text-xs text-gray-500 mt-1">{sms.time}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        sms.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sms.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{sms.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
