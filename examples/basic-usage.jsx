import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  ProgressSteps,
  Form,
  Tab
} from '@ankish/ui-components';

// Basic form example
export function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Card>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter your full name"
          required
        />
        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your@email.com"
          required
        />
        <Input
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Tell us how we can help..."
          required
        />
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <Button variant="secondary">Cancel</Button>
          <Button type="submit" variant="primary">Send Message</Button>
        </div>
      </Form>
    </Card>
  );
}

// Multi-step wizard example
export function WizardExample() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { id: 1, label: 'Personal Info' },
    { id: 2, label: 'Preferences' },
    { id: 3, label: 'Review' },
    { id: 4, label: 'Complete' }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Card>
        <h2>Setup Wizard</h2>
        <ProgressSteps steps={steps} currentStep={currentStep} />
        
        <div style={{ margin: '40px 0' }}>
          <h3>Step {currentStep}: {steps[currentStep - 1].label}</h3>
          <p>This is the content for step {currentStep}.</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          <Button 
            variant="secondary" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button 
            variant="primary" 
            onClick={currentStep === steps.length ? () => setIsModalOpen(true) : nextStep}
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Setup Complete!"
      >
        <p>Congratulations! You have completed the setup wizard.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

// Tabbed interface example
export function TabbedInterface() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-chart-line' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' },
    { id: 'users', label: 'Users', icon: 'fas fa-users' },
    { id: 'reports', label: 'Reports', icon: 'fas fa-file-alt' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h3>Dashboard Overview</h3>
            <p>Welcome to your dashboard. Here you can see an overview of your system.</p>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h3>System Settings</h3>
            <Input label="Site Name" defaultValue="My Application" />
            <Input label="Admin Email" type="email" defaultValue="admin@example.com" />
          </div>
        );
      case 'users':
        return (
          <div>
            <h3>User Management</h3>
            <p>Manage your application users and their permissions.</p>
            <Button variant="primary">Add New User</Button>
          </div>
        );
      case 'reports':
        return (
          <div>
            <h3>Reports & Analytics</h3>
            <p>View detailed reports and analytics about your application usage.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div style={{ padding: '24px 0' }}>
        {renderTabContent()}
      </div>
    </Card>
  );
}

// Complete example showcasing multiple components
export function CompleteExample() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>Ankish UI Components Demo</h1>
      
      <div style={{ display: 'grid', gap: '24px', marginBottom: '24px' }}>
        <BasicForm />
        <WizardExample />
        <TabbedInterface />
      </div>
    </div>
  );
}