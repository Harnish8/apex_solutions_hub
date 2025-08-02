import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyResponseCenter = () => {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [responseTeam, setResponseTeam] = useState([]);
  const [activeIncidents, setActiveIncidents] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Mock response team data
    setResponseTeam([
      {
        id: 1,
        name: 'Sarah Chen',
        role: 'Senior Security Engineer',
        status: 'available',
        expertise: ['Security', 'Network'],
        responseTime: '< 5 min',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        id: 2,
        name: 'Michael Rodriguez',
        role: 'Infrastructure Specialist',
        status: 'on-call',
        expertise: ['Cloud', 'Database'],
        responseTime: '< 10 min',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      {
        id: 3,
        name: 'Emily Johnson',
        role: 'DevOps Engineer',
        status: 'available',
        expertise: ['CI/CD', 'Monitoring'],
        responseTime: '< 5 min',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      }
    ]);

    // Mock active incidents
    setActiveIncidents([
      {
        id: 'INC-2025-001',
        title: 'Database Connection Timeout',
        severity: 'high',
        status: 'investigating',
        assignee: 'Michael Rodriguez',
        created: new Date(Date.now() - 1800000), // 30 minutes ago
        description: 'Multiple database connection timeouts reported across production environment'
      },
      {
        id: 'INC-2025-002',
        title: 'SSL Certificate Expiring',
        severity: 'medium',
        status: 'scheduled',
        assignee: 'Sarah Chen',
        created: new Date(Date.now() - 3600000), // 1 hour ago
        description: 'SSL certificate for main domain expires in 48 hours'
      }
    ]);

    return () => clearInterval(timer);
  }, []);

  const severityColors = {
    critical: 'bg-red-500 text-white',
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  const statusColors = {
    investigating: 'bg-blue-100 text-blue-800',
    scheduled: 'bg-purple-100 text-purple-800',
    resolved: 'bg-green-100 text-green-800',
    escalated: 'bg-red-100 text-red-800'
  };

  const getStatusColor = (status) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      'on-call': 'bg-yellow-100 text-yellow-800',
      busy: 'bg-red-100 text-red-800'
    };
    return colors[status] || colors.available;
  };

  const formatTimeAgo = (date) => {
    const minutes = Math.floor((new Date() - date) / 60000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-red-600 mb-4">
            <Icon name="AlertTriangle" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Emergency Response</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            24/7 Emergency Response Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immediate support when you need it most. Our expert response team is standing by 
            to handle critical incidents and system emergencies around the clock.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-red-600 text-white rounded-2xl p-8 mb-12 shadow-brand-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-headline font-bold">Emergency Hotline Active</h3>
              </div>
              <p className="text-red-100 mb-4">
                Critical system issues? Security breaches? Our emergency response team is available 24/7 
                to provide immediate assistance and incident management.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Average Response: &lt; 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>Expert Team Available</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-red-100 text-sm mb-2">Emergency Hotline</p>
              <p className="text-3xl font-bold mb-4">1-800-APEX-911</p>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
                iconName="Phone"
                iconPosition="left"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Response Team */}
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-headline font-bold text-foreground">
                On-Duty Response Team
              </h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              {responseTeam.map((member) => (
                <div key={member.id} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      member.status === 'available' ? 'bg-green-400' :
                      member.status === 'on-call' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Response: {member.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Escalation Process</p>
                  <p className="text-sm text-blue-700 mt-1">
                    If the primary team member is unavailable, your incident will be automatically 
                    escalated to the next available expert within 2 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Incidents */}
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-headline font-bold text-foreground">
                Active Incidents
              </h3>
              <Button 
                variant="outline"
                size="sm"
                iconName="Plus"
                iconPosition="left"
              >
                Report Issue
              </Button>
            </div>

            <div className="space-y-4">
              {activeIncidents.map((incident) => (
                <div key={incident.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${severityColors[incident.severity]}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[incident.status]}`}>
                        {incident.status.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(incident.created)}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2">{incident.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{incident.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Assigned to {incident.assignee}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-primary">{incident.id}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button 
                variant="ghost"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View All Incidents
              </Button>
            </div>
          </div>
        </div>

        {/* Incident Management Workflow */}
        <div className="mt-16 bg-white rounded-2xl shadow-brand-lg border border-border p-8">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-8">
            Emergency Response Workflow
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertTriangle" size={24} className="text-red-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">1. Incident Reported</h4>
              <p className="text-sm text-muted-foreground">
                Call hotline, submit ticket, or automatic alert triggers response
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">2. Expert Assigned</h4>
              <p className="text-sm text-muted-foreground">
                Specialist assigned based on incident type and severity level
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">3. Investigation</h4>
              <p className="text-sm text-muted-foreground">
                Root cause analysis and immediate containment measures
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">4. Resolution</h4>
              <p className="text-sm text-muted-foreground">
                Issue resolved with full documentation and prevention measures
              </p>
            </div>
          </div>
        </div>

        {/* Service Level Agreements */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Emergency Response SLAs
            </h3>
            <p className="text-slate-300">
              Our commitment to rapid response and resolution times
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">&lt; 5 min</div>
              <h4 className="font-semibold mb-2">Critical Issues</h4>
              <p className="text-sm text-slate-300">
                System outages, security breaches, data loss
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">&lt; 15 min</div>
              <h4 className="font-semibold mb-2">High Priority</h4>
              <p className="text-sm text-slate-300">
                Performance degradation, service disruptions
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">&lt; 1 hour</div>
              <h4 className="font-semibold mb-2">Standard Issues</h4>
              <p className="text-sm text-slate-300">
                Configuration changes, minor bugs, questions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Don't Wait for an Emergency
            </h3>
            <p className="text-muted-foreground mb-8">
              Proactive monitoring and preventive maintenance can help avoid critical incidents. 
              Let us help you build a more resilient infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
                iconName="Shield"
                iconPosition="left"
              >
                Setup Proactive Monitoring
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
              >
                Download Emergency Procedures
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResponseCenter;