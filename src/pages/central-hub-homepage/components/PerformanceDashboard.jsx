import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const PerformanceDashboard = () => {
  const [activeMetric, setActiveMetric] = useState('overview');
  const [animatedValues, setAnimatedValues] = useState({});

  // Mock real-time data
  const performanceData = {
    overview: {
      totalProjects: 847,
      activeClients: 156,
      avgSatisfaction: 4.9,
      totalROI: 340
    },
    monthly: [
      { month: 'Jan', projects: 45, satisfaction: 4.8, roi: 320 },
      { month: 'Feb', projects: 52, satisfaction: 4.7, roi: 335 },
      { month: 'Mar', projects: 48, satisfaction: 4.9, roi: 350 },
      { month: 'Apr', projects: 61, satisfaction: 4.8, roi: 340 },
      { month: 'May', projects: 58, satisfaction: 4.9, roi: 365 },
      { month: 'Jun', projects: 67, satisfaction: 5.0, roi: 380 }
    ],
    services: [
      { name: 'IT Services', value: 45, color: '#1E3A8A' },
      { name: 'Marketing', value: 35, color: '#0891B2' },
      { name: 'Business Consulting', value: 20, color: '#059669' }
    ],
    regions: [
      { region: 'North America', clients: 89, growth: '+15%' },
      { region: 'Europe', clients: 34, growth: '+22%' },
      { region: 'Asia Pacific', clients: 23, growth: '+18%' },
      { region: 'Latin America', clients: 10, growth: '+35%' }
    ]
  };

  const metrics = [
    {
      id: 'overview',
      title: 'Overview',
      icon: 'BarChart3',
      description: 'Key performance indicators across all domains'
    },
    {
      id: 'growth',
      title: 'Growth Trends',
      icon: 'TrendingUp',
      description: 'Monthly performance and satisfaction trends'
    },
    {
      id: 'distribution',
      title: 'Service Mix',
      icon: 'PieChart',
      description: 'Distribution of projects across service domains'
    },
    {
      id: 'global',
      title: 'Global Reach',
      icon: 'Globe',
      description: 'Client distribution and regional growth'
    }
  ];

  // Animate numbers on mount
  useEffect(() => {
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        setAnimatedValues(prev => ({ ...prev, [key]: current }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Animate key metrics
    animateValue(0, performanceData.overview.totalProjects, 2000, 'totalProjects');
    animateValue(0, performanceData.overview.activeClients, 1500, 'activeClients');
    animateValue(0, performanceData.overview.avgSatisfaction * 10, 1800, 'avgSatisfaction');
    animateValue(0, performanceData.overview.totalROI, 2200, 'totalROI');
  }, []);

  const formatValue = (key, value) => {
    switch (key) {
      case 'avgSatisfaction':
        return (value / 10).toFixed(1);
      case 'totalROI':
        return `${value}%`;
      default:
        return value?.toLocaleString() || 0;
    }
  };

  const renderContent = () => {
    switch (activeMetric) {
      case 'overview':
        return (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'totalProjects', label: 'Total Projects', icon: 'Briefcase', color: 'primary' },
              { key: 'activeClients', label: 'Active Clients', icon: 'Users', color: 'secondary' },
              { key: 'avgSatisfaction', label: 'Avg Satisfaction', icon: 'Star', color: 'accent' },
              { key: 'totalROI', label: 'Average ROI', icon: 'TrendingUp', color: 'cta' }
            ].map((metric) => (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-brand"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  metric.color === 'primary' ? 'bg-primary' :
                  metric.color === 'secondary' ? 'bg-secondary' :
                  metric.color === 'accent' ? 'bg-accent' : 'bg-cta'
                }`}>
                  <Icon name={metric.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {formatValue(metric.key, animatedValues[metric.key])}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        );

      case 'growth':
        return (
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-brand">
              <h4 className="text-lg font-semibold text-foreground mb-4">Monthly Project Completion</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData.monthly}>
                    <CartesianGrid strokeDasharray="3,3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Bar dataKey="projects" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-brand">
              <h4 className="text-lg font-semibold text-foreground mb-4">Client Satisfaction Trend</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData.monthly}>
                    <CartesianGrid strokeDasharray="3,3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#64748B" />
                    <YAxis domain={[4.5, 5.0]} stroke="#64748B" />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#059669" 
                      strokeWidth={3}
                      dot={{ fill: '#059669', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'distribution':
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-brand">
              <h4 className="text-lg font-semibold text-foreground mb-4">Service Distribution</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={performanceData.services}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {performanceData.services.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-brand">
              <h4 className="text-lg font-semibold text-foreground mb-4">Service Breakdown</h4>
              <div className="space-y-4">
                {performanceData.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: service.color }}
                      ></div>
                      <span className="text-foreground font-medium">{service.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">{service.value}%</div>
                      <div className="text-sm text-muted-foreground">of projects</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'global':
        return (
          <div className="bg-card rounded-xl p-6 shadow-brand">
            <h4 className="text-lg font-semibold text-foreground mb-6">Global Client Distribution</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {performanceData.regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div>
                    <div className="font-semibold text-foreground">{region.region}</div>
                    <div className="text-sm text-muted-foreground">{region.clients} active clients</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">{region.growth}</div>
                    <div className="text-sm text-muted-foreground">growth</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Activity" size={16} />
              <span>Real-Time Performance Dashboard</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Measurable Impact Across All Domains
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track our collective performance and see how integrated expertise delivers extraordinary results for our clients.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Container */}
        <div className="bg-background rounded-3xl shadow-brand-lg overflow-hidden">
          {/* Navigation Tabs */}
          <div className="border-b border-border">
            <div className="flex overflow-x-auto">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  className={`flex items-center space-x-3 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                    activeMetric === metric.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={metric.icon} size={18} />
                  <div className="text-left">
                    <div className="font-semibold">{metric.title}</div>
                    <div className="text-xs opacity-75">{metric.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>

        {/* Live Updates Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center mt-8 space-x-2 text-muted-foreground"
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm">Live data • Updated every 5 minutes</span>
          <div className="text-xs bg-muted px-2 py-1 rounded">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;