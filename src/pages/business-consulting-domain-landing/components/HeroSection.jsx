import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <span className="text-white/80 font-medium">Business Consulting Excellence</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
              Transform Your
              <span className="block text-accent">Business Strategy</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Unlock your organization's potential with data-driven insights, strategic planning tools, and expert guidance that drives measurable growth and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold"
                iconName="Calculator"
                iconPosition="left"
              >
                Start Strategy Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Play"
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">250+</div>
                <div className="text-white/70 text-sm">Strategic Plans</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">$2.5M</div>
                <div className="text-white/70 text-sm">Avg ROI Increase</div>
              </div>
            </div>
          </div>

          {/* Interactive Dashboard Preview */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">Strategic Planning Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Revenue Growth</span>
                      <Icon name="TrendingUp" size={16} className="text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-white">+24.5%</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Efficiency Score</span>
                      <Icon name="Target" size={16} className="text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-white">87/100</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/80 text-sm">Strategic Initiatives</span>
                    <span className="text-accent text-sm">6 Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">Digital Transformation</span>
                      <div className="w-20 bg-white/20 rounded-full h-2">
                        <div className="w-3/4 bg-accent rounded-full h-2"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">Market Expansion</span>
                      <div className="w-20 bg-white/20 rounded-full h-2">
                        <div className="w-1/2 bg-accent rounded-full h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon name="BarChart3" size={20} className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;