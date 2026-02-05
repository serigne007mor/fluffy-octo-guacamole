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

  const getStatusGradient = (status: string) => {
    switch (status) {
      case 'Hot': return 'from-red-500 to-orange-600';
      case 'Warm': return 'from-yellow-500 to-amber-600';
      case 'Cold': return 'from-blue-500 to-cyan-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Filters */}
      <div className="bg-white rounded-2xl shadow-soft p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">Lead Management</h2>
            <p className="text-sm text-gray-600 mt-2 font-medium">Track and manage your property leads</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Lead</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              filterStatus === 'all' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({leads.length})
          </button>
          <button
            onClick={() => setFilterStatus('hot')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-1.5 ${
              filterStatus === 'hot' 
                ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg shadow-red-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>🔥</span>
            <span>Hot ({leads.filter(l => l.status === 'Hot').length})</span>
          </button>
          <button
            onClick={() => setFilterStatus('warm')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-1.5 ${
              filterStatus === 'warm' 
                ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg shadow-yellow-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>☀️</span>
            <span>Warm ({leads.filter(l => l.status === 'Warm').length})</span>
          </button>
          <button
            onClick={() => setFilterStatus('cold')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-1.5 ${
              filterStatus === 'cold' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>❄️</span>
            <span>Cold ({leads.filter(l => l.status === 'Cold').length})</span>
          </button>
        </div>
      </div>

      {/* Lead Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeads.map((lead, index) => (
          <div 
            key={lead.id} 
            className="group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${getStatusGradient(lead.status)} p-6`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{lead.name}</h3>
                  <p className="text-sm text-white/90 mt-1 font-medium">{lead.language}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    {lead.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-2xl font-bold text-white">{lead.score}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="text-sm text-gray-900 font-medium truncate">{lead.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="text-sm text-gray-900 font-medium">{lead.phone}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Budget</p>
                  <p className="text-sm text-gray-900 font-bold">{lead.budget}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Source</p>
                  <p className="text-sm text-gray-900 font-medium">{lead.source}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Preference</p>
                <p className="text-sm text-gray-900 font-medium">{lead.preference}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Last contact: {lead.lastContact}</p>
                <div className="flex space-x-2">
                  <button className="p-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                    <svg className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                    <svg className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                    <svg className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-soft p-6">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Total Leads</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">{leads.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-soft p-6">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Avg. Score</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">
            {Math.round(leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length)}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-soft p-6">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">This Week</p>
          <p className="text-4xl font-bold text-green-600 mt-2">+{Math.floor(leads.length * 0.4)}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-soft p-6">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Conversion Rate</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">32%</p>
        </div>
      </div>
    </div>
  );
}
