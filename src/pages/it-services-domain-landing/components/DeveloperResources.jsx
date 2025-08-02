import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DeveloperResources = () => {
  const [activeTab, setActiveTab] = useState('apis');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const resourceTabs = [
    { id: 'apis', label: 'API Documentation', icon: 'Code' },
    { id: 'sdks', label: 'SDKs & Libraries', icon: 'Package' },
    { id: 'samples', label: 'Code Samples', icon: 'FileCode' },
    { id: 'tools', label: 'Developer Tools', icon: 'Wrench' }
  ];

  const programmingLanguages = [
    { id: 'javascript', name: 'JavaScript', icon: 'FileText' },
    { id: 'python', name: 'Python', icon: 'FileText' },
    { id: 'java', name: 'Java', icon: 'FileText' },
    { id: 'csharp', name: 'C#', icon: 'FileText' },
    { id: 'php', name: 'PHP', icon: 'FileText' },
    { id: 'ruby', name: 'Ruby', icon: 'FileText' }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/infrastructure/status',
      description: 'Get real-time infrastructure health status',
      parameters: ['region', 'service_type'],
      response: 'JSON object with status metrics'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/security/scan',
      description: 'Initiate security vulnerability scan',
      parameters: ['target_ip', 'scan_type', 'depth'],
      response: 'Scan job ID and estimated completion time'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/monitoring/metrics',
      description: 'Retrieve performance metrics and alerts',
      parameters: ['timeframe', 'metric_type', 'aggregation'],
      response: 'Time-series data with metric values'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/backup/schedule',
      description: 'Update automated backup configuration',
      parameters: ['schedule_type', 'retention_days', 'notification'],
      response: 'Updated backup schedule configuration'
    }
  ];

  const codeExamples = {
    javascript: {
      infrastructure: `// Get infrastructure status
const response = await fetch('/api/v1/infrastructure/status', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log('Infrastructure Status:', data);

// Real-time monitoring with WebSocket
const ws = new WebSocket('wss://api.apexsolutions.com/monitoring');
ws.onmessage = (event) => {
  const metrics = JSON.parse(event.data);
  updateDashboard(metrics);
};`,
      security: `// Initiate security scan
const scanConfig = {
  target_ip: '192.168.1.100',
  scan_type: 'comprehensive',
  depth: 'deep',
  notify_on_completion: true
};

const scanResponse = await fetch('/api/v1/security/scan', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(scanConfig)
});

const scanJob = await scanResponse.json();
console.log('Scan Job ID:', scanJob.job_id);`
    },
    python: {
      infrastructure: `import requests
import json

# Get infrastructure status
def get_infrastructure_status():
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(
        'https://api.apexsolutions.com/v1/infrastructure/status',
        headers=headers
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"API Error: {response.status_code}")

# Usage
status_data = get_infrastructure_status()
print(f"System Uptime: {status_data['uptime']}%")`,
      security: `import requests

def initiate_security_scan(target_ip, scan_type='comprehensive'):
    """Initiate a security vulnerability scan"""
    
    scan_config = {
        'target_ip': target_ip,
        'scan_type': scan_type,
        'depth': 'deep',
        'notify_on_completion': True
    }
    
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(
        'https://api.apexsolutions.com/v1/security/scan',
        headers=headers,
        json=scan_config
    )
    
    return response.json()

# Usage
scan_result = initiate_security_scan('192.168.1.100')
print(f"Scan Job ID: {scan_result['job_id']}")`
    }
  };

  const sdkLibraries = [
    {
      name: 'Apex Solutions JavaScript SDK',
      version: 'v2.1.4',
      description: 'Complete JavaScript SDK for browser and Node.js applications',
      installation: 'npm install @apex-solutions/sdk',
      features: ['Real-time monitoring', 'Security scanning', 'Backup management', 'TypeScript support']
    },
    {
      name: 'Apex Solutions Python SDK',
      version: 'v1.8.2',
      description: 'Python library for server-side integrations and automation',
      installation: 'pip install apex-solutions-sdk',
      features: ['Async/await support', 'Pandas integration', 'CLI tools', 'Django/Flask plugins']
    },
    {
      name: 'Apex Solutions .NET SDK',
      version: 'v3.0.1',
      description: '.NET Standard library for enterprise applications',
      installation: 'Install-Package ApexSolutions.SDK',
      features: ['Entity Framework support', 'Dependency injection', 'Configuration binding', 'Logging integration']
    }
  ];

  const developerTools = [
    {
      name: 'Apex CLI',
      description: 'Command-line interface for managing infrastructure and deployments',
      icon: 'Terminal',
      features: ['Infrastructure provisioning', 'Deployment automation', 'Log streaming', 'Configuration management']
    },
    {
      name: 'Monitoring Dashboard',
      description: 'Real-time dashboard for system monitoring and alerting',
      icon: 'Monitor',
      features: ['Custom dashboards', 'Alert configuration', 'Performance metrics', 'Historical data']
    },
    {
      name: 'Security Scanner',
      description: 'Automated security vulnerability scanning and reporting',
      icon: 'Shield',
      features: ['Vulnerability detection', 'Compliance checking', 'Risk assessment', 'Remediation guidance']
    },
    {
      name: 'API Testing Suite',
      description: 'Comprehensive testing tools for API development and validation',
      icon: 'TestTube',
      features: ['Automated testing', 'Load testing', 'Mock services', 'Documentation generation']
    }
  ];

  const getMethodColor = (method) => {
    const colors = {
      GET: 'bg-green-100 text-green-800',
      POST: 'bg-blue-100 text-blue-800',
      PUT: 'bg-yellow-100 text-yellow-800',
      DELETE: 'bg-red-100 text-red-800'
    };
    return colors[method] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Code" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Developer Resources</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Build with Our Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive APIs, SDKs, and developer tools to integrate our infrastructure 
            and security solutions into your applications.
          </p>
        </div>

        {/* Resource Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {resourceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary border-primary text-white shadow-lg'
                  : 'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* API Documentation Tab */}
        {activeTab === 'apis' && (
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  REST API Documentation
                </h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>API Status: Operational</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* API Endpoints */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground">Available Endpoints</h4>
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-primary bg-blue-50 px-2 py-1 rounded">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="text-xs font-medium text-foreground">Parameters:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <span key={paramIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                {param}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-foreground">Response:</span>
                          <p className="text-xs text-muted-foreground mt-1">{endpoint.response}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Authentication & Getting Started */}
                <div className="space-y-6">
                  <div className="bg-slate-900 rounded-lg p-6 text-white">
                    <h4 className="text-lg font-semibold mb-4">Authentication</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-slate-300 mb-2">Base URL:</p>
                        <code className="bg-slate-800 px-3 py-2 rounded block">
                          https://api.apexsolutions.com/v1
                        </code>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2">Authorization Header:</p>
                        <code className="bg-slate-800 px-3 py-2 rounded block">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2">Content Type:</p>
                        <code className="bg-slate-800 px-3 py-2 rounded block">
                          Content-Type: application/json
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Getting Started</h4>
                    <div className="space-y-3 text-sm text-blue-800">
                      <div className="flex items-center space-x-2">
                        <Icon name="Key" size={16} />
                        <span>Generate your API key in the developer console</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Book" size={16} />
                        <span>Review the API documentation and examples</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Code" size={16} />
                        <span>Test endpoints using our interactive API explorer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Zap" size={16} />
                        <span>Implement webhooks for real-time notifications</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button 
                      variant="default"
                      className="bg-primary hover:bg-primary/90"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Open API Explorer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SDKs & Libraries Tab */}
        {activeTab === 'sdks' && (
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-8">
              Official SDKs & Libraries
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {sdkLibraries.map((sdk, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">{sdk.name}</h4>
                    <span className="text-sm text-primary font-medium">{sdk.version}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{sdk.description}</p>
                  
                  <div className="bg-slate-900 rounded p-3 mb-4">
                    <code className="text-green-400 text-sm">{sdk.installation}</code>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Features:</p>
                    <div className="space-y-1">
                      {sdk.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download
                    </Button>
                    <Button 
                      variant="ghost"
                      size="sm"
                      iconName="Book"
                      iconPosition="left"
                    >
                      Docs
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Samples Tab */}
        {activeTab === 'samples' && (
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-headline font-bold text-foreground">
                  Code Examples
                </h3>
                
                {/* Language Selector */}
                <div className="flex space-x-2">
                  {programmingLanguages.slice(0, 2).map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLanguage(lang.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedLanguage === lang.id
                          ? 'bg-primary text-white' :'bg-slate-100 text-muted-foreground hover:bg-slate-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Infrastructure Monitoring Example */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Infrastructure Monitoring
                  </h4>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
                      <span className="text-sm text-slate-300">infrastructure.{selectedLanguage === 'javascript' ? 'js' : 'py'}</span>
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-white"
                        iconName="Copy"
                      >
                        Copy
                      </Button>
                    </div>
                    <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
                      <code>{codeExamples[selectedLanguage]?.infrastructure}</code>
                    </pre>
                  </div>
                </div>

                {/* Security Scanning Example */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Security Scanning
                  </h4>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
                      <span className="text-sm text-slate-300">security.{selectedLanguage === 'javascript' ? 'js' : 'py'}</span>
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-white"
                        iconName="Copy"
                      >
                        Copy
                      </Button>
                    </div>
                    <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
                      <code>{codeExamples[selectedLanguage]?.security}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Developer Tools Tab */}
        {activeTab === 'tools' && (
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-8">
              Developer Tools & Utilities
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {developerTools.map((tool, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={tool.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="left"
                    >
                      Documentation
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our developer support team is here to help you integrate our solutions 
              and build amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Developer Support
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
              >
                Join Developer Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperResources;