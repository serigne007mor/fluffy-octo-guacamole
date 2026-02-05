import React from 'react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Meridian</h2>
          <p className="text-sm text-gray-600">AI-Powered Real Estate Communication Platform</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇦🇪 العربية</option>
            <option value="hi">🇮🇳 हिन्दी</option>
            <option value="ur">🇵🇰 اردو</option>
            <option value="ru">🇷🇺 Русский</option>
          </select>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-2xl">🔔</span>
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-2xl">⚙️</span>
          </button>
        </div>
      </div>
    </header>
  );
}
