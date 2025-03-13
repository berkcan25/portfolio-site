import React from 'react';
import './index.css';
import "@fontsource/roboto-mono";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './AppContext';

import StartPageEN from './pages/en/StartPage';
import DashboardEN from './pages/en/Dashboard';
import ProjectsPageEN from './pages/en/ProjectsPage';
import ToolsPageEN from './pages/en/ToolsPage';

import StartPageTR from './pages/tr/StartPage';
import DashboardTR from './pages/tr/Dashboard';
import ProjectsPageTR from './pages/tr/ProjectsPage';
import ToolsPageTR from './pages/tr/ToolsPage';

import StartPageFR from './pages/fr/StartPage';
import DashboardFR from './pages/fr/Dashboard';
import ProjectsPageFR from './pages/fr/ProjectsPage';
import ToolsPageFR from './pages/fr/ToolsPage';

import StartPageAZ from './pages/az/StartPage';
import DashboardAZ from './pages/az/Dashboard';
import ProjectsPageAZ from './pages/az/ProjectsPage';
import ToolsPageAZ from './pages/az/ToolsPage';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace={true} />}/>
          {/* English Routes */}
          <Route path="/en" element={<StartPageEN />} />
          <Route path="/en/dashboard" element={<DashboardEN />} />
          <Route path="/en/projects" element={<ProjectsPageEN />} />
          <Route path="/en/tools" element={<ToolsPageEN />} />
          
          {/* Turkish Routes */}
          <Route path="/tr" element={<StartPageTR />} />
          <Route path="/tr/dashboard" element={<DashboardTR />} />
          <Route path="/tr/projects" element={<ProjectsPageTR />} />
          <Route path="/tr/tools" element={<ToolsPageTR />} />

          {/* French Routes */}
          <Route path="/fr" element={<StartPageFR />} />
          <Route path="/fr/dashboard" element={<DashboardFR />} />
          <Route path="/fr/projects" element={<ProjectsPageFR />} />
          <Route path="/fr/tools" element={<ToolsPageFR />} />

          {/* Azerbaijani Routes */}
          <Route path="/az" element={<StartPageAZ />} />
          <Route path="/az/dashboard" element={<DashboardAZ />} />
          <Route path="/az/projects" element={<ProjectsPageAZ />} />
          <Route path="/az/tools" element={<ToolsPageAZ />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
