import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const animationStates = [
    { title: "IT Infrastructure", color: "text-primary", icon: "Server" },
    { title: "Marketing Excellence", color: "text-secondary", icon: "TrendingUp" },
    { title: "Business Strategy", color: "text-accent", icon: "Users" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animationStates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Integrated Solutions Ecosystem</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
                Where Expertise{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Converges
                </span>{' '}
                for Extraordinary Results
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your business with our integrated approach combining cutting-edge IT infrastructure, 
                strategic marketing excellence, and comprehensive business consulting—all working in perfect harmony.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Discover Your Solution
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4"
                iconName="Play"
                iconPosition="left"
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </motion.div>
          </div>

          {/* Right Animation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-96 lg:h-[500px]"
            >
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-brand-lg z-10">
                <Icon name="Zap" size={32} className="text-white" />
              </div>

              {/* Orbiting Services */}
              {animationStates.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-brand ${
                    index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                  }`}
                  animate={{
                    rotate: currentAnimation * 120 + index * 120,
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${currentAnimation * 120 + index * 120}deg) translateY(-120px) rotate(-${currentAnimation * 120 + index * 120}deg)`,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Icon name={service.icon} size={24} className="text-white" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="var(--color-secondary)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Service Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className={`text-lg font-semibold transition-colors duration-500 ${animationStates[currentAnimation].color}`}>
                {animationStates[currentAnimation].title}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Powering Your Success
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Explore Solutions</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;