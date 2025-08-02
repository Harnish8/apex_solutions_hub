import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [metrics, setMetrics] = useState({
    uptime: 99.97,
    responseTime: 142,
    threatsBlocked: 1247,
    systemsMonitored: 847
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time metric updates
      setMetrics(prev => ({
        uptime: Math.max(99.90, prev.uptime + (Math.random() - 0.5) * 0.01),
        responseTime: Math.max(100, prev.responseTime + (Math.random() - 0.5) * 10),
        threatsBlocked: prev.threatsBlocked + Math.floor(Math.random() * 3),
        systemsMonitored: prev.systemsMonitored + Math.floor(Math.random() * 2)
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const securityAlerts = [
    { type: "blocked", message: "DDoS attack blocked", time: "2 min ago", severity: "high" },
    { type: "secured", message: "SSL certificate renewed", time: "15 min ago", severity: "info" },
    { type: "monitored", message: "Database backup completed", time: "1 hour ago", severity: "success" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Icon name="Shield" size={20} />
                <span className="text-sm font-medium">Enterprise IT Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
                Technology Innovation
                <span className="block text-cyan-400">Command Center</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Advanced infrastructure monitoring, threat intelligence, and cloud transformation tools that keep your business running at peak performance 24/7.
              </p>
            </div>

            {/* Real-time Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">System Uptime</p>
                    <p className="text-2xl font-bold text-green-400">{metrics.uptime.toFixed(2)}%</p>
                  </div>
                  <Icon name="TrendingUp" size={24} className="text-green-400" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Response Time</p>
                    <p className="text-2xl font-bold text-blue-400">{Math.round(metrics.responseTime)}ms</p>
                  </div>
                  <Icon name="Zap" size={24} className="text-blue-400" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Threats Blocked</p>
                    <p className="text-2xl font-bold text-red-400">{metrics.threatsBlocked.toLocaleString()}</p>
                  </div>
                  <Icon name="Shield" size={24} className="text-red-400" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Systems Monitored</p>
                    <p className="text-2xl font-bold text-cyan-400">{metrics.systemsMonitored}</p>
                  </div>
                  <Icon name="Monitor" size={24} className="text-cyan-400" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
                iconName="Play"
                iconPosition="left"
              >
                Start Free Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
              >
                Emergency Support
              </Button>
            </div>
          </div>

          {/* Right Content - Security Dashboard */}
          <div className="space-y-6">
            {/* Security Status Panel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Security Command Center</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Active</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {securityAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-400' :
                      alert.severity === 'success' ? 'bg-green-400' : 'bg-blue-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-slate-400">{alert.time}</p>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Infrastructure Health</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Servers</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-400">100%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Web Servers</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-yellow-400">98%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">CDN Network</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-green-400">100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Time Display */}
            <div className="text-center">
              <p className="text-sm text-slate-400">System Time (UTC)</p>
              <p className="text-lg font-mono text-cyan-400">
                {currentTime.toLocaleTimeString('en-US', { 
                  timeZone: 'UTC',
                  hour12: false 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;