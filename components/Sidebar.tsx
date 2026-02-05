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
    <div className="w-64 bg-gradient-to-b from-primary-900 to-primary-800 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary-700">
        <h1 className="text-2xl font-bold">Meridian</h1>
        <p className="text-sm text-primary-200">by Azertica</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeView === item.id
                ? 'bg-primary-700 text-white'
                : 'text-primary-100 hover:bg-primary-700/50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
          <div>
            <p className="text-sm font-medium">Agency Admin</p>
            <p className="text-xs text-primary-300">admin@azertica.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
}
