import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SuccessStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      client: "TechFlow Industries",
      industry: "Manufacturing",
      challenge: "Digital Transformation",
      solution: "Integrated IT infrastructure modernization, marketing automation, and operational consulting",
      results: {
        efficiency: "+65%",
        revenue: "+40%",
        costs: "-30%"
      },
      services: ["IT Services", "Marketing", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      testimonial: "Apex Solutions transformed our entire business ecosystem. Their integrated approach delivered results we never thought possible.",
      author: "Sarah Chen",
      position: "CEO, TechFlow Industries",
      timeline: "6 months",
      investment: "$250K",
      roi: "320%"
    },
    {
      id: 2,
      client: "GreenSpace Retail",
      industry: "Retail",
      challenge: "Market Expansion",
      solution: "E-commerce platform development, omnichannel marketing strategy, and growth consulting",
      results: {
        sales: "+180%",
        reach: "+250%",
        conversion: "+85%"
      },
      services: ["IT Services", "Marketing"],
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800&h=600&fit=crop",
      testimonial: "The synergy between their IT and marketing teams created a seamless customer experience that drove incredible growth.",
      author: "Michael Rodriguez",
      position: "Founder, GreenSpace Retail",
      timeline: "4 months",
      investment: "$180K",
      roi: "280%"
    },
    {
      id: 3,
      client: "HealthFirst Clinics",
      industry: "Healthcare",
      challenge: "Operational Excellence",
      solution: "HIPAA-compliant IT systems, patient engagement marketing, and process optimization consulting",
      results: {
        satisfaction: "+95%",
        efficiency: "+70%",
        compliance: "100%"
      },
      services: ["IT Services", "Marketing", "Business Consulting"],
      image: "https://images.pixabay.com/photo/2017/12/11/15/34/doctor-3012649_1280.jpg?w=800&h=600&fit=crop",
      testimonial: "Their comprehensive approach to healthcare transformation exceeded our expectations in every metric that matters.",
      author: "Dr. Amanda Foster",
      position: "Medical Director, HealthFirst Clinics",
      timeline: "8 months",
      investment: "$320K",
      roi: "450%"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsAutoPlaying(false);
  };

  const goToStory = (index) => {
    setCurrentStory(index);
    setIsAutoPlaying(false);
  };

  const getServiceColor = (service) => {
    const colorMap = {
      "IT Services": "bg-primary text-primary-foreground",
      "Marketing": "bg-secondary text-secondary-foreground",
      "Business Consulting": "bg-accent text-accent-foreground"
    };
    return colorMap[service] || "bg-muted text-muted-foreground";
  };

  const story = successStories[currentStory];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Trophy" size={16} />
              <span>Cross-Functional Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Transformational Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our integrated approach delivers extraordinary outcomes when IT, marketing, and business consulting work together.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl shadow-brand-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <Image
                    src={story.image}
                    alt={`${story.client} success story`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Industry Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-foreground">{story.industry}</span>
                  </div>

                  {/* Services Used */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {story.services.map((service) => (
                      <span
                        key={service}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getServiceColor(service)}`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Client Info */}
                    <div>
                      <h3 className="text-3xl font-headline font-bold text-foreground mb-2">
                        {story.client}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-4">
                        {story.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Solution Delivered:</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {story.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                      {Object.entries(story.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="space-y-4">
                      <p className="text-lg italic text-foreground leading-relaxed">
                        "{story.testimonial}"
                      </p>
                      <footer className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{story.author}</div>
                          <div className="text-sm text-muted-foreground">{story.position}</div>
                        </div>
                      </footer>
                    </blockquote>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      <div className="text-center">
                        <Icon name="Clock" size={20} className="text-muted-foreground mx-auto mb-1" />
                        <div className="text-sm font-semibold text-foreground">{story.timeline}</div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                      </div>
                      <div className="text-center">
                        <Icon name="DollarSign" size={20} className="text-muted-foreground mx-auto mb-1" />
                        <div className="text-sm font-semibold text-foreground">{story.investment}</div>
                        <div className="text-xs text-muted-foreground">Investment</div>
                      </div>
                      <div className="text-center">
                        <Icon name="TrendingUp" size={20} className="text-muted-foreground mx-auto mb-1" />
                        <div className="text-sm font-semibold text-foreground">{story.roi}</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous/Next Buttons */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="w-12 h-12 rounded-full"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="w-12 h-12 rounded-full"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-primary scale-125' :'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-foreground"
              iconName={isAutoPlaying ? "Pause" : "Play"}
              iconPosition="left"
            >
              {isAutoPlaying ? "Pause" : "Play"}
            </Button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-cta font-semibold px-8 py-4"
            iconName="ArrowRight"
            iconPosition="right"
          >
            View All Success Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;