import ProgressSteps from './ProgressSteps';

const steps = [
  { id: 1, label: 'Question Details' },
  { id: 2, label: 'Default Codes' },
  { id: 3, label: 'Test Cases' },
  { id: 4, label: 'Question Preview' },
  { id: 5, label: 'Settings' },
];

export default {
  title: 'Components/ProgressSteps',
  component: ProgressSteps,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Current active step (automatically clamped to valid range)',
    },
    steps: {
      description: 'Array of step objects with id and label properties',
    },
  },
};

export const Step1 = {
  args: {
    steps,
    currentStep: 1,
  },
};

export const Step2 = {
  args: {
    steps,
    currentStep: 2,
  },
};

export const Step3 = {
  args: {
    steps,
    currentStep: 3,
  },
};

export const Step4 = {
  args: {
    steps,
    currentStep: 4,
  },
};

export const Step5 = {
  args: {
    steps,
    currentStep: 5,
  },
};

// Edge case stories
export const InvalidCurrentStep = {
  args: {
    steps,
    currentStep: 0, // Should default to step 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing with invalid currentStep (0). Component should handle this gracefully and default to step 1.',
      },
    },
  },
};

export const ExcessiveCurrentStep = {
  args: {
    steps,
    currentStep: 10, // Should clamp to last step
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing with currentStep beyond available steps. Component should clamp to the last step.',
      },
    },
  },
};

export const EmptySteps = {
  args: {
    steps: [],
    currentStep: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing with empty steps array. Component should render nothing gracefully.',
      },
    },
  },
};

export const TwoSteps = {
  args: {
    steps: [
      { id: 1, label: 'Setup' },
      { id: 2, label: 'Complete' },
    ],
    currentStep: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing with minimal steps (2 steps) to ensure layout works with different step counts.',
      },
    },
  },
};