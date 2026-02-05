import React from 'react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/60 px-8 py-5 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Welcome to Meridian
          </h2>
          <p className="text-sm text-gray-600 mt-0.5 font-medium">
            AI-Powered Real Estate Communication Platform
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <select className="px-4 py-2.5 border-2 border-gray-200 rounded-xl bg-white text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all cursor-pointer">
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇦🇪 العربية</option>
            <option value="hi">🇮🇳 हिन्दी</option>
            <option value="ur">🇵🇰 اردو</option>
            <option value="ru">🇷🇺 Русский</option>
          </select>

          {/* Notifications */}
          <button className="relative p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse ring-2 ring-white"></span>
          </button>

          {/* Settings */}
          <button className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
