import React, { useState } from 'react';

export default function LeadManagement() {
  const [filterStatus, setFilterStatus] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Ahmed Al Maktoum',
      email: 'ahmed.maktoum@email.ae',
      phone: '+971 50 123 4567',
      status: 'Hot',
      source: 'WhatsApp',
      budget: 'AED 2-3M',
      preference: 'Dubai Marina, 2-3 BR',
      lastContact: '2 hours ago',
      score: 95,
      language: '🇦🇪 Arabic'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+971 55 987 6543',
      status: 'Warm',
      source: 'Phone',
      budget: 'AED 1.5-2M',
      preference: 'Palm Jumeirah, 2 BR',
      lastContact: '1 day ago',
      score: 78,
      language: '🇬🇧 English'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      email: 'rajesh.k@email.in',
      phone: '+971 52 456 7890',
      status: 'Cold',
      source: 'SMS',
      budget: 'AED 800K-1M',
      preference: 'Jumeirah Village, 1 BR',
      lastContact: '3 days ago',
      score: 52,
      language: '🇮🇳 Hindi'
    },
    {
      id: 4,
      name: 'Natasha Ivanova',
      email: 'natasha.i@email.ru',
      phone: '+971 50 234 5678',
      status: 'Hot',
      source: 'WhatsApp',
      budget: 'AED 3-5M',
      preference: 'Downtown Dubai, 3 BR',
      lastContact: '30 mins ago',
      score: 92,
      language: '🇷🇺 Russian'
    },
    {
      id: 5,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+971 55 345 6789',
      status: 'Warm',
      source: 'Phone',
      budget: 'AED 1-1.5M',
      preference: 'Business Bay, Studio',
      lastContact: '2 days ago',
      score: 65,
      language: '🇬🇧 English'
    },
  ];

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status.toLowerCase() === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Warm': return 'bg-yellow-100 text-yellow-800';
      case 'Cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
            <p className="text-sm text-gray-600 mt-1">Track and manage your property leads</p>
          </div>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            + Add Lead
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filterStatus === 'all' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All ({leads.length})
          </button>
          <button
            onClick={() => setFilterStatus('hot')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filterStatus === 'hot' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700'
            }`}
          >
            🔥 Hot ({leads.filter(l => l.status === 'Hot').length})
          </button>
          <button
            onClick={() => setFilterStatus('warm')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filterStatus === 'warm' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700'
            }`}
          >
            ☀️ Warm ({leads.filter(l => l.status === 'Warm').length})
          </button>
          <button
            onClick={() => setFilterStatus('cold')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filterStatus === 'cold' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
            }`}
          >
            ❄️ Cold ({leads.filter(l => l.status === 'Cold').length})
          </button>
        </div>
      </div>

      {/* Lead Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{lead.language}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                  <span className={`text-lg font-bold ${getScoreColor(lead.score)}`}>
                    {lead.score}
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">{lead.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-900 font-medium">{lead.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Budget</p>
                  <p className="text-gray-900 font-medium">{lead.budget}</p>
                </div>
                <div>
                  <p className="text-gray-600">Source</p>
                  <p className="text-gray-900 font-medium">{lead.source}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Preference</p>
                <p className="text-sm text-gray-900 font-medium">{lead.preference}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">Last contact: {lead.lastContact}</p>
                <div className="flex space-x-2">
                  <button className="text-xs text-primary-600 hover:text-primary-800 font-medium">📞 Call</button>
                  <button className="text-xs text-green-600 hover:text-green-800 font-medium">💬 Message</button>
                  <button className="text-xs text-purple-600 hover:text-purple-800 font-medium">📅 Schedule</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <p className="text-sm text-gray-600">Total Leads</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{leads.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <p className="text-sm text-gray-600">Avg. Score</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {Math.round(leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <p className="text-sm text-gray-600">This Week</p>
          <p className="text-2xl font-bold text-green-600 mt-1">+{Math.floor(leads.length * 0.4)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <p className="text-sm text-gray-600">Conversion Rate</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">32%</p>
        </div>
      </div>
    </div>
  );
}
