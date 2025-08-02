import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CrossDomainIntegration = () => {
  const [activeIntegration, setActiveIntegration] = useState('marketing-tech');

  const integrationScenarios = [
    {
      id: 'marketing-tech',
      title: 'Marketing Technology Stack',
      description: 'How IT infrastructure enables advanced marketing capabilities',
      icon: 'TrendingUp',
      color: 'blue',
      benefits: [
        'Real-time customer data processing',
        'Scalable campaign management',
        'Advanced analytics and reporting',
        'Automated lead nurturing systems'
      ],
      technologies: ['CRM Integration', 'Marketing Automation', 'Data Analytics', 'CDN Optimization'],
      caseStudy: {
        client: 'TechStart Solutions',
        challenge: 'Needed to scale marketing operations while maintaining data security and performance',
        solution: 'Implemented cloud-native marketing stack with real-time data processing',
        results: ['300% increase in lead processing', '50% reduction in campaign deployment time', '99.9% uptime for marketing systems']
      }
    },
    {
      id: 'business-strategy',
      title: 'Strategic Business Enablement',
      description: 'IT decisions that directly impact business strategy and growth',
      icon: 'Target',
      color: 'green',
      benefits: [
        'Data-driven decision making',
        'Operational efficiency gains',
        'Competitive advantage through technology',
        'Risk mitigation and compliance'
      ],
      technologies: ['Business Intelligence', 'Process Automation', 'Security Framework', 'Disaster Recovery'],
      caseStudy: {
        client: 'Global Manufacturing Corp',
        challenge: 'Required digital transformation to compete in modern marketplace',
        solution: 'Comprehensive IT modernization aligned with business strategy',
        results: ['40% operational cost reduction', '25% faster time-to-market', 'Enhanced regulatory compliance']
      }
    },
    {
      id: 'unified-platform',
      title: 'Unified Digital Platform',
      description: 'Integrated approach combining IT, marketing, and business consulting',
      icon: 'Layers',
      color: 'purple',
      benefits: [
        'Seamless data flow across departments',
        'Unified customer experience',
        'Streamlined operations',
        'Holistic performance monitoring'
      ],
      technologies: ['API Gateway', 'Microservices', 'Data Lake', 'Identity Management'],
      caseStudy: {
        client: 'Healthcare Innovation Group',
        challenge: 'Siloed systems preventing effective patient care coordination',
        solution: 'Unified platform integrating clinical, marketing, and operational systems',
        results: ['60% improvement in patient satisfaction', '35% reduction in administrative overhead', 'HIPAA-compliant data sharing']
      }
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-100 border-blue-400',
      green: 'bg-green-500 text-green-100 border-green-400',
      purple: 'bg-purple-500 text-purple-100 border-purple-400'
    };
    return colors[color] || colors.blue;
  };

  const crossDomainServices = [
    {
      title: 'IT-Enabled Marketing Solutions',
      description: 'Technology infrastructure that powers modern marketing campaigns',
      icon: 'Zap',
      features: ['Marketing automation platforms', 'Customer data platforms', 'Real-time analytics', 'A/B testing infrastructure'],
      link: '/marketing-domain-landing'
    },
    {
      title: 'Strategic Technology Consulting',
      description: 'Business strategy informed by technology capabilities and constraints',
      icon: 'Compass',
      features: ['Digital transformation roadmaps', 'Technology ROI analysis', 'Risk assessment', 'Change management'],
      link: '/business-consulting-domain-landing'
    },
    {
      title: 'Integrated Solution Architecture',
      description: 'Comprehensive solutions that span multiple business domains',
      icon: 'Network',
      features: ['Cross-functional integration', 'Unified data architecture', 'Process optimization', 'Performance monitoring'],
      link: '/integrated-solutions-showcase'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Link" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Cross-Domain Integration</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            IT as the Foundation for Business Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our IT infrastructure solutions enable marketing excellence and support 
            strategic business objectives across your entire organization.
          </p>
        </div>

        {/* Integration Scenario Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {integrationScenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveIntegration(scenario.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                activeIntegration === scenario.id
                  ? `${getColorClasses(scenario.color)} shadow-lg transform scale-105`
                  : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              <Icon name={scenario.icon} size={20} />
              <span className="font-medium">{scenario.title}</span>
            </button>
          ))}
        </div>

        {/* Active Integration Display */}
        <div className="bg-white rounded-2xl shadow-brand-lg border border-border overflow-hidden mb-16">
          {integrationScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`${activeIntegration === scenario.id ? 'block' : 'hidden'}`}
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Scenario Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${getColorClasses(scenario.color)} flex items-center justify-center`}>
                        <Icon name={scenario.icon} size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-headline font-bold text-foreground">
                          {scenario.title}
                        </h3>
                        <p className="text-muted-foreground">{scenario.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Key Benefits:</h4>
                      <div className="space-y-2">
                        {scenario.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-accent" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Core Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {scenario.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Success Story</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Client:</h5>
                        <p className="text-sm text-muted-foreground">{scenario.caseStudy.client}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Challenge:</h5>
                        <p className="text-sm text-muted-foreground">{scenario.caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Solution:</h5>
                        <p className="text-sm text-muted-foreground">{scenario.caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Results:</h5>
                        <div className="space-y-1">
                          {scenario.caseStudy.results.map((result, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="TrendingUp" size={14} className="text-accent" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Domain Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {crossDomainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-brand border border-border p-6 hover:shadow-brand-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to={service.link}>
                <Button 
                  variant="outline"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Integration Architecture Diagram */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-headline font-bold text-center mb-8">
            Integrated Solution Architecture
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* IT Infrastructure */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Server" size={32} />
              </div>
              <h4 className="font-semibold mb-2">IT Infrastructure</h4>
              <div className="space-y-1 text-sm text-slate-300">
                <p>• Cloud platforms</p>
                <p>• Security systems</p>
                <p>• Data management</p>
                <p>• Network architecture</p>
              </div>
            </div>

            {/* Bidirectional Arrows */}
            <div className="hidden lg:flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="ArrowRight" size={20} className="text-cyan-400" />
                <span className="text-xs text-slate-300">Data Flow</span>
                <Icon name="ArrowLeft" size={20} className="text-cyan-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ArrowRight" size={20} className="text-green-400" />
                <span className="text-xs text-slate-300">Integration</span>
                <Icon name="ArrowLeft" size={20} className="text-green-400" />
              </div>
            </div>

            {/* Marketing & Business */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Marketing & Business</h4>
              <div className="space-y-1 text-sm text-slate-300">
                <p>• Campaign management</p>
                <p>• Customer analytics</p>
                <p>• Business intelligence</p>
                <p>• Strategic planning</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-300 mb-4">
              Seamless integration creates synergies that amplify the effectiveness of each domain
            </p>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              iconName="Download"
              iconPosition="left"
            >
              Download Architecture Guide
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Ready to Integrate Your Business Systems?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let our experts design a comprehensive solution that connects your IT infrastructure 
              with your marketing and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Integration Consultation
              </Button>
              <Link to="/integrated-solutions-showcase">
                <Button 
                  variant="outline"
                  size="lg"
                  iconName="Layers"
                  iconPosition="left"
                >
                  View Integrated Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossDomainIntegration;