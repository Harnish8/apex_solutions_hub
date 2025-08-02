import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UnifiedBrandStory = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const brandStory = {
    mission: {
      title: "Our Mission",
      icon: "Target",
      content: `We exist to transform businesses through the convergence of expertise. In an interconnected world, 
                success requires more than isolated solutions—it demands integrated excellence across technology, 
                marketing, and strategy.`,
      highlights: [
        "Integrated expertise across all business functions",
        "Transformational outcomes through collaboration",
        "Strategic partnerships that drive growth",
        "Innovation at the intersection of disciplines"
      ]
    },
    approach: {
      title: "Our Approach",
      icon: "Zap",
      content: `The 'Swiss Army knife' of professional services—versatile yet specialized, comprehensive yet focused. 
                We don't just deliver services; we create ecosystems where IT infrastructure enables marketing excellence, 
                marketing insights drive business strategy, and business goals shape technology decisions.`,
      highlights: [
        "Cross-functional collaboration from day one",
        "Holistic solutions that amplify each other",
        "Data-driven insights across all domains",
        "Scalable frameworks for sustainable growth"
      ]
    },
    values: {
      title: "Our Values",
      icon: "Heart",
      content: `Empowerment through expertise defines everything we do. Our clients don't just hire services—they gain 
                strategic allies who understand that every decision impacts the entire business ecosystem.`,
      highlights: [
        "Expertise backed by proven methodologies",
        "Partnership over vendor relationships",
        "Innovation balanced with reliability",
        "Transparency in all our interactions"
      ]
    }
  };

  const amplificationExamples = [
    {
      primary: "IT Infrastructure",
      secondary: "Marketing Reach",
      description: "Robust cloud architecture enables global marketing campaigns with 99.9% uptime",
      icon: "Server",
      color: "primary"
    },
    {
      primary: "Marketing Insights",
      secondary: "Business Strategy",
      description: "Customer data analytics inform product development and market expansion decisions",
      icon: "TrendingUp",
      color: "secondary"
    },
    {
      primary: "Business Process",
      secondary: "Technology Solutions",
      description: "Operational requirements drive custom software development and automation",
      icon: "Users",
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "text-primary bg-primary/10 border-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20",
      accent: "text-accent bg-accent/10 border-accent/20"
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
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Compass" size={16} />
              <span>The Apex Solutions Story</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Where Expertise{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Amplifies
              </span>{' '}
              Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our integrated approach creates exponential value by making each service domain stronger through collaboration.
            </p>
          </motion.div>
        </div>

        {/* Brand Story Tabs */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted p-1 rounded-xl">
              {Object.entries(brandStory).map(([key, story]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={story.icon} size={18} />
                  <span>{story.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={brandStory[activeTab].icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                  {brandStory[activeTab].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {brandStory[activeTab].content}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {brandStory[activeTab].highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Amplification */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline font-bold text-foreground mb-4">
              How Each Service Amplifies the Others
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach creates synergies that multiply the value of each individual service.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {amplificationExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-6 rounded-2xl border-2 ${getColorClasses(example.color)}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    example.color === 'primary' ? 'bg-primary' :
                    example.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                  }`}>
                    <Icon name={example.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {example.primary}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Plus" size={16} className="text-muted-foreground" />
                  </div>
                  <h5 className="text-md font-medium text-muted-foreground">
                    {example.secondary}
                  </h5>
                </div>
                <p className="text-sm text-foreground text-center leading-relaxed">
                  {example.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Swiss Army Knife Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-muted to-card rounded-3xl p-8 lg:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-headline font-bold text-foreground mb-4">
                The Swiss Army Knife of Professional Services
              </h3>
              <p className="text-lg text-muted-foreground">
                Versatile yet specialized, comprehensive yet focused—every tool working in perfect harmony.
              </p>
            </div>

            {/* Visual Representation */}
            <div className="relative mb-8">
              <div className="flex justify-center items-center space-x-8">
                {/* IT Services */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <Icon name="Server" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">IT Services</span>
                </div>

                {/* Connection Lines */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  <Icon name="Zap" size={20} className="text-accent" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                </div>

                {/* Marketing */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Marketing</span>
                </div>

                {/* Connection Lines */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                  <Icon name="Zap" size={20} className="text-primary" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                </div>

                {/* Business Consulting */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Business</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-foreground font-medium">
                "Your strategic advantage in an integrated world"
              </p>
              <p className="text-muted-foreground">
                Every tool sharpens the others. Every solution strengthens the whole.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Experience the Integration
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnifiedBrandStory;