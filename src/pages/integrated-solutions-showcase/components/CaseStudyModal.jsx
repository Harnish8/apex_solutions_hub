import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyModal = ({ caseStudy, isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');

  if (!isOpen || !caseStudy) return null;

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'challenge', label: 'Challenge', icon: 'AlertTriangle' },
    { id: 'solution', label: 'Solution', icon: 'Lightbulb' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'testimonial', label: 'Testimonial', icon: 'MessageSquare' }
  ];

  const getSectionContent = () => {
    switch (activeSection) {
      case 'challenge':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-headline">The Challenge</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                <Icon name="TrendingDown" size={24} className="text-error mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Revenue Impact</h4>
                <p className="text-sm text-muted-foreground">25% decline in quarterly revenue</p>
              </div>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <Icon name="Clock" size={24} className="text-warning mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Time Constraints</h4>
                <p className="text-sm text-muted-foreground">6-month deadline for transformation</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <Icon name="Users" size={24} className="text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Team Alignment</h4>
                <p className="text-sm text-muted-foreground">Siloed departments lacking coordination</p>
              </div>
            </div>
          </div>
        );
      case 'solution':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-headline">Our Integrated Solution</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <Icon name="Server" size={32} className="text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-3">IT Infrastructure</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {caseStudy.technical.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                <Icon name="TrendingUp" size={32} className="text-secondary mb-4" />
                <h4 className="font-bold text-foreground mb-3">Marketing Strategy</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {caseStudy.marketing.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <Icon name="Users" size={32} className="text-accent mb-4" />
                <h4 className="font-bold text-foreground mb-3">Business Consulting</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {caseStudy.business.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'results':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-headline">Transformational Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="text-center bg-muted rounded-lg p-6">
                  <div className="text-4xl font-bold text-primary font-headline mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    vs. previous period
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <Icon name="Trophy" size={20} className="text-accent mr-2" />
                Key Achievements
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Reduced operational costs by 40%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Improved customer satisfaction by 65%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Accelerated time-to-market by 50%</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Enhanced team productivity by 75%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Increased market share by 30%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Achieved 99.9% system uptime</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'testimonial':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground font-headline">Client Testimonial</h3>
            <div className="bg-muted rounded-lg p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{caseStudy.testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.company}</p>
                </div>
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5.0 out of 5</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground font-headline mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block w-64 h-48 rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Company Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium text-foreground">{caseStudy.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span className="font-medium text-foreground">{caseStudy.companySize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Duration:</span>
                    <span className="font-medium text-foreground">{caseStudy.duration}</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Project Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Planning Phase:</span>
                    <span className="font-medium text-foreground">2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Implementation:</span>
                    <span className="font-medium text-foreground">12 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Optimization:</span>
                    <span className="font-medium text-foreground">4 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-xl shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md font-medium">
              {caseStudy.industry}
            </span>
            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
              {caseStudy.companySize}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Navigation */}
        <div className="flex space-x-1 p-6 pb-0 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={section.icon} size={16} />
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {getSectionContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted">
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
            >
              Download Resources
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share"
              iconPosition="left"
            >
              Share Case Study
            </Button>
          </div>
          <Button
            variant="default"
            size="sm"
            iconName="MessageSquare"
            iconPosition="left"
            className="bg-cta hover:bg-cta/90 text-cta-foreground"
          >
            Discuss Similar Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;