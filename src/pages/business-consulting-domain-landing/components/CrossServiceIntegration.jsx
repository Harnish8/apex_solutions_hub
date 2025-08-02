import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CrossServiceIntegration = () => {
  const integrationFlows = [
    {
      id: 1,
      title: "Business Strategy → IT Infrastructure",
      description: "Strategic business goals drive technology requirements and digital transformation initiatives",
      steps: [
        { icon: "Target", label: "Strategic Planning", color: "text-blue-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "Server", label: "IT Architecture", color: "text-emerald-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "Zap", label: "Implementation", color: "text-purple-600" }
      ],
      metrics: {
        efficiency: "+35%",
        cost: "-28%",
        timeline: "6 months"
      }
    },
    {
      id: 2,
      title: "Business Intelligence → Marketing Strategy",
      description: "Data-driven insights inform targeted marketing campaigns and customer acquisition strategies",
      steps: [
        { icon: "BarChart3", label: "Business Analytics", color: "text-blue-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "TrendingUp", label: "Marketing Strategy", color: "text-orange-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "Users", label: "Customer Growth", color: "text-emerald-600" }
      ],
      metrics: {
        conversion: "+42%",
        acquisition: "-22%",
        retention: "+38%"
      }
    },
    {
      id: 3,
      title: "Operational Excellence → Digital Marketing",
      description: "Streamlined operations enable scalable marketing automation and customer experience optimization",
      steps: [
        { icon: "Settings", label: "Process Optimization", color: "text-blue-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "Smartphone", label: "Marketing Tech", color: "text-orange-600" },
        { icon: "ArrowRight", label: "", color: "text-muted-foreground" },
        { icon: "Heart", label: "Customer Experience", color: "text-pink-600" }
      ],
      metrics: {
        automation: "+65%",
        satisfaction: "+29%",
        efficiency: "+41%"
      }
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Industries",
      industry: "Manufacturing",
      challenge: "Fragmented systems hindering growth and operational efficiency",
      solution: "Integrated business strategy, IT modernization, and marketing automation",
      results: [
        { metric: "Revenue Growth", value: "+156%", period: "18 months" },
        { metric: "Operational Efficiency", value: "+89%", period: "12 months" },
        { metric: "Market Share", value: "+34%", period: "24 months" }
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      company: "Global Retail Solutions",
      industry: "E-commerce",
      challenge: "Disconnected customer data and inconsistent brand experience",
      solution: "Customer data platform, omnichannel strategy, and performance analytics",
      results: [
        { metric: "Customer Retention", value: "+73%", period: "12 months" },
        { metric: "Cross-sell Revenue", value: "+124%", period: "18 months" },
        { metric: "Brand Consistency", value: "+91%", period: "6 months" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="GitBranch" size={16} />
            <span>Cross-Service Integration</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Holistic Business
            <span className="block text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our integrated approach connects business strategy, IT infrastructure, and marketing initiatives to deliver transformational results that exceed individual service capabilities.
          </p>
        </div>

        {/* Integration Flows */}
        <div className="space-y-12 mb-20">
          {integrationFlows.map((flow) => (
            <div key={flow.id} className="bg-card rounded-2xl border border-border p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Flow Description */}
                <div>
                  <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                    {flow.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {flow.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(flow.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-accent">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow Visualization */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between bg-muted/50 rounded-xl p-6">
                    {flow.steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {step.label ? (
                          <>
                            <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center border border-border mb-3">
                              <Icon name={step.icon} size={20} className={step.color} />
                            </div>
                            <span className="text-sm font-medium text-center max-w-20">
                              {step.label}
                            </span>
                          </>
                        ) : (
                          <Icon name={step.icon} size={24} className={step.color} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-headline font-bold text-foreground text-center mb-12">
            Transformation Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-brand-lg transition-brand">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-brand"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-80">{study.industry}</div>
                    <div className="text-xl font-bold">{study.company}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Results</h4>
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground">{result.metric}</span>
                        <div className="text-right">
                          <div className="font-bold text-accent">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.period}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-headline font-bold mb-4">
            Ready for Integrated Transformation?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our cross-service approach can unlock unprecedented growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Integration Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              iconName="FileText"
              iconPosition="left"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossServiceIntegration;