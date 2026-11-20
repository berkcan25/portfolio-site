import React, { useLayoutEffect } from 'react';
import './index.css';
import "@fontsource/roboto-mono";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './AppContext';

import StartPage from './pages/StartPage';
import Dashboard from './pages/Dashboard';
import ProjectsPage from './pages/ProjectsPage';
import ToolsPage from './pages/ToolsPage';
// import BlogPage from './pages/BlogPage';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
