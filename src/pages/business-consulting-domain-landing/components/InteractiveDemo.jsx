import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('planning');
  const [selectedScenario, setSelectedScenario] = useState('growth');

  const tabs = [
    { id: 'planning', label: 'Strategic Planning', icon: 'Target' },
    { id: 'analytics', label: 'Performance Analytics', icon: 'BarChart3' },
    { id: 'growth', label: 'Growth Strategy', icon: 'TrendingUp' }
  ];

  const scenarios = [
    { id: 'growth', label: 'Market Expansion', value: '+24%', color: 'text-emerald-600' },
    { id: 'efficiency', label: 'Operational Efficiency', value: '+18%', color: 'text-blue-600' },
    { id: 'digital', label: 'Digital Transformation', value: '+32%', color: 'text-purple-600' }
  ];

  const kpiData = [
    { label: 'Revenue Growth', current: 15.2, target: 24.5, unit: '%' },
    { label: 'Cost Reduction', current: 8.7, target: 12.0, unit: '%' },
    { label: 'Customer Satisfaction', current: 82, target: 90, unit: '/100' },
    { label: 'Market Share', current: 12.5, target: 18.0, unit: '%' }
  ];

  const renderPlanningContent = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setSelectedScenario(scenario.id)}
            className={`p-4 rounded-lg border-2 transition-brand text-left ${
              selectedScenario === scenario.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
            }`}
          >
            <div className="text-sm text-muted-foreground mb-1">{scenario.label}</div>
            <div className={`text-2xl font-bold ${scenario.color}`}>{scenario.value}</div>
          </button>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h4 className="font-semibold text-foreground mb-4">Financial Projections</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Year 1 Revenue</div>
            <div className="text-3xl font-bold text-foreground">$2.4M</div>
            <div className="text-sm text-emerald-600">+24% from baseline</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">ROI Timeline</div>
            <div className="text-3xl font-bold text-foreground">8 months</div>
            <div className="text-sm text-blue-600">Break-even point</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsContent = () => (
    <div className="space-y-6">
      {kpiData.map((kpi, index) => (
        <div key={index} className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-foreground">{kpi.label}</span>
            <span className="text-sm text-muted-foreground">
              {kpi.current}{kpi.unit} → {kpi.target}{kpi.unit}
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent rounded-full h-3 transition-all duration-1000"
              style={{ width: `${(kpi.current / kpi.target) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGrowthContent = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="MapPin" size={20} className="text-primary" />
            <h4 className="font-semibold text-foreground">Market Opportunities</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">North America</span>
              <span className="font-medium text-emerald-600">High Potential</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Europe</span>
              <span className="font-medium text-blue-600">Medium Potential</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Asia Pacific</span>
              <span className="font-medium text-purple-600">Emerging</span>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Users" size={20} className="text-primary" />
            <h4 className="font-semibold text-foreground">Customer Segments</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Enterprise (500+)</span>
              <span className="font-medium">35%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mid-Market (50-500)</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">SMB (&lt;50)</span>
              <span className="font-medium">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Interactive Experience</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
              Experience Our
              <span className="block text-primary">Strategic Tools</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our interactive business consulting tools and see how data-driven insights can transform your strategic decision-making process.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Real-time Calculations</h4>
                  <p className="text-muted-foreground">Instant financial modeling and projections</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visual Analytics</h4>
                  <p className="text-muted-foreground">Interactive dashboards and reporting</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Target" size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Strategic Planning</h4>
                  <p className="text-muted-foreground">Scenario modeling and risk assessment</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
                iconName="Play"
                iconPosition="left"
              >
                Start Free Assessment
              </Button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-card rounded-2xl border border-border shadow-brand-lg">
            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 text-sm font-medium transition-brand ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'planning' && renderPlanningContent()}
              {activeTab === 'analytics' && renderAnalyticsContent()}
              {activeTab === 'growth' && renderGrowthContent()}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-muted/50 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </span>
                <Button variant="ghost" size="sm" iconName="RefreshCw">
                  Refresh Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;