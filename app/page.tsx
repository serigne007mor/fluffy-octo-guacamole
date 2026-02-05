'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardOverview from '@/components/DashboardOverview';
import AIAgentStatus from '@/components/AIAgentStatus';
import CommunicationHub from '@/components/CommunicationHub';
import LeadManagement from '@/components/LeadManagement';
import SalesPipeline from '@/components/SalesPipeline';
import ViewingScheduler from '@/components/ViewingScheduler';
import Analytics from '@/components/Analytics';

export default function Home() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'ai-agent':
        return <AIAgentStatus />;
      case 'communications':
        return <CommunicationHub />;
      case 'leads':
        return <LeadManagement />;
      case 'pipeline':
        return <SalesPipeline />;
      case 'scheduler':
        return <ViewingScheduler />;
      case 'analytics':
        return <Analytics />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
