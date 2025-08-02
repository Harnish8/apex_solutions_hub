import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollaborationWorkflow = () => {
  const [activePhase, setActivePhase] = useState(0);

  const workflowPhases = [
    {
      id: 0,
      title: 'Discovery & Assessment',
      duration: '2 weeks',
      description: 'Cross-functional team conducts comprehensive analysis of current state and requirements',
      teams: ['IT Assessment', 'Marketing Audit', 'Business Analysis'],
      activities: [
        'Technical infrastructure evaluation',
        'Marketing performance analysis',
        'Business process mapping',
        'Stakeholder interviews',
        'Competitive landscape review'
      ],
      deliverables: [
        'Current State Assessment Report',
        'Gap Analysis Documentation',
        'Integrated Roadmap Proposal'
      ],
      icon: 'Search',
      color: 'primary'
    },
    {
      id: 1,
      title: 'Strategic Planning',
      duration: '1 week',
      description: 'Collaborative planning session to align all service areas with unified objectives',
      teams: ['Solution Architects', 'Marketing Strategists', 'Business Consultants'],
      activities: [
        'Cross-functional strategy workshops',
        'Technology architecture design',
        'Marketing campaign planning',
        'Change management strategy',
        'Resource allocation planning'
      ],
      deliverables: [
        'Integrated Solution Blueprint',
        'Project Timeline & Milestones',
        'Resource Allocation Plan'
      ],
      icon: 'Target',
      color: 'secondary'
    },
    {
      id: 2,
      title: 'Synchronized Implementation',
      duration: '12 weeks',
      description: 'Coordinated execution across all service areas with regular cross-team synchronization',
      teams: ['Development Teams', 'Creative Teams', 'Implementation Specialists'],
      activities: [
        'Infrastructure deployment',
        'Marketing campaign execution',
        'Process optimization',
        'Team training & onboarding',
        'Quality assurance testing'
      ],
      deliverables: [
        'Deployed Technical Solutions',
        'Active Marketing Campaigns',
        'Optimized Business Processes'
      ],
      icon: 'Zap',
      color: 'accent'
    },
    {
      id: 3,
      title: 'Integration & Testing',
      duration: '2 weeks',
      description: 'Comprehensive testing of integrated systems and processes to ensure seamless operation',
      teams: ['QA Engineers', 'Performance Analysts', 'Integration Specialists'],
      activities: [
        'System integration testing',
        'Performance optimization',
        'User acceptance testing',
        'Data validation & migration',
        'Security compliance verification'
      ],
      deliverables: [
        'Integration Test Results',
        'Performance Benchmarks',
        'Security Compliance Report'
      ],
      icon: 'CheckCircle',
      color: 'warning'
    },
    {
      id: 4,
      title: 'Launch & Optimization',
      duration: '4 weeks',
      description: 'Coordinated go-live with continuous monitoring and optimization across all areas',
      teams: ['Support Teams', 'Analytics Teams', 'Optimization Specialists'],
      activities: [
        'Coordinated system launch',
        'Performance monitoring',
        'User feedback collection',
        'Continuous optimization',
        'Knowledge transfer'
      ],
      deliverables: [
        'Live Integrated System',
        'Performance Dashboards',
        'Optimization Recommendations'
      ],
      icon: 'Rocket',
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground border-primary',
      secondary: 'bg-secondary text-secondary-foreground border-secondary',
      accent: 'bg-accent text-accent-foreground border-accent',
      warning: 'bg-warning text-warning-foreground border-warning',
      success: 'bg-success text-success-foreground border-success'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground font-headline mb-4">
          Cross-Domain Collaboration Workflow
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our integrated approach ensures seamless coordination between IT, Marketing, and Business Consulting teams throughout every project phase.
        </p>
      </div>

      {/* Phase Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {workflowPhases.map((phase, index) => (
          <Button
            key={phase.id}
            variant={activePhase === index ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePhase(index)}
            iconName={phase.icon}
            iconPosition="left"
            className="text-sm"
          >
            {phase.title}
          </Button>
        ))}
      </div>

      {/* Active Phase Details */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand">
        <div className={`p-6 ${getColorClasses(workflowPhases[activePhase].color)}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name={workflowPhases[activePhase].icon} size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">
                  {workflowPhases[activePhase].title}
                </h3>
                <p className="opacity-90">
                  Duration: {workflowPhases[activePhase].duration}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-75">Phase</div>
              <div className="text-2xl font-bold">{activePhase + 1}/5</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {workflowPhases[activePhase].description}
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Teams Involved */}
            <div>
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <Icon name="Users" size={18} className="mr-2" />
                Teams Involved
              </h4>
              <div className="space-y-2">
                {workflowPhases[activePhase].teams.map((team, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{team}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Activities */}
            <div>
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <Icon name="Activity" size={18} className="mr-2" />
                Key Activities
              </h4>
              <div className="space-y-2">
                {workflowPhases[activePhase].activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <Icon name="Package" size={18} className="mr-2" />
                Deliverables
              </h4>
              <div className="space-y-2">
                {workflowPhases[activePhase].deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="FileText" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-muted rounded-xl p-6">
        <h3 className="text-xl font-bold text-foreground font-headline mb-6">
          Project Timeline Overview
        </h3>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            {workflowPhases.map((phase, index) => (
              <div key={phase.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-brand cursor-pointer ${
                    index <= activePhase
                      ? getColorClasses(phase.color)
                      : 'bg-border text-muted-foreground'
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  {index + 1}
                </div>
                <div className="text-xs text-center mt-2 max-w-20">
                  <div className="font-medium text-foreground">{phase.title}</div>
                  <div className="text-muted-foreground">{phase.duration}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-border -z-10">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(activePhase / (workflowPhases.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationWorkflow;