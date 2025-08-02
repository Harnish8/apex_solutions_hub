import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipEcosystem = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Chief Executive Officer",
      expertise: ["Strategic Vision", "Digital Transformation", "Global Operations"],
      domains: ["IT Services", "Marketing", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "With 15+ years leading digital transformations, Sarah bridges technology innovation with business strategy to deliver integrated solutions that drive exponential growth.",
      achievements: [
        "Led 200+ digital transformation projects",
        "Scaled operations across 4 continents",
        "Pioneered integrated service methodology"
      ],
      contact: {
        linkedin: "sarah-chen-ceo",
        email: "sarah.chen@apexsolutions.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Chief Technology Officer",
      expertise: ["Cloud Architecture", "Cybersecurity", "AI/ML Integration"],
      domains: ["IT Services", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Marcus combines deep technical expertise with business acumen, ensuring our IT solutions not only solve today's challenges but enable tomorrow's opportunities.",
      achievements: [
        "Architected 99.9% uptime infrastructure",
        "Implemented zero-breach security protocols",
        "Reduced client IT costs by average 40%"
      ],
      contact: {
        linkedin: "marcus-rodriguez-cto",
        email: "marcus.rodriguez@apexsolutions.com"
      }
    },
    {
      id: 3,
      name: "Emily Foster",
      position: "Chief Marketing Officer",
      expertise: ["Brand Strategy", "Digital Marketing", "Customer Experience"],
      domains: ["Marketing", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Emily transforms brands through data-driven strategies that connect technology capabilities with market opportunities, creating campaigns that drive measurable business growth.",
      achievements: [
        "Generated 340% average ROI for clients",
        "Built brands reaching 50M+ audiences",
        "Integrated marketing-tech solutions"
      ],
      contact: {
        linkedin: "emily-foster-cmo",
        email: "emily.foster@apexsolutions.com"
      }
    },
    {
      id: 4,
      name: "David Kim",
      position: "Chief Strategy Officer",
      expertise: ["Business Strategy", "Process Optimization", "Change Management"],
      domains: ["Business Consulting", "IT Services"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "David specializes in transforming complex business challenges into streamlined operations, ensuring every strategic initiative is supported by the right technology and marketing approach.",
      achievements: [
        "Optimized operations for 100+ companies",
        "Achieved 60% average efficiency gains",
        "Led successful change management initiatives"
      ],
      contact: {
        linkedin: "david-kim-cso",
        email: "david.kim@apexsolutions.com"
      }
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Chief Innovation Officer",
      expertise: ["Emerging Technologies", "Innovation Strategy", "R&D Leadership"],
      domains: ["IT Services", "Marketing", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Lisa drives innovation across all service domains, identifying emerging technologies and methodologies that keep our clients ahead of industry trends and competitive pressures.",
      achievements: [
        "Launched 15+ innovative service offerings",
        "Patents in AI-driven business solutions",
        "Recognized innovation thought leader"
      ],
      contact: {
        linkedin: "lisa-thompson-cio",
        email: "lisa.thompson@apexsolutions.com"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Chief Client Officer",
      expertise: ["Client Relations", "Account Strategy", "Success Management"],
      domains: ["Business Consulting", "Marketing"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "James ensures every client relationship delivers exceptional value by coordinating cross-functional expertise and maintaining the highest standards of service excellence.",
      achievements: [
        "Maintained 98% client satisfaction rate",
        "Expanded 85% of client relationships",
        "Built long-term strategic partnerships"
      ],
      contact: {
        linkedin: "james-wilson-cco",
        email: "james.wilson@apexsolutions.com"
      }
    }
  ];

  const getDomainColor = (domain) => {
    const colorMap = {
      "IT Services": "bg-primary text-primary-foreground",
      "Marketing": "bg-secondary text-secondary-foreground",
      "Business Consulting": "bg-accent text-accent-foreground"
    };
    return colorMap[domain] || "bg-muted text-muted-foreground";
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
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Users" size={16} />
              <span>Leadership Ecosystem</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Cross-Functional{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our leadership team—each executive brings deep domain expertise while understanding how all services interconnect for maximum client value.
            </p>
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedLeader(leader)}
              className="bg-card rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="ArrowUpRight" size={16} className="text-white" />
                </div>
              </div>

              {/* Leader Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {leader.position}
                  </p>
                </div>

                {/* Domain Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {leader.domains.map((domain) => (
                    <span
                      key={domain}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getDomainColor(domain)}`}
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-1">
                    {leader.expertise.slice(0, 2).map((skill) => (
                      <span key={skill} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {leader.expertise.length > 2 && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        +{leader.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cross-Functional Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-muted to-card rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-headline font-bold text-foreground mb-4">
              Collaborative Leadership Model
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leaders don't work in silos. Every strategic decision involves cross-functional input to ensure integrated solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Cross-Domain Strategy",
                description: "All department heads meet weekly to align initiatives and identify integration opportunities.",
                icon: "Calendar",
                color: "primary"
              },
              {
                title: "Shared Client Success Metrics",
                description: "Leadership compensation tied to overall client satisfaction, not individual department performance.",
                icon: "Target",
                color: "secondary"
              },
              {
                title: "Innovation Collaboration",
                description: "New service offerings developed through cross-functional teams combining all expertise areas.",
                icon: "Lightbulb",
                color: "accent"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  feature.color === 'primary' ? 'bg-primary' :
                  feature.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                }`}>
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leader Detail Modal */}
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-foreground">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-primary font-medium">{selectedLeader.position}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon name="X" size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedLeader.bio}</p>
                </div>

                {/* Domains */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Service Domains</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.domains.map((domain) => (
                      <span
                        key={domain}
                        className={`px-3 py-2 rounded-lg text-sm font-medium ${getDomainColor(domain)}`}
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedLeader.expertise.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {selectedLeader.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Award" size={16} className="text-primary mt-1" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex space-x-4 pt-4 border-t border-border">
                  <a
                    href={`mailto:${selectedLeader.contact.email}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Icon name="Mail" size={16} />
                    <span>Email</span>
                  </a>
                  <a
                    href={`https://linkedin.com/in/${selectedLeader.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    <Icon name="Linkedin" size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LeadershipEcosystem;