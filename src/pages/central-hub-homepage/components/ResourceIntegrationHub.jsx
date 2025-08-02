import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ResourceIntegrationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: 'Grid3X3' },
    { id: 'guides', label: 'Implementation Guides', icon: 'BookOpen' },
    { id: 'whitepapers', label: 'Research & Insights', icon: 'FileText' },
    { id: 'case-studies', label: 'Success Stories', icon: 'Trophy' },
    { id: 'tools', label: 'Interactive Tools', icon: 'Wrench' },
    { id: 'webinars', label: 'Expert Sessions', icon: 'Video' }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Digital Transformation Playbook",
      description: "Step-by-step guide combining IT infrastructure, marketing automation, and business process optimization for seamless digital transformation.",
      category: "guides",
      domains: ["IT Services", "Marketing", "Business Consulting"],
      type: "PDF Guide",
      readTime: "45 min",
      downloads: 2847,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      featured: true,
      tags: ["Digital Transformation", "Integration", "Strategy"]
    },
    {
      id: 2,
      title: "ROI Calculator: Integrated Marketing Technology",
      description: "Interactive tool to calculate potential returns from combining marketing campaigns with IT infrastructure investments.",
      category: "tools",
      domains: ["Marketing", "IT Services"],
      type: "Interactive Tool",
      readTime: "10 min",
      downloads: 1923,
      rating: 4.8,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop",
      featured: true,
      tags: ["ROI", "Marketing", "Technology"]
    },
    {
      id: 3,
      title: "Cybersecurity Meets Brand Protection",
      description: "Research whitepaper on how IT security measures directly impact brand reputation and marketing effectiveness.",
      category: "whitepapers",
      domains: ["IT Services", "Marketing"],
      type: "Research Paper",
      readTime: "25 min",
      downloads: 1456,
      rating: 4.7,
      image: "https://images.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg?w=400&h=300&fit=crop",
      featured: false,
      tags: ["Cybersecurity", "Brand Protection", "Research"]
    },
    {
      id: 4,
      title: "TechFlow Industries: 340% ROI Case Study",
      description: "Deep dive into how integrated IT, marketing, and consulting services delivered extraordinary results for a manufacturing client.",
      category: "case-studies",
      domains: ["IT Services", "Marketing", "Business Consulting"],
      type: "Case Study",
      readTime: "15 min",
      downloads: 3241,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      featured: true,
      tags: ["Case Study", "Manufacturing", "ROI"]
    },
    {
      id: 5,
      title: "Business Process Optimization Webinar Series",
      description: "Expert-led sessions on streamlining operations through technology integration and strategic marketing alignment.",
      category: "webinars",
      domains: ["Business Consulting", "IT Services"],
      type: "Video Series",
      readTime: "120 min",
      downloads: 892,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      featured: false,
      tags: ["Process Optimization", "Webinar", "Operations"]
    },
    {
      id: 6,
      title: "Marketing Automation Assessment Tool",
      description: "Evaluate your current marketing technology stack and identify integration opportunities with IT infrastructure.",
      category: "tools",
      domains: ["Marketing", "IT Services"],
      type: "Assessment",
      readTime: "20 min",
      downloads: 1678,
      rating: 4.8,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?w=400&h=300&fit=crop",
      featured: false,
      tags: ["Marketing Automation", "Assessment", "Integration"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getDomainColor = (domain) => {
    const colorMap = {
      "IT Services": "bg-primary/10 text-primary border-primary/20",
      "Marketing": "bg-secondary/10 text-secondary border-secondary/20",
      "Business Consulting": "bg-accent/10 text-accent border-accent/20"
    };
    return colorMap[domain] || "bg-muted text-muted-foreground";
  };

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
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="BookOpen" size={16} />
              <span>Resource Intelligence Center</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Knowledge That{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Transforms
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of integrated insights, tools, and strategies that demonstrate how our services work together for maximum impact.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'bg-background text-muted-foreground hover:text-foreground hover:bg-card border border-border'
                  }`}
                >
                  <Icon name={category.icon} size={16} />
                  <span className="text-sm">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-8">Featured Resources</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredResources.slice(0, 2).map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-2xl shadow-brand-lg overflow-hidden group hover:shadow-brand-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-cta text-cta-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {resource.domains.map((domain) => (
                          <span
                            key={domain}
                            className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-foreground"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium">{resource.type}</span>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{resource.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" size={14} />
                          <span>{resource.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl font-headline font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-foreground">{resource.rating}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        Access Resource
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Resources Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.label}
            </h3>
            <div className="text-sm text-muted-foreground">
              {filteredResources.length} resources found
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-40">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {resource.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-cta text-cta-foreground px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{resource.type}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-foreground">{resource.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-headline font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.domains.map((domain) => (
                      <span
                        key={domain}
                        className={`px-2 py-1 rounded text-xs font-medium border ${getDomainColor(domain)}`}
                      >
                        {domain}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{resource.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    fullWidth
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Access Resource
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <Icon name="Lightbulb" size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-headline font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Explore our complete Resource Intelligence Center for deeper insights and comprehensive guides on integrated business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resource-intelligence-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Visit Resource Center
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceIntegrationHub;