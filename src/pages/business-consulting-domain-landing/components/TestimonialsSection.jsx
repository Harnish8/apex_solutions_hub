import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CEO",
      company: "InnovateTech Solutions",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: `The strategic planning simulator completely transformed how we approach business decisions. The financial modeling capabilities helped us identify a 40% revenue opportunity we would have missed otherwise. Their integrated approach connecting our IT infrastructure needs with business strategy was game-changing.`,
      metrics: [
        { label: "Revenue Growth", value: "+40%" },
        { label: "Decision Speed", value: "+65%" },
        { label: "Strategic Clarity", value: "+85%" }
      ],
      services: ["Strategic Planning", "Financial Analytics", "IT Integration"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "COO",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: `The operational excellence assessment revealed inefficiencies costing us millions annually. Their change management roadmap guided us through a complex transformation, and the compliance management tools ensured we stayed audit-ready throughout the process. Exceptional expertise and execution.`,
      metrics: [
        { label: "Cost Reduction", value: "-32%" },
        { label: "Efficiency Gain", value: "+58%" },
        { label: "Compliance Score", value: "98%" }
      ],
      services: ["Operations Assessment", "Change Management", "Compliance"]
    },
    {
      id: 3,
      name: "Jennifer Park",
      title: "Chief Strategy Officer",
      company: "RetailMax Enterprises",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: `The growth strategy laboratory provided insights that reshaped our entire market approach. The demographic analysis and competitive positioning tools identified untapped segments worth $50M+ in potential revenue. Their leadership development program elevated our entire executive team.`,
      metrics: [
        { label: "Market Expansion", value: "+150%" },
        { label: "New Segments", value: "5 Markets" },
        { label: "Leadership ROI", value: "+220%" }
      ],
      services: ["Growth Strategy", "Market Analysis", "Leadership Development"]
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CFO",
      company: "FinanceFirst Group",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: `The financial performance analytics dashboard became our command center for strategic decisions. Real-time KPI monitoring and predictive forecasting capabilities helped us navigate market volatility with confidence. The industry insights observatory kept us ahead of regulatory changes.`,
      metrics: [
        { label: "Forecast Accuracy", value: "+92%" },
        { label: "Risk Mitigation", value: "+78%" },
        { label: "Regulatory Compliance", value: "100%" }
      ],
      services: ["Financial Analytics", "Risk Management", "Industry Insights"]
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=TechCorp" },
    { name: "GlobalManuf", logo: "https://via.placeholder.com/120x60/059669/FFFFFF?text=GlobalManuf" },
    { name: "RetailMax", logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=RetailMax" },
    { name: "FinanceFirst", logo: "https://via.placeholder.com/120x60/0891B2/FFFFFF?text=FinanceFirst" },
    { name: "InnovateTech", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=InnovateTech" },
    { name: "HealthPlus", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=HealthPlus" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Trusted by Industry
            <span className="block text-primary">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how leading organizations have transformed their business operations and achieved exceptional results with our strategic consulting services.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-card rounded-2xl border border-border shadow-brand-lg overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Testimonial Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h3>
                  <p className="text-muted-foreground">{currentTestimonial.title}</p>
                  <p className="text-primary font-medium">{currentTestimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-4 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
                <span className="text-muted-foreground text-sm ml-2">{currentTestimonial.industry}</span>
              </div>

              {/* Services Used */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Services Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {currentTestimonial.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-brand ${
                        index === activeTestimonial ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    iconName="ChevronLeft"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    iconName="ChevronRight"
                  />
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 text-white">
              <h4 className="text-2xl font-bold mb-8">Measurable Results</h4>
              <div className="space-y-6">
                {currentTestimonial.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/90">{metric.label}</span>
                    <span className="text-3xl font-bold text-accent">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="text-white/80 text-sm mb-2">Project Timeline</div>
                <div className="text-2xl font-bold">12 months</div>
                <div className="text-white/80 text-sm mt-4">Investment ROI</div>
                <div className="text-2xl font-bold text-accent">485%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8">
            Trusted by 500+ Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 opacity-60 hover:opacity-100 transition-brand grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-headline font-bold text-foreground mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your business with strategic consulting that delivers measurable results?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Your Success Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;