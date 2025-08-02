import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyInnovationLab = () => {
  const [activeDemo, setActiveDemo] = useState('cloud-migration');

  const demos = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Accelerator',
      description: 'Interactive tool for planning and executing seamless cloud transformations',
      icon: 'Cloud',
      color: 'blue',
      features: ['Cost Calculator', 'Timeline Planner', 'Risk Assessment', 'Compliance Check']
    },
    {
      id: 'security-center',
      title: 'AI-Powered Security Hub',
      description: 'Real-time threat detection and automated response systems',
      icon: 'Shield',
      color: 'red',
      features: ['Threat Intelligence', 'Automated Response', 'Vulnerability Scanning', 'Compliance Monitoring']
    },
    {
      id: 'infrastructure-monitor',
      title: 'Infrastructure Intelligence',
      description: 'Comprehensive monitoring and predictive analytics platform',
      icon: 'Activity',
      color: 'green',
      features: ['Performance Metrics', 'Predictive Analytics', 'Auto-scaling', 'Resource Optimization']
    },
    {
      id: 'devops-pipeline',
      title: 'DevOps Automation Suite',
      description: 'End-to-end CI/CD pipeline with integrated testing and deployment',
      icon: 'GitBranch',
      color: 'purple',
      features: ['Automated Testing', 'Deployment Pipeline', 'Code Quality Gates', 'Release Management']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-100 border-blue-400',
      red: 'bg-red-500 text-red-100 border-red-400',
      green: 'bg-green-500 text-green-100 border-green-400',
      purple: 'bg-purple-500 text-purple-100 border-purple-400'
    };
    return colors[color] || colors.blue;
  };

  const mockData = {
    'cloud-migration': {
      currentCost: '$45,000/month',
      projectedSavings: '35%',
      migrationTime: '6-8 weeks',
      riskLevel: 'Low'
    },
    'security-center': {
      threatsDetected: '1,247',
      responseTime: '< 2 minutes',
      complianceScore: '98%',
      vulnerabilities: '3 Critical'
    },
    'infrastructure-monitor': {
      uptime: '99.97%',
      performance: '142ms avg',
      efficiency: '+23%',
      alerts: '12 Active'
    },
    'devops-pipeline': {
      deployments: '847 this month',
      successRate: '99.2%',
      buildTime: '4.2 minutes',
      testCoverage: '94%'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Cpu" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Innovation Lab</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Interactive Technology Demos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge solutions through hands-on demonstrations. See how our technology transforms your IT infrastructure.
          </p>
        </div>

        {/* Demo Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                activeDemo === demo.id
                  ? `${getColorClasses(demo.color)} shadow-lg transform scale-105`
                  : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              <Icon name={demo.icon} size={20} />
              <span className="font-medium">{demo.title}</span>
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-white rounded-2xl shadow-brand-lg border border-border overflow-hidden">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`${activeDemo === demo.id ? 'block' : 'hidden'}`}
            >
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Demo Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${getColorClasses(demo.color)} flex items-center justify-center`}>
                        <Icon name={demo.icon} size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-headline font-bold text-foreground">
                          {demo.title}
                        </h3>
                        <p className="text-muted-foreground">{demo.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {demo.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-accent" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="default"
                        className="bg-primary hover:bg-primary/90"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Try Interactive Demo
                      </Button>
                      <Button 
                        variant="outline"
                        iconName="Download"
                        iconPosition="left"
                      >
                        Download Specs
                      </Button>
                    </div>
                  </div>

                  {/* Demo Dashboard */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold">Live Dashboard</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Live</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(mockData[demo.id]).map(([key, value], index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-4">
                          <p className="text-sm text-slate-300 capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg font-bold text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Simulated Chart */}
                    <div className="mt-6">
                      <div className="flex items-end space-x-2 h-20">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-cyan-400 rounded-t flex-1 animate-pulse"
                            style={{
                              height: `${Math.random() * 60 + 20}%`,
                              animationDelay: `${i * 100}ms`
                            }}
                          ></div>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 mt-2 text-center">
                        Real-time Performance Metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to see how these solutions can transform your business?
          </p>
          <Button 
            variant="default"
            size="lg"
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Personal Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInnovationLab;