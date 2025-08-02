import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceDiscoveryPortal from './components/ServiceDiscoveryPortal';
import SuccessStoriesCarousel from './components/SuccessStoriesCarousel';
import UnifiedBrandStory from './components/UnifiedBrandStory';
import PerformanceDashboard from './components/PerformanceDashboard';
import LeadershipEcosystem from './components/LeadershipEcosystem';
import ResourceIntegrationHub from './components/ResourceIntegrationHub';

const CentralHubHomepage = () => {
  return (
    <>
      <Helmet>
        <title>Apex Solutions Hub - Where Expertise Converges for Extraordinary Results</title>
        <meta 
          name="description" 
          content="Transform your business with integrated IT services, strategic marketing, and comprehensive business consulting. Experience the power of convergent expertise." 
        />
        <meta name="keywords" content="integrated solutions, IT services, marketing, business consulting, digital transformation, apex solutions" />
        <meta property="og:title" content="Apex Solutions Hub - Integrated Professional Services" />
        <meta property="og:description" content="Where IT, Marketing, and Business Consulting converge for extraordinary results" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/central-hub-homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServiceDiscoveryPortal />
          <SuccessStoriesCarousel />
          <UnifiedBrandStory />
          <PerformanceDashboard />
          <LeadershipEcosystem />
          <ResourceIntegrationHub />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-headline font-bold text-xl">Apex Solutions</div>
                    <div className="text-sm opacity-80">Hub</div>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  Where expertise converges for extraordinary results. Transforming businesses through integrated IT, marketing, and consulting solutions.
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-headline font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/it-services-domain-landing" className="hover:opacity-100 transition-opacity">IT Services</a></li>
                  <li><a href="/marketing-domain-landing" className="hover:opacity-100 transition-opacity">Marketing Solutions</a></li>
                  <li><a href="/business-consulting-domain-landing" className="hover:opacity-100 transition-opacity">Business Consulting</a></li>
                  <li><a href="/integrated-solutions-showcase" className="hover:opacity-100 transition-opacity">Integrated Solutions</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-headline font-semibold text-lg mb-4">Resources</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/resource-intelligence-center" className="hover:opacity-100 transition-opacity">Resource Center</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Whitepapers</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Webinars</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-headline font-semibold text-lg mb-4">Connect</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Schedule Consultation</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Partnership Opportunities</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm opacity-80">
                © {new Date().getFullYear()} Apex Solutions Group. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CentralHubHomepage;