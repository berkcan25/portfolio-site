import React from 'react';
import './index.css';
import "@fontsource/roboto-mono";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './AppContext';

import StartPageEN from './pages/en/StartPage';
import DashboardEN from './pages/en/Dashboard';
import ProjectsPageEN from './pages/en/ProjectsPage';
import ToolsPageEN from './pages/en/ToolsPage';

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
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
