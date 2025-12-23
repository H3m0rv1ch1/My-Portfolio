import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IDE from './ide/IDE';
import WebsiteLayout from './website/WebsiteLayout';
import HomePage from './website/pages/HomePage';
import AboutPage from './website/pages/AboutPage';
import ProjectsPage from './website/pages/ProjectsPage';
import ServicesPage from './website/pages/ServicesPage';
import CertificatesPage from './website/pages/CertificatesPage';
import ContactPage from './website/pages/ContactPage';
import PrivacyPage from './website/pages/PrivacyPage';
import TermsPage from './website/pages/TermsPage';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IDE theme={theme} onToggleTheme={toggleTheme} />} />
          <Route path="/website" element={<WebsiteLayout theme={theme} onToggleTheme={toggleTheme} />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
