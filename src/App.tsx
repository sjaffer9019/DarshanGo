import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { HomeDashboard } from './components/HomeDashboard';
import { AgencyMapping } from './components/AgencyMapping';
import { ProjectManagement } from './components/ProjectManagement';
import { ProjectDetails } from './components/ProjectDetails';
import { FundFlow } from './components/FundFlow';
import { MonitoringInspections } from './components/MonitoringInspections';
import { InspectionDetails } from './components/InspectionDetails';
import { DocumentRepository } from './components/DocumentRepository';
import { AlertsEscalations } from './components/AlertsEscalations';
import { Reports } from './components/Reports';
import { Admin } from './components/Admin';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />
          
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/agency-mapping" element={<AgencyMapping />} />
              <Route path="/projects" element={<ProjectManagement />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/adarsh-gram" element={<ProjectManagement component="Adarsh Gram" />} />
              <Route path="/gia" element={<ProjectManagement component="GIA" />} />
              <Route path="/hostel" element={<ProjectManagement component="Hostel" />} />
              <Route path="/fund-flow" element={<FundFlow />} />
              <Route path="/monitoring" element={<MonitoringInspections />} />
              <Route path="/monitoring/:id" element={<InspectionDetails />} />
              <Route path="/documents" element={<DocumentRepository />} />
              <Route path="/alerts" element={<AlertsEscalations />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
