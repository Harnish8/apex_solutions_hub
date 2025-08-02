import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TechnologyInnovationLab from './components/TechnologyInnovationLab';
import InfrastructureAssessment from './components/InfrastructureAssessment';
import SecurityCommandCenter from './components/SecurityCommandCenter';
import CloudMigrationPathway from './components/CloudMigrationPathway';
import DeveloperResources from './components/DeveloperResources';
import EmergencyResponseCenter from './components/EmergencyResponseCenter';
import CrossDomainIntegration from './components/CrossDomainIntegration';

const ITServicesDomainLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <TechnologyInnovationLab />
        <InfrastructureAssessment />
        <SecurityCommandCenter />
        <CloudMigrationPathway />
        <DeveloperResources />
        <EmergencyResponseCenter />
        <CrossDomainIntegration />
      </main>
    </div>
  );
};

export default ITServicesDomainLanding;