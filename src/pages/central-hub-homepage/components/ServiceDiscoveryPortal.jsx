import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceDiscoveryPortal = () => {
  const [selectedNeed, setSelectedNeed] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);

  const businessNeeds = [
    { id: 'growth', label: 'Scale My Business', icon: 'TrendingUp' },
    { id: 'efficiency', label: 'Improve Operations', icon: 'Zap' },
    { id: 'digital', label: 'Digital Transformation', icon: 'Smartphone' },
    { id: 'security', label: 'Enhance Security', icon: 'Shield' },
    { id: 'marketing', label: 'Boost Marketing ROI', icon: 'Target' },
    { id: 'innovation', label: 'Drive Innovation', icon: 'Lightbulb' }
  ];

  const services = [
    {
      id: 'it',
      title: 'IT Services',
      subtitle: 'Technology Infrastructure',
      description: 'Cutting-edge IT solutions that power your business forward with security, scalability, and innovation.',
      icon: 'Server',
      color: 'primary',
      route: '/it-services-domain-landing',
      capabilities: ['Cloud Migration', 'Cybersecurity', '24/7 Support', 'Infrastructure'],
      metrics: { projects: '200+', uptime: '99.9%', response: '<15min' }
    },
    {
      id: 'marketing',
      title: 'Marketing',
      subtitle: 'Growth & Brand Excellence',
      description: 'Strategic marketing solutions that amplify your brand and drive measurable business growth.',
      icon: 'TrendingUp',
      color: 'secondary',
      route: '/marketing-domain-landing',
      capabilities: ['Digital Campaigns', 'Brand Strategy', 'Content Creation', 'Analytics'],
      metrics: { campaigns: '150+', roi: '340%', reach: '2M+' }
    },
    {
      id: 'business',
      title: 'Business Consulting',
      subtitle: 'Strategic Transformation',
      description: 'Comprehensive business consulting that transforms challenges into competitive advantages.',
      icon: 'Users',
      color: 'accent',
      route: '/business-consulting-domain-landing',
      capabilities: ['Strategy Planning', 'Process Optimization', 'Change Management', 'Analytics'],
      metrics: { clients: '100+', growth: '45%', efficiency: '60%' }
    }
  ];

  const getRecommendations = (needId) => {
    const recommendationMap = {
      'growth': ['marketing', 'business', 'it'],
      'efficiency': ['business', 'it', 'marketing'],
      'digital': ['it', 'marketing', 'business'],
      'security': ['it', 'business', 'marketing'],
      'marketing': ['marketing', 'it', 'business'],
      'innovation': ['it', 'marketing', 'business']
    };
    return recommendationMap[needId] || [];
  };

  useEffect(() => {
    if (selectedNeed) {
      const recs = getRecommendations(selectedNeed);
      setRecommendations(recs);
    }
  }, [selectedNeed]);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        hover: 'hover:bg-primary/10'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        hover: 'hover:bg-secondary/10'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        hover: 'hover:bg-accent/10'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Compass" size={16} />
              <span>Intelligent Service Discovery</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us what you need, and our intelligent portal will recommend the ideal combination of services for your success.
            </p>
          </motion.div>
        </div>

        {/* Business Needs Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-headline font-semibold text-foreground mb-6 text-center">
            What's your primary business goal?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessNeeds.map((need) => (
              <button
                key={need.id}
                onClick={() => setSelectedNeed(need.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                  selectedNeed === need.id
                    ? 'border-primary bg-primary/10 text-primary' :'border-border bg-card hover:border-primary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={need.icon} size={24} className="mx-auto mb-2" />
                <div className="text-sm font-medium">{need.label}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const isRecommended = recommendations.includes(service.id);
            const priority = recommendations.indexOf(service.id) + 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative bg-card border-2 rounded-2xl p-8 transition-all duration-500 ${
                  isRecommended 
                    ? `${colors.border} shadow-brand-lg transform scale-105` 
                    : 'border-border hover:border-primary/30 hover:shadow-brand'
                }`}
              >
                {/* Recommendation Badge */}
                {isRecommended && (
                  <div className={`absolute -top-3 -right-3 ${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    #{priority} Recommended
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>

                {/* Service Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-medium ${colors.text} mb-3`}>
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Capabilities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.capabilities.map((capability) => (
                        <div key={capability} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className={colors.text} />
                          <span className="text-sm text-muted-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={service.route}>
                    <Button
                      variant={isRecommended ? "default" : "outline"}
                      fullWidth
                      className={isRecommended ? `${colors.bg} hover:${colors.bg}/90 text-white` : ''}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      {isRecommended ? 'Start Here' : 'Learn More'}
                    </Button>
                  </Link>
                </div>

                {/* Hover Animation */}
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`absolute inset-0 ${colors.bg}/5 rounded-2xl pointer-events-none`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Integration Message */}
        {selectedNeed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center bg-muted rounded-2xl p-8"
          >
            <Icon name="Zap" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Integrated Solutions Work Better
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our services are designed to work together seamlessly. Combining multiple domains creates exponential value for your business.
            </p>
            <Link to="/integrated-solutions-showcase">
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="ArrowRight"
                iconPosition="right"
              >
                See Integration Examples
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceDiscoveryPortal;