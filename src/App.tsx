import React, { useState } from 'react';
import { Sidebar, ViewType } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NetworkMap } from './components/NetworkMap';
import { FleetManagement } from './components/FleetManagement';
import { InterventionForm } from './components/InterventionForm';
import { Inventory } from './components/Inventory';
import { DocumentManagement } from './components/DocumentManagement';
import { HRPayroll } from './components/HRPayroll';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'map':
        return <NetworkMap />;
      case 'fleet':
        return <FleetManagement />;
      case 'intervention':
        return <InterventionForm />;
      case 'inventory':
        return <Inventory />;
      case 'documents':
        return <DocumentManagement />;
      case 'hr':
        return <HRPayroll />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'map': return 'Network Map';
      case 'fleet': return 'Fleet Management';
      case 'intervention': return 'Interventions';
      case 'inventory': return 'Inventory';
      case 'documents': return 'Document Management';
      case 'hr': return 'RH & Paies';
      default: return 'MotoZone';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={getTitle()} />
        <main className="flex-1 overflow-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
