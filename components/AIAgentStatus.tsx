import React, { useState } from 'react';

export default function AIAgentStatus() {
  const [isActive, setIsActive] = useState(true);

  const agentStats = [
    { label: 'Calls Handled', value: '342', period: 'Today' },
    { label: 'Messages Sent', value: '1,248', period: 'This Week' },
    { label: 'Leads Qualified', value: '89', period: 'This Week' },
    { label: 'Avg Response Time', value: '2.3s', period: 'Real-time' },
  ];

  const activeConversations = [
    { name: 'Mohammed Ali', channel: 'WhatsApp', language: '🇦🇪 Arabic', status: 'Qualifying', duration: '3m' },
    { name: 'Sarah Johnson', channel: 'Phone', language: '🇬🇧 English', status: 'Scheduling', duration: '1m' },
    { name: 'Rajesh Kumar', channel: 'SMS', language: '🇮🇳 Hindi', status: 'Follow-up', duration: '5m' },
    { name: 'Natasha Ivanova', channel: 'WhatsApp', language: '🇷🇺 Russian', status: 'Information', duration: '2m' },
  ];

  const agentCapabilities = [
    { name: 'Inbound Calls', enabled: true, count: '156 today' },
    { name: 'Outbound Calls', enabled: true, count: '89 today' },
    { name: 'WhatsApp Messages', enabled: true, count: '423 today' },
    { name: 'SMS Messages', enabled: true, count: '267 today' },
    { name: 'Lead Qualification', enabled: true, count: 'Active' },
    { name: 'Viewing Scheduling', enabled: true, count: 'Active' },
    { name: 'Follow-up Automation', enabled: true, count: 'Active' },
    { name: 'Multi-language Support', enabled: true, count: '5 languages' },
  ];

  return (
    <div className="space-y-6">
      {/* Agent Control Panel */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Agent Control Center</h2>
            <p className="text-sm text-gray-600 mt-1">Monitor and control your AI assistant</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isActive ? '● Active' : '● Inactive'}
            </span>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isActive ? 'Pause Agent' : 'Activate Agent'}
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {agentStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Conversations */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-xl mr-2">💬</span>
            Active Conversations ({activeConversations.length})
          </h3>
          <div className="space-y-3">
            {activeConversations.map((conv, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{conv.name}</h4>
                    <p className="text-xs text-gray-500">{conv.language} • {conv.channel}</p>
                  </div>
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                    {conv.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{conv.status}</span>
                  <button className="text-xs text-primary-600 hover:text-primary-800">View →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Capabilities */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-xl mr-2">⚙️</span>
            Agent Capabilities
          </h3>
          <div className="space-y-3">
            {agentCapabilities.map((capability, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    capability.enabled ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {capability.enabled ? '✓' : '−'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{capability.name}</p>
                    <p className="text-xs text-gray-500">{capability.count}</p>
                  </div>
                </div>
                <button className="text-xs text-gray-600 hover:text-gray-800">Configure</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Configuration */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Response Style</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Professional</option>
              <option>Friendly</option>
              <option>Formal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Qualification Criteria</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Standard</option>
              <option>Strict</option>
              <option>Relaxed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto-follow-up</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>After 24 hours</option>
              <option>After 48 hours</option>
              <option>After 72 hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
