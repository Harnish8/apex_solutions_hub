import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CaseStudyCard from './components/CaseStudyCard';
import FilterPanel from './components/FilterPanel';
import CaseStudyModal from './components/CaseStudyModal';
import MetricsOverview from './components/MetricsOverview';
import CollaborationWorkflow from './components/CollaborationWorkflow';

const IntegratedSolutionsShowcase = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    companySize: 'all',
    services: 'all'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);

  // Mock case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Digital Transformation",
      company: "MedTech Solutions Inc.",
      industry: "healthcare",
      companySize: "enterprise",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: `Complete digital transformation of a leading healthcare provider, integrating advanced IT infrastructure with targeted marketing campaigns and strategic business process optimization. The project revolutionized patient care delivery while significantly improving operational efficiency and market positioning.`,
      challenge: `MedTech Solutions faced declining patient satisfaction scores, outdated IT systems causing frequent downtime, and ineffective marketing strategies that failed to reach target demographics. The company was losing market share to competitors while struggling with operational inefficiencies and regulatory compliance issues.`,
      services: ["IT Infrastructure", "Digital Marketing", "Business Process Optimization"],
      duration: "18 weeks",
      technical: [
        "Cloud migration to AWS with 99.9% uptime SLA",
        "Implementation of HIPAA-compliant patient management system",
        "Real-time analytics dashboard for operational insights",
        "Automated backup and disaster recovery solutions"
      ],
      marketing: [
        "Patient-centric digital marketing campaigns",
        "SEO optimization for medical services",
        "Social media strategy for healthcare engagement",
        "Content marketing for patient education"
      ],
      business: [
        "Streamlined patient intake and scheduling processes",
        "Staff training and change management programs",
        "Regulatory compliance framework implementation",
        "Performance metrics and KPI tracking systems"
      ],
      metrics: [
        { value: "340%", label: "ROI Increase" },
        { value: "65%", label: "Patient Satisfaction" },
        { value: "99.9%", label: "System Uptime" }
      ],
      testimonial: {
        name: "Dr. Sarah Mitchell",
        role: "Chief Medical Officer",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        quote: "The integrated approach transformed not just our technology, but our entire patient care philosophy. We've seen remarkable improvements in both operational efficiency and patient outcomes."
      }
    },
    {
      id: 2,
      title: "E-commerce Growth Acceleration",
      company: "RetailMax Corporation",
      industry: "ecommerce",
      companySize: "sme",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: `Comprehensive e-commerce transformation combining robust IT infrastructure, data-driven marketing strategies, and business process optimization to achieve unprecedented growth in competitive retail market.`,
      challenge: `RetailMax was struggling with scalability issues, inefficient inventory management, and low conversion rates. Their existing platform couldn't handle traffic spikes during peak seasons, resulting in lost sales and poor customer experience.`,
      services: ["Cloud Infrastructure", "Performance Marketing", "Operations Consulting"],
      duration: "16 weeks",
      technical: [
        "Scalable e-commerce platform migration",
        "Advanced analytics and reporting systems",
        "Automated inventory management integration",
        "Mobile-first responsive design implementation"
      ],
      marketing: [
        "Multi-channel digital advertising campaigns",
        "Conversion rate optimization strategies",
        "Email marketing automation workflows",
        "Influencer partnership program development"
      ],
      business: [
        "Supply chain optimization and automation",
        "Customer service process improvement",
        "Financial planning and forecasting systems",
        "Team restructuring and role optimization"
      ],
      metrics: [
        { value: "450%", label: "Revenue Growth" },
        { value: "180%", label: "Conversion Rate" },
        { value: "220%", label: "Traffic Increase" }
      ],
      testimonial: {
        name: "Michael Chen",
        role: "CEO & Founder",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The integrated solution didn't just solve our immediate problems—it positioned us for sustainable long-term growth. Our revenue has quadrupled, and we're now market leaders in our category."
      }
    },
    {
      id: 3,
      title: "Manufacturing Digital Revolution",
      company: "Industrial Dynamics Ltd.",
      industry: "manufacturing",
      companySize: "enterprise",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
      description: `End-to-end digital transformation of traditional manufacturing operations, implementing Industry 4.0 technologies while developing B2B marketing strategies and optimizing business processes for maximum efficiency.`,
      challenge: `Industrial Dynamics operated with legacy systems that hindered productivity and competitiveness. Manual processes led to quality inconsistencies, while their B2B marketing efforts failed to generate qualified leads in an increasingly digital marketplace.`,
      services: ["IoT Implementation", "B2B Marketing", "Lean Manufacturing"],
      duration: "24 weeks",
      technical: [
        "IoT sensor network for real-time monitoring",
        "Predictive maintenance system implementation",
        "ERP system integration and optimization",
        "Quality control automation with AI"
      ],
      marketing: [
        "B2B lead generation campaigns",
        "Industry trade show digital presence",
        "Technical content marketing strategy",
        "LinkedIn and industry platform optimization"
      ],
      business: [
        "Lean manufacturing process implementation",
        "Quality management system overhaul",
        "Workforce training and development programs",
        "Supplier relationship optimization"
      ],
      metrics: [
        { value: "275%", label: "Productivity Gain" },
        { value: "40%", label: "Cost Reduction" },
        { value: "95%", label: "Quality Improvement" }
      ],
      testimonial: {
        name: "Robert Johnson",
        role: "Operations Director",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        quote: "This transformation has revolutionized our operations. We\'ve achieved levels of efficiency and quality that seemed impossible with our traditional processes."
      }
    },
    {
      id: 4,
      title: "Fintech Startup Scaling",
      company: "PayFlow Innovations",
      industry: "fintech",
      companySize: "startup",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: `Rapid scaling solution for fintech startup, building secure financial infrastructure, implementing growth marketing strategies, and establishing scalable business operations to support exponential user growth.`,
      challenge: `PayFlow needed to scale rapidly while maintaining security and compliance standards. Their initial infrastructure couldn't handle growing user demand, and they lacked the marketing expertise to acquire customers cost-effectively in the competitive fintech space.`,
      services: ["Security Infrastructure", "Growth Marketing", "Scaling Strategy"],
      duration: "12 weeks",
      technical: [
        "PCI DSS compliant payment processing system",
        "Multi-layer security architecture implementation",
        "Scalable microservices architecture",
        "Real-time fraud detection and prevention"
      ],
      marketing: [
        "Performance-based user acquisition campaigns",
        "Referral program development and optimization",
        "Content marketing for financial education",
        "Partnership marketing with financial institutions"
      ],
      business: [
        "Regulatory compliance framework setup",
        "Customer support system implementation",
        "Financial planning and investor reporting",
        "Team scaling and organizational structure"
      ],
      metrics: [
        { value: "800%", label: "User Growth" },
        { value: "150%", label: "Transaction Volume" },
        { value: "60%", label: "Cost Per Acquisition" }
      ],
      testimonial: {
        name: "Lisa Rodriguez",
        role: "Co-Founder & CTO",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        quote: "The integrated approach was crucial for our rapid scaling. We maintained security and compliance while achieving explosive growth that exceeded all our projections."
      }
    },
    {
      id: 5,
      title: "Education Platform Modernization",
      company: "EduTech Academy",
      industry: "education",
      companySize: "sme",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: `Comprehensive modernization of educational platform, implementing cloud-based learning management systems, developing student-focused marketing campaigns, and optimizing educational delivery processes.`,
      challenge: `EduTech Academy's outdated learning platform provided poor user experience for both students and instructors. Low student engagement and high dropout rates were affecting their reputation and revenue, while their marketing efforts failed to attract quality students.`,
      services: ["Learning Management System", "Student Marketing", "Educational Consulting"],
      duration: "20 weeks",
      technical: [
        "Cloud-based LMS with mobile accessibility",
        "Interactive content delivery platform",
        "Student progress tracking and analytics",
        "Automated grading and feedback systems"
      ],
      marketing: [
        "Student-targeted social media campaigns",
        "SEO optimization for educational content",
        "Email nurturing sequences for prospects",
        "Alumni success story marketing"
      ],
      business: [
        "Curriculum development and optimization",
        "Instructor training and support programs",
        "Student retention strategy implementation",
        "Financial aid and payment processing systems"
      ],
      metrics: [
        { value: "320%", label: "Student Engagement" },
        { value: "85%", label: "Completion Rate" },
        { value: "200%", label: "Enrollment Growth" }
      ],
      testimonial: {
        name: "Dr. Amanda Foster",
        role: "Academic Director",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        quote: "The transformation has completely changed how we deliver education. Our students are more engaged, our instructors are more effective, and our outcomes have never been better."
      }
    },
    {
      id: 6,
      title: "Retail Chain Digital Integration",
      company: "Fashion Forward Stores",
      industry: "retail",
      companySize: "enterprise",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: `Omnichannel retail transformation integrating online and offline experiences, implementing unified inventory management, and developing cohesive marketing strategies across all customer touchpoints.`,
      challenge: `Fashion Forward struggled with disconnected online and offline experiences, leading to inventory discrepancies and customer frustration. Their marketing efforts lacked coordination across channels, resulting in inconsistent brand messaging and missed opportunities.`,
      services: ["Omnichannel Integration", "Unified Marketing", "Retail Operations"],
      duration: "22 weeks",
      technical: [
        "Unified inventory management across channels",
        "Point-of-sale system integration",
        "Customer data platform implementation",
        "Mobile app development for enhanced shopping"
      ],
      marketing: [
        "Omnichannel customer journey optimization",
        "Personalized email and SMS campaigns",
        "Social commerce integration",
        "Loyalty program development and management"
      ],
      business: [
        "Staff training for omnichannel operations",
        "Supply chain optimization for faster delivery",
        "Customer service integration across channels",
        "Performance analytics and reporting systems"
      ],
      metrics: [
        { value: "380%", label: "Online Sales" },
        { value: "45%", label: "Customer Retention" },
        { value: "160%", label: "Average Order Value" }
      ],
      testimonial: {
        name: "Jennifer Walsh",
        role: "Chief Marketing Officer",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        quote: "The omnichannel integration has transformed our customer experience. We now provide seamless shopping journeys that have significantly increased both satisfaction and sales."
      }
    }
  ];

  // Filter case studies based on current filters
  useEffect(() => {
    let filtered = caseStudies;

    if (filters.industry !== 'all') {
      filtered = filtered.filter(study => study.industry === filters.industry);
    }

    if (filters.companySize !== 'all') {
      filtered = filtered.filter(study => study.companySize === filters.companySize);
    }

    if (filters.services !== 'all') {
      const serviceMap = {
        'it-marketing': ['IT Infrastructure', 'Digital Marketing', 'Performance Marketing', 'Cloud Infrastructure'],
        'it-business': ['IT Infrastructure', 'Business Process Optimization', 'Operations Consulting'],
        'marketing-business': ['Digital Marketing', 'Business Process Optimization', 'Growth Marketing'],
        'full-integration': filtered // Show all for full integration
      };

      if (filters.services !== 'full-integration') {
        const requiredServices = serviceMap[filters.services];
        filtered = filtered.filter(study => 
          study.services.some(service => 
            requiredServices.some(required => service.includes(required.split(' ')[0]))
          )
        );
      }
    }

    setFilteredCaseStudies(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      companySize: 'all',
      services: 'all'
    });
  };

  const handleViewDetails = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-headline mb-6">
              Integrated Solutions
              <span className="block text-primary">Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how our convergence of IT expertise, marketing innovation, and business consulting 
              creates transformational results that exceed expectations and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
              >
                Watch Success Stories
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MetricsOverview />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-headline mb-4">
              Transformational Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore real-world examples of how our integrated approach delivers measurable results 
              across diverse industries and company sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filter Panel */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
              />
            </div>

            {/* Case Studies Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="text-sm border border-border rounded-md px-3 py-1 bg-background text-foreground">
                    <option>Most Recent</option>
                    <option>Highest ROI</option>
                    <option>Industry</option>
                    <option>Company Size</option>
                  </select>
                </div>
              </div>

              {filteredCaseStudies.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCaseStudies.map((caseStudy) => (
                    <CaseStudyCard
                      key={caseStudy.id}
                      caseStudy={caseStudy}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No case studies found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RefreshCw"
                    iconPosition="left"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Workflow */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CollaborationWorkflow />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-headline mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our integrated approach can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-cta font-semibold"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Start Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Layers" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-headline font-bold text-xl">Apex Solutions</div>
                  <div className="text-sm text-gray-400">Hub</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Where expertise converges for extraordinary results. Your strategic advantage in an integrated world.
              </p>
              <div className="flex space-x-4">
                <Icon name="Linkedin" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
                <Icon name="Mail" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-brand" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/it-services-domain-landing" className="hover:text-white transition-brand">IT Services</a></li>
                <li><a href="/marketing-domain-landing" className="hover:text-white transition-brand">Marketing</a></li>
                <li><a href="/business-consulting-domain-landing" className="hover:text-white transition-brand">Business Consulting</a></li>
                <li><a href="/integrated-solutions-showcase" className="hover:text-white transition-brand">Integrated Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/resource-intelligence-center" className="hover:text-white transition-brand">Resource Center</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Whitepapers</a></li>
                <li><a href="#" className="hover:text-white transition-brand">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Apex Solutions Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default IntegratedSolutionsShowcase;