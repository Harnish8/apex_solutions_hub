import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const consultationTypes = [
    {
      id: 1,
      title: "Strategic Assessment",
      duration: "90 minutes",
      description: "Comprehensive business health evaluation with strategic recommendations",
      features: [
        "Current state analysis",
        "Growth opportunity identification",
        "Strategic roadmap outline",
        "ROI projections"
      ],
      icon: "Target",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Operational Review",
      duration: "60 minutes",
      description: "Process optimization assessment with efficiency improvement recommendations",
      features: [
        "Process mapping",
        "Efficiency analysis",
        "Cost reduction opportunities",
        "Implementation timeline"
      ],
      icon: "Settings",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Growth Planning",
      duration: "75 minutes",
      description: "Market expansion strategy with competitive analysis and growth projections",
      features: [
        "Market opportunity analysis",
        "Competitive positioning",
        "Growth strategy framework",
        "Resource requirements"
      ],
      icon: "TrendingUp",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const contactMethods = [
    {
      icon: "Phone",
      title: "Schedule a Call",
      description: "Speak directly with our strategy experts",
      action: "Call Now",
      info: "+1 (555) 123-4567"
    },
    {
      icon: "Mail",
      title: "Email Consultation",
      description: "Get detailed responses to your questions",
      action: "Send Email",
      info: "strategy@apexsolutions.com"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Instant support from our consulting team",
      action: "Start Chat",
      info: "Available 24/7"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} />
            <span>Ready to Transform?</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-headline font-bold mb-6">
            Start Your Strategic
            <span className="block text-accent">Transformation Today</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Choose your consultation type and connect with our expert strategists to unlock your organization's full potential with data-driven insights and proven methodologies.
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {consultationTypes.map((consultation) => (
            <div
              key={consultation.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-brand group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${consultation.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-brand`}>
                  <Icon name={consultation.icon} size={28} className="text-white" />
                </div>
                <span className="text-accent font-semibold text-sm bg-accent/20 px-3 py-1 rounded-full">
                  {consultation.duration}
                </span>
              </div>

              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                {consultation.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {consultation.description}
              </p>

              <ul className="space-y-3 mb-8">
                {consultation.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="default"
                fullWidth
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Book {consultation.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-headline font-bold text-white text-center mb-8">
            Multiple Ways to Connect
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-brand">
                  <Icon name={method.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{method.title}</h4>
                <p className="text-white/80 mb-4">{method.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {method.action}
                </Button>
                <p className="text-accent text-sm mt-2 font-medium">{method.info}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency & Value Proposition */}
        <div className="text-center text-white">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">48 Hours</div>
                <div className="text-white/80">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <div className="text-white/80">Initial Consultation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-white/80">Satisfaction Guarantee</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="text-2xl font-bold mb-4">Why Choose Apex Solutions?</h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Proven Track Record</div>
                    <div className="text-white/80 text-sm">500+ successful transformations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Expert Team</div>
                    <div className="text-white/80 text-sm">Industry-leading consultants</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Integrated Approach</div>
                    <div className="text-white/80 text-sm">Business, IT, and marketing alignment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1" />
                  <div>
                    <div className="font-semibold">Measurable Results</div>
                    <div className="text-white/80 text-sm">Average 300%+ ROI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <Button
                variant="default"
                size="xl"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-bold text-lg px-12"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started Now - Free Consultation
              </Button>
              <p className="text-white/70 text-sm mt-4">
                No commitment required • Expert guidance included • Results guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;