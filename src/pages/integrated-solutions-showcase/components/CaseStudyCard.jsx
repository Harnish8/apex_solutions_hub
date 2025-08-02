import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy, onViewDetails }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical', icon: 'Server' },
    { id: 'marketing', label: 'Marketing', icon: 'TrendingUp' },
    { id: 'business', label: 'Business', icon: 'Users' }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'technical':
        return (
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Technical Architecture</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {caseStudy.technical.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'marketing':
        return (
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Marketing Impact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {caseStudy.marketing.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'business':
        return (
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Business Outcomes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {caseStudy.business.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {caseStudy.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((service, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-brand group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-brand-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md font-medium">
              {caseStudy.industry}
            </span>
            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
              {caseStudy.companySize}
            </span>
          </div>
          <h3 className="text-white font-headline font-bold text-lg leading-tight">
            {caseStudy.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        {/* Tabs */}
        <div className="flex space-x-1 mb-4 bg-muted rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-brand flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-6 min-h-[120px]">
          {getTabContent()}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary font-headline">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
            className="flex-1"
          >
            Resources
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onViewDetails(caseStudy)}
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;