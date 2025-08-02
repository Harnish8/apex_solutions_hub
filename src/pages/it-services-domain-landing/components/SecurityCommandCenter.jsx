import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityCommandCenter = () => {
  const [threatData, setThreatData] = useState({
    activeThreats: 23,
    blockedAttacks: 1247,
    vulnerabilities: 5,
    complianceScore: 98
  });

  const [networkNodes, setNetworkNodes] = useState([]);
  const [selectedThreat, setSelectedThreat] = useState(null);

  useEffect(() => {
    // Generate network nodes for visualization
    const nodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      status: Math.random() > 0.8 ? 'threat' : Math.random() > 0.6 ? 'warning' : 'secure',
      connections: Math.floor(Math.random() * 3) + 1
    }));
    setNetworkNodes(nodes);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setThreatData(prev => ({
        ...prev,
        activeThreats: Math.max(0, prev.activeThreats + (Math.random() > 0.7 ? 1 : -1)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const threats = [
    {
      id: 1,
      type: 'DDoS Attack',
      severity: 'high',
      source: '185.220.101.42',
      target: 'Web Server Cluster',
      status: 'blocked',
      timestamp: '2 minutes ago',
      description: 'Large-scale distributed denial of service attack targeting main web infrastructure'
    },
    {
      id: 2,
      type: 'Malware Detection',
      severity: 'medium',
      source: 'Email Gateway',
      target: 'User Workstation',
      status: 'quarantined',
      timestamp: '15 minutes ago',
      description: 'Suspicious email attachment containing potential ransomware payload'
    },
    {
      id: 3,
      type: 'Unauthorized Access',
      severity: 'high',
      source: '203.45.67.89',
      target: 'Database Server',
      status: 'investigating',
      timestamp: '1 hour ago',
      description: 'Multiple failed login attempts detected from suspicious IP address'
    },
    {
      id: 4,
      type: 'Data Exfiltration',
      severity: 'critical',
      source: 'Internal Network',
      target: 'External Server',
      status: 'blocked',
      timestamp: '3 hours ago',
      description: 'Unusual data transfer patterns detected, potential data breach attempt'
    }
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'text-red-600 bg-red-100',
      high: 'text-red-500 bg-red-50',
      medium: 'text-yellow-600 bg-yellow-100',
      low: 'text-green-600 bg-green-100'
    };
    return colors[severity] || colors.medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      blocked: 'text-green-600 bg-green-100',
      quarantined: 'text-yellow-600 bg-yellow-100',
      investigating: 'text-blue-600 bg-blue-100',
      resolved: 'text-gray-600 bg-gray-100'
    };
    return colors[status] || colors.investigating;
  };

  const getNodeColor = (status) => {
    const colors = {
      secure: 'bg-green-400',
      warning: 'bg-yellow-400',
      threat: 'bg-red-400'
    };
    return colors[status] || colors.secure;
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-cyan-400 mb-4">
            <Icon name="Shield" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Security Operations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-6">
            AI-Powered Security Command Center
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time threat detection, automated response systems, and comprehensive security monitoring 
            that protects your infrastructure 24/7.
          </p>
        </div>

        {/* Security Metrics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Icon name="AlertTriangle" size={24} className="text-red-400" />
              <span className="text-sm text-slate-300">Active</span>
            </div>
            <p className="text-3xl font-bold text-red-400">{threatData.activeThreats}</p>
            <p className="text-sm text-slate-300">Active Threats</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Shield" size={24} className="text-green-400" />
              <span className="text-sm text-slate-300">Blocked</span>
            </div>
            <p className="text-3xl font-bold text-green-400">{threatData.blockedAttacks.toLocaleString()}</p>
            <p className="text-sm text-slate-300">Attacks Blocked</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Icon name="Bug" size={24} className="text-yellow-400" />
              <span className="text-sm text-slate-300">Found</span>
            </div>
            <p className="text-3xl font-bold text-yellow-400">{threatData.vulnerabilities}</p>
            <p className="text-sm text-slate-300">Vulnerabilities</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Icon name="CheckCircle" size={24} className="text-blue-400" />
              <span className="text-sm text-slate-300">Score</span>
            </div>
            <p className="text-3xl font-bold text-blue-400">{threatData.complianceScore}%</p>
            <p className="text-sm text-slate-300">Compliance</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Network Visualization */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Network Security Map</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Live Monitoring</span>
              </div>
            </div>

            {/* Network Diagram */}
            <div className="relative h-64 bg-slate-800 rounded-lg overflow-hidden">
              <svg className="w-full h-full">
                {/* Connection Lines */}
                {networkNodes.map((node, index) => 
                  networkNodes.slice(index + 1).map((targetNode, targetIndex) => (
                    <line
                      key={`${index}-${targetIndex}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="rgba(148, 163, 184, 0.3)"
                      strokeWidth="1"
                    />
                  ))
                )}
                
                {/* Network Nodes */}
                {networkNodes.map((node) => (
                  <circle
                    key={node.id}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="6"
                    className={`${getNodeColor(node.status)} animate-pulse`}
                  />
                ))}
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Warning</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Threat</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button 
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Maximize"
                iconPosition="left"
              >
                Full Network View
              </Button>
            </div>
          </div>

          {/* Threat Intelligence Feed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Threat Intelligence Feed</h3>
              <Button 
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                iconName="RefreshCw"
              >
                Refresh
              </Button>
            </div>

            <div className="space-y-4 max-h-64 overflow-y-auto">
              {threats.map((threat) => (
                <div
                  key={threat.id}
                  className={`p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer transition-all hover:bg-white/10 ${
                    selectedThreat?.id === threat.id ? 'ring-2 ring-cyan-400' : ''
                  }`}
                  onClick={() => setSelectedThreat(threat)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getSeverityColor(threat.severity)}`}>
                        {threat.severity.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(threat.status)}`}>
                        {threat.status.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{threat.timestamp}</span>
                  </div>
                  
                  <h4 className="font-semibold text-white mb-1">{threat.type}</h4>
                  <p className="text-sm text-slate-300 mb-2">{threat.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>From: {threat.source}</span>
                    <Icon name="ArrowRight" size={12} />
                    <span>To: {threat.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Threat Details */}
        {selectedThreat && (
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Threat Analysis: {selectedThreat.type}</h3>
              <Button 
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => setSelectedThreat(null)}
                iconName="X"
              >
                Close
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-cyan-400">Threat Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Severity:</span>
                    <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(selectedThreat.severity)}`}>
                      {selectedThreat.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Status:</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedThreat.status)}`}>
                      {selectedThreat.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Detected:</span>
                    <span className="text-white">{selectedThreat.timestamp}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-cyan-400">Source & Target</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-slate-300">Source:</span>
                    <p className="text-white font-mono">{selectedThreat.source}</p>
                  </div>
                  <div>
                    <span className="text-slate-300">Target:</span>
                    <p className="text-white">{selectedThreat.target}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-cyan-400">Response Actions</h4>
                <div className="space-y-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="border-red-400 text-red-400 hover:bg-red-400/10"
                    iconName="Ban"
                    iconPosition="left"
                  >
                    Block Source IP
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                    iconName="AlertTriangle"
                    iconPosition="left"
                  >
                    Quarantine Asset
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Generate Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold mb-4">
              Protect Your Business with Enterprise Security
            </h3>
            <p className="text-slate-300 mb-8">
              Get 24/7 monitoring, threat intelligence, and automated response systems 
              tailored to your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700"
                iconName="Shield"
                iconPosition="left"
              >
                Start Security Assessment
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
              >
                Emergency Response: 1-800-SECURE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCommandCenter;