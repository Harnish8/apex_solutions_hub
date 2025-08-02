import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const InfrastructureAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    companySize: '',
    infrastructure: [],
    challenges: [],
    budget: '',
    timeline: ''
  });
  const [assessmentResults, setAssessmentResults] = useState(null);

  const steps = [
    { id: 1, title: 'Company Profile', icon: 'Building' },
    { id: 2, title: 'Current Infrastructure', icon: 'Server' },
    { id: 3, title: 'Challenges & Goals', icon: 'Target' },
    { id: 4, title: 'Results & Recommendations', icon: 'BarChart' }
  ];

  const infrastructureOptions = [
    { id: 'on-premise', label: 'On-Premise Servers', description: 'Physical servers in your location' },
    { id: 'cloud', label: 'Cloud Infrastructure', description: 'AWS, Azure, or Google Cloud' },
    { id: 'hybrid', label: 'Hybrid Setup', description: 'Mix of on-premise and cloud' },
    { id: 'legacy', label: 'Legacy Systems', description: 'Older systems requiring updates' },
    { id: 'saas', label: 'SaaS Applications', description: 'Software as a Service tools' },
    { id: 'mobile', label: 'Mobile Infrastructure', description: 'Mobile apps and MDM' }
  ];

  const challengeOptions = [
    { id: 'security', label: 'Security Vulnerabilities', severity: 'high' },
    { id: 'performance', label: 'Performance Issues', severity: 'medium' },
    { id: 'scalability', label: 'Scalability Limitations', severity: 'high' },
    { id: 'compliance', label: 'Compliance Requirements', severity: 'high' },
    { id: 'costs', label: 'High Operating Costs', severity: 'medium' },
    { id: 'downtime', label: 'Frequent Downtime', severity: 'high' },
    { id: 'integration', label: 'System Integration Issues', severity: 'medium' },
    { id: 'backup', label: 'Inadequate Backup Solutions', severity: 'high' }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      if (currentStep === 3) {
        // Generate assessment results
        generateResults();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResults = () => {
    const score = Math.floor(Math.random() * 30) + 60; // Score between 60-90
    const criticalIssues = assessmentData.challenges.filter(c => 
      challengeOptions.find(opt => opt.id === c)?.severity === 'high'
    ).length;
    
    setAssessmentResults({
      overallScore: score,
      criticalIssues,
      recommendations: [
        'Implement multi-factor authentication',
        'Upgrade to cloud-native architecture',
        'Establish automated backup procedures',
        'Deploy advanced monitoring solutions'
      ],
      estimatedSavings: '$' + (Math.floor(Math.random() * 50000) + 25000).toLocaleString(),
      implementationTime: Math.floor(Math.random() * 8) + 4 + ' weeks'
    });
  };

  const handleInfrastructureChange = (optionId, checked) => {
    setAssessmentData(prev => ({
      ...prev,
      infrastructure: checked 
        ? [...prev.infrastructure, optionId]
        : prev.infrastructure.filter(id => id !== optionId)
    }));
  };

  const handleChallengeChange = (challengeId, checked) => {
    setAssessmentData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challengeId]
        : prev.challenges.filter(id => id !== challengeId)
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="CheckCircle" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wide">Free Assessment</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            IT Infrastructure Health Check
          </h2>
          <p className="text-xl text-muted-foreground">
            Get instant insights into your IT infrastructure with our comprehensive assessment tool. 
            Receive personalized recommendations in minutes.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-white' :'border-border text-muted-foreground'
                  }`}>
                    {currentStep > step.id ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name={step.icon} size={20} />
                    )}
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Assessment Form */}
        <div className="bg-card rounded-2xl shadow-brand-lg border border-border p-8">
          {/* Step 1: Company Profile */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
                Tell us about your company
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Company Size"
                  type="text"
                  placeholder="e.g., 50-100 employees"
                  value={assessmentData.companySize}
                  onChange={(e) => setAssessmentData(prev => ({
                    ...prev,
                    companySize: e.target.value
                  }))}
                />
                
                <Input
                  label="Industry"
                  type="text"
                  placeholder="e.g., Healthcare, Finance, Manufacturing"
                />
              </div>

              <Input
                label="Current IT Budget (Annual)"
                type="text"
                placeholder="e.g., $100,000 - $500,000"
                value={assessmentData.budget}
                onChange={(e) => setAssessmentData(prev => ({
                  ...prev,
                  budget: e.target.value
                }))}
              />
            </div>
          )}

          {/* Step 2: Current Infrastructure */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
                What's your current infrastructure?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {infrastructureOptions.map((option) => (
                  <div key={option.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <Checkbox
                      label={option.label}
                      description={option.description}
                      checked={assessmentData.infrastructure.includes(option.id)}
                      onChange={(e) => handleInfrastructureChange(option.id, e.target.checked)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Challenges & Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
                What challenges are you facing?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {challengeOptions.map((challenge) => (
                  <div key={challenge.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={assessmentData.challenges.includes(challenge.id)}
                        onChange={(e) => handleChallengeChange(challenge.id, e.target.checked)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{challenge.label}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            challenge.severity === 'high' ?'bg-red-100 text-red-800' :'bg-yellow-100 text-yellow-800'
                          }`}>
                            {challenge.severity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Input
                label="Desired Timeline for Improvements"
                type="text"
                placeholder="e.g., 3-6 months"
                value={assessmentData.timeline}
                onChange={(e) => setAssessmentData(prev => ({
                  ...prev,
                  timeline: e.target.value
                }))}
              />
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && assessmentResults && (
            <div className="space-y-8">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
                Your IT Infrastructure Assessment Results
              </h3>

              {/* Overall Score */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-4">
                  <span className="text-3xl font-bold text-primary">{assessmentResults.overallScore}</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Overall Health Score</h4>
                <p className="text-muted-foreground">
                  {assessmentResults.overallScore >= 80 ? 'Excellent' : 
                   assessmentResults.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <Icon name="AlertTriangle" size={32} className="text-red-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{assessmentResults.criticalIssues}</p>
                  <p className="text-sm text-muted-foreground">Critical Issues</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <Icon name="DollarSign" size={32} className="text-green-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{assessmentResults.estimatedSavings}</p>
                  <p className="text-sm text-muted-foreground">Potential Annual Savings</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <Icon name="Clock" size={32} className="text-blue-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{assessmentResults.implementationTime}</p>
                  <p className="text-sm text-muted-foreground">Implementation Timeline</p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Priority Recommendations</h4>
                <div className="space-y-3">
                  {assessmentResults.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-accent" />
                      <span className="text-muted-foreground">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Strategy Session
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Get a detailed action plan from our IT experts
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button 
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
              <Button 
                variant="default"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
              >
                {currentStep === 3 ? 'Get Results' : 'Next'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureAssessment;