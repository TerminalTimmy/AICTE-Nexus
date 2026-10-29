import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import NexusWorkspace from './views/NexusWorkspace';
import InstitutionLedger from './views/InstitutionLedger';
import MasterLedger from './views/MasterLedger';

export default function App() {
  const [role, setRole] = useState('RB'); // 'RB' or 'PGRC'
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const overlapDetected = true;

  const navigateTo = (view, data) => {
    setActiveView(view);
    if (data) setSelectedInstitution(data);
    setShowNotifications(false);
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <Dashboard
            role={role}
            overlapDetected={overlapDetected}
            onLaunchNexus={() => navigateTo('nexus')}
            onInstitutionClick={(inst) => navigateTo('ledger', inst)}
          />
        );
      case 'nexus':
        return (
          <NexusWorkspace
            role={role}
            onClose={() => navigateTo('dashboard')}
            onInstitutionClick={(inst) => navigateTo('ledger', inst)}
          />
        );
      case 'ledger':
        return (
          <InstitutionLedger
            institution={selectedInstitution}
            onBack={() => navigateTo('dashboard')}
          />
        );
      case 'master-ledger':
        return (
          <MasterLedger
            onInstitutionClick={(inst) => navigateTo('ledger', inst)}
          />
        );
      default:
        return (
          <Dashboard
            role={role}
            overlapDetected={overlapDetected}
            onLaunchNexus={() => navigateTo('nexus')}
            onInstitutionClick={(inst) => navigateTo('ledger', inst)}
          />
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar
        activeView={activeView}
        onNavigate={navigateTo}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          role={role}
          onRoleChange={setRole}
          showNotifications={showNotifications}
          onToggleNotifications={() => setShowNotifications(!showNotifications)}
        />
        <main className="flex-1 overflow-y-auto scrollbar-thin p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
