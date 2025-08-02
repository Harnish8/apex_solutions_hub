import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = () => {
  const overallMetrics = [
    {
      icon: 'TrendingUp',
      value: '285%',
      label: 'Average ROI Increase',
      description: 'Across all integrated projects',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: '150+',
      label: 'Successful Transformations',
      description: 'Companies transformed',
      color: 'text-primary'
    },
    {
      icon: 'Clock',
      value: '6 months',
      label: 'Average Project Timeline',
      description: 'From planning to optimization',
      color: 'text-secondary'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Client Satisfaction Rate',
      description: 'Based on post-project surveys',
      color: 'text-warning'
    }
  ];

  const serviceMetrics = [
    {
      service: 'IT Infrastructure',
      icon: 'Server',
      metrics: [
        { label: 'System Uptime', value: '99.9%' },
        { label: 'Performance Boost', value: '340%' },
        { label: 'Security Incidents', value: '-95%' }
      ],
      color: 'border-primary bg-primary/5'
    },
    {
      service: 'Marketing Strategy',
      icon: 'TrendingUp',
      metrics: [
        { label: 'Lead Generation', value: '+450%' },
        { label: 'Conversion Rate', value: '+180%' },
        { label: 'Brand Awareness', value: '+220%' }
      ],
      color: 'border-secondary bg-secondary/5'
    },
    {
      service: 'Business Consulting',
      icon: 'Users',
      metrics: [
        { label: 'Operational Efficiency', value: '+165%' },
        { label: 'Cost Reduction', value: '-40%' },
        { label: 'Revenue Growth', value: '+275%' }
      ],
      color: 'border-accent bg-accent/5'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overall Metrics */}
      <div>
        <h2 className="text-2xl font-bold text-foreground font-headline mb-6">
          Integrated Solutions Impact
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overallMetrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-brand">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${metric.color}`}>
                <Icon name={metric.icon} size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground font-headline mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service-Specific Metrics */}
      <div>
        <h3 className="text-xl font-bold text-foreground font-headline mb-6">
          Service-Specific Performance
        </h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {serviceMetrics.map((service, index) => (
            <div key={index} className={`border rounded-xl p-6 ${service.color}`}>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name={service.icon} size={24} className="text-foreground" />
                <h4 className="font-bold text-foreground">{service.service}</h4>
              </div>
              <div className="space-y-3">
                {service.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <span className="font-bold text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Timeline */}
      <div className="bg-muted rounded-xl p-6">
        <h3 className="text-xl font-bold text-foreground font-headline mb-6">
          Typical Success Timeline
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h4 className="font-semibold text-foreground mb-2">Assessment</h4>
            <p className="text-sm text-muted-foreground">Weeks 1-2</p>
            <p className="text-xs text-muted-foreground mt-1">Initial analysis and planning</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h4 className="font-semibold text-foreground mb-2">Implementation</h4>
            <p className="text-sm text-muted-foreground">Weeks 3-14</p>
            <p className="text-xs text-muted-foreground mt-1">Integrated solution deployment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h4 className="font-semibold text-foreground mb-2">Optimization</h4>
            <p className="text-sm text-muted-foreground">Weeks 15-18</p>
            <p className="text-xs text-muted-foreground mt-1">Performance tuning and refinement</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h4 className="font-semibold text-foreground mb-2">Growth</h4>
            <p className="text-sm text-muted-foreground">Ongoing</p>
            <p className="text-xs text-muted-foreground mt-1">Continuous improvement and scaling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;