import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import InteractiveDemo from './components/InteractiveDemo';
import CrossServiceIntegration from './components/CrossServiceIntegration';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const BusinessConsultingDomainLanding = () => {
  return (
    <>
      <Helmet>
        <title>Business Consulting Excellence | Strategic Transformation | Apex Solutions</title>
        <meta 
          name="description" 
          content="Transform your business strategy with our comprehensive consulting services. Strategic planning simulators, operational excellence assessments, and growth strategy tools that deliver measurable results." 
        />
        <meta name="keywords" content="business consulting, strategic planning, operational excellence, change management, growth strategy, business transformation" />
        <meta property="og:title" content="Business Consulting Excellence | Apex Solutions" />
        <meta property="og:description" content="Strategic consulting services that drive measurable growth and operational excellence through data-driven insights and expert guidance." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/business-consulting-domain-landing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesGrid />
          <InteractiveDemo />
          <CrossServiceIntegration />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default BusinessConsultingDomainLanding;