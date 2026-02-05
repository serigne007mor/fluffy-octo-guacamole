import React from 'react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'ai-agent', label: 'AI Agent', icon: '🤖' },
    { id: 'communications', label: 'Communications', icon: '💬' },
    { id: 'leads', label: 'Lead Management', icon: '👥' },
    { id: 'pipeline', label: 'Sales Pipeline', icon: '📈' },
    { id: 'scheduler', label: 'Viewing Scheduler', icon: '📅' },
    { id: 'analytics', label: 'Analytics', icon: '📉' },
  ];

  return (
    <div className="w-72 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Logo */}
      <div className="relative p-8 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
            <span className="text-2xl">🏢</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Meridian
            </h1>
            <p className="text-xs text-blue-200 font-medium tracking-wide">by Azertica</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 p-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full group relative flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
              activeView === item.id
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                : 'text-blue-100 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div className={`text-2xl transition-transform duration-200 ${
              activeView === item.id ? 'scale-110' : 'group-hover:scale-110'
            }`}>
              {item.icon}
            </div>
            <span className="font-semibold text-sm">{item.label}</span>
            {activeView === item.id && (
              <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="relative p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">👤</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-slate-900"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Agency Admin</p>
            <p className="text-xs text-blue-200 truncate">admin@azertica.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
}
