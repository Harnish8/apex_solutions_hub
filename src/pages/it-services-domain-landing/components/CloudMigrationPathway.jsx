import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CloudMigrationPathway = () => {
  const [selectedPath, setSelectedPath] = useState('assessment');
  const [calculatorData, setCalculatorData] = useState({
    currentInfrastructure: 'on-premise',
    serverCount: 10,
    dataVolume: 1000,
    users: 100,
    compliance: false
  });

  const migrationPaths = [
    {
      id: 'assessment',
      title: 'Infrastructure Assessment',
      icon: 'Search',
      duration: '1-2 weeks',
      description: 'Comprehensive analysis of your current infrastructure, applications, and dependencies',
      deliverables: [
        'Current state documentation',
        'Application dependency mapping',
        'Security and compliance audit',
        'Cost-benefit analysis'
      ]
    },
    {
      id: 'planning',
      title: 'Migration Strategy & Planning',
      icon: 'Map',
      duration: '2-3 weeks',
      description: 'Detailed migration roadmap with timelines, resource allocation, and risk mitigation',
      deliverables: [
        'Migration strategy document',
        'Detailed project timeline',
        'Resource allocation plan',
        'Risk mitigation strategies'
      ]
    },
    {
      id: 'pilot',
      title: 'Pilot Migration',
      icon: 'TestTube',
      duration: '2-4 weeks',
      description: 'Small-scale migration to validate approach and identify potential issues',
      deliverables: [
        'Pilot environment setup',
        'Performance benchmarking',
        'Issue identification & resolution',
        'Process refinement'
      ]
    },
    {
      id: 'execution',
      title: 'Full Migration Execution',
      icon: 'Rocket',
      duration: '4-12 weeks',
      description: 'Systematic migration of all applications and data with minimal downtime',
      deliverables: [
        'Application migration',
        'Data transfer & validation',
        'Testing & quality assurance',
        'Go-live support'
      ]
    },
    {
      id: 'optimization',
      title: 'Post-Migration Optimization',
      icon: 'Settings',
      duration: '2-4 weeks',
      description: 'Performance tuning, cost optimization, and team training',
      deliverables: [
        'Performance optimization',
        'Cost optimization review',
        'Team training & documentation',
        'Ongoing support setup'
      ]
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=60&fit=crop',
      strengths: ['Comprehensive services', 'Global infrastructure', 'Enterprise features'],
      bestFor: 'Large enterprises with complex requirements'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=60&fit=crop',
      strengths: ['Windows integration', 'Hybrid capabilities', 'AI/ML services'],
      bestFor: 'Organizations using Microsoft ecosystem'
    },
    {
      name: 'Google Cloud Platform',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=60&fit=crop',
      strengths: ['Data analytics', 'Machine learning', 'Kubernetes native'],
      bestFor: 'Data-driven organizations and startups'
    }
  ];

  const calculateMigrationCost = () => {
    const baseServerCost = calculatorData.serverCount * 150; // $150 per server per month
    const dataCost = calculatorData.dataVolume * 0.023; // $0.023 per GB per month
    const userCost = calculatorData.users * 5; // $5 per user per month
    const complianceCost = calculatorData.compliance ? 500 : 0; // Additional compliance costs
    
    const monthlyTotal = baseServerCost + dataCost + userCost + complianceCost;
    const migrationCost = monthlyTotal * 2; // Estimated one-time migration cost
    
    return {
      monthly: monthlyTotal,
      migration: migrationCost,
      annual: monthlyTotal * 12,
      savings: Math.max(0, (monthlyTotal * 1.3) - monthlyTotal) // Estimated 30% savings
    };
  };

  const costs = calculateMigrationCost();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Cloud" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Cloud Migration</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Your Cloud Transformation Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step guidance through your cloud migration with cost calculators, 
            timeline estimators, and expert support at every stage.
          </p>
        </div>

        {/* Migration Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-center mb-8">Migration Pathway</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {migrationPaths.map((path, index) => (
                <div
                  key={path.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedPath === path.id ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  {/* Timeline Node */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-4 transition-all ${
                    selectedPath === path.id
                      ? 'bg-primary border-primary text-white shadow-lg'
                      : 'bg-white border-border text-muted-foreground hover:border-primary'
                  }`}>
                    <Icon name={path.icon} size={24} />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-2">{path.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{path.duration}</p>
                    <p className="text-sm text-muted-foreground">{path.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Path Details */}
        <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8 mb-16">
          {migrationPaths.map((path) => (
            <div
              key={path.id}
              className={`${selectedPath === path.id ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={path.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-foreground">{path.title}</h3>
                  <p className="text-primary font-medium">{path.duration}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{path.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Deliverables:</h4>
                  <div className="space-y-2">
                    {path.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">What to Expect:</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span>Dedicated migration team assigned</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>Regular progress updates & checkpoints</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={16} className="text-primary" />
                      <span>Risk mitigation & rollback plans</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <span>24/7 support during critical phases</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cost Calculator */}
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              Migration Cost Calculator
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Current Infrastructure
                </label>
                <select
                  value={calculatorData.currentInfrastructure}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    currentInfrastructure: e.target.value
                  }))}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="on-premise">On-Premise Data Center</option>
                  <option value="colocation">Colocation Facility</option>
                  <option value="hybrid">Hybrid Environment</option>
                  <option value="legacy-cloud">Legacy Cloud Provider</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Server Count
                  </label>
                  <input
                    type="number"
                    value={calculatorData.serverCount}
                    onChange={(e) => setCalculatorData(prev => ({
                      ...prev,
                      serverCount: parseInt(e.target.value) || 0
                    }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Data Volume (GB)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.dataVolume}
                    onChange={(e) => setCalculatorData(prev => ({
                      ...prev,
                      dataVolume: parseInt(e.target.value) || 0
                    }))}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Users
                </label>
                <input
                  type="number"
                  value={calculatorData.users}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    users: parseInt(e.target.value) || 0
                  }))}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compliance"
                  checked={calculatorData.compliance}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    compliance: e.target.checked
                  }))}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="compliance" className="text-sm text-foreground">
                  Compliance requirements (HIPAA, SOC2, etc.)
                </label>
              </div>
            </div>
            
            {/* Cost Results */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Estimated Costs:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Migration Cost:</p>
                  <p className="text-xl font-bold text-primary">${costs.migration.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Monthly Operating:</p>
                  <p className="text-xl font-bold text-primary">${costs.monthly.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Annual Cost:</p>
                  <p className="text-lg font-semibold text-foreground">${costs.annual.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Potential Savings:</p>
                  <p className="text-lg font-semibold text-accent">${costs.savings.toLocaleString()}/mo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Provider Comparison */}
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              Cloud Provider Options
            </h3>
            
            <div className="space-y-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-10 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-slate-600">{provider.name.split(' ').map(w => w[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{provider.name}</h4>
                      <p className="text-sm text-muted-foreground">{provider.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Strengths:</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.strengths.map((strength, strengthIndex) => (
                        <span
                          key={strengthIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Lightbulb" size={20} className="text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Expert Recommendation</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    Our team will help you choose the best cloud provider based on your specific 
                    requirements, existing technology stack, and business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Ready to Start Your Cloud Journey?
            </h3>
            <p className="text-muted-foreground mb-8">
              Get a personalized migration strategy and detailed cost analysis from our cloud experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Migration Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Migration Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationPathway;