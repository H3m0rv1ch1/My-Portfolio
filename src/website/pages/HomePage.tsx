import React from 'react';
import Hero from '../Hero';
import AboutSection from '../AboutSection';
import ProjectsSection from '../ProjectsSection';
import ServicesSection from '../ServicesSection';
import CertificatesSection from '../CertificatesSection';
import ContactSection from '../ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="relative space-y-24 pb-24">
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <CertificatesSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
