import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      icon: "Calculator",
      title: "Strategic Planning Simulator",
      description: "Interactive business scenario modeling with financial projections and risk assessments",
      features: ["Financial Modeling", "Risk Analysis", "Scenario Planning", "ROI Projections"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: "Target",
      title: "Operational Excellence Assessment",
      description: "Comprehensive business health evaluations with KPI scoring and performance benchmarking",
      features: ["Performance Metrics", "Benchmarking", "Process Optimization", "Quality Assurance"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: "GitBranch",
      title: "Change Management Roadmaps",
      description: "Transformation planning tools with milestone tracking and stakeholder communication",
      features: ["Milestone Tracking", "Stakeholder Mapping", "Communication Plans", "Risk Mitigation"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: "BarChart3",
      title: "Financial Performance Analytics",
      description: "Business intelligence dashboards with customizable KPI monitoring and forecasting",
      features: ["KPI Dashboards", "Predictive Analytics", "Financial Reporting", "Budget Planning"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      icon: "Users",
      title: "Leadership Development Center",
      description: "Executive coaching resources with 360-degree assessments and development plans",
      features: ["Executive Coaching", "360° Assessments", "Leadership Training", "Succession Planning"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      id: 6,
      icon: "TrendingUp",
      title: "Industry Insights Observatory",
      description: "Sector-specific trend analysis with competitive intelligence and market opportunities",
      features: ["Market Analysis", "Competitive Intelligence", "Trend Forecasting", "Industry Reports"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 7,
      icon: "Shield",
      title: "Compliance Management Hub",
      description: "Regulatory guidance with automated tracking systems and audit preparation tools",
      features: ["Regulatory Tracking", "Audit Preparation", "Compliance Monitoring", "Risk Assessment"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 8,
      icon: "Rocket",
      title: "Growth Strategy Laboratory",
      description: "Market expansion planning with demographic analysis and competitive positioning",
      features: ["Market Expansion", "Demographic Analysis", "Competitive Positioning", "Growth Modeling"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Briefcase" size={16} />
            <span>Comprehensive Business Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Strategic Tools & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your business with our comprehensive suite of consulting tools and services designed to drive growth, optimize operations, and ensure sustainable success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-2xl p-8 border border-border hover:shadow-brand-lg transition-brand cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-brand`}>
                  <Icon name={service.icon} size={28} className={service.iconColor} />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  className="opacity-0 group-hover:opacity-100 transition-brand"
                >
                  Explore
                </Button>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Implementation Ready</span>
                  <span className="text-sm font-medium text-accent">Ready</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className={`bg-gradient-to-r ${service.color} rounded-full h-2 w-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Strategic Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;