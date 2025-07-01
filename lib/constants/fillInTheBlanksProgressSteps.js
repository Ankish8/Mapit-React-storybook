// Fill-in-the-Blanks Progress Steps Configuration
export const FILL_IN_THE_BLANKS_STEP_NUMBERS = {
  QUESTION_DETAILS: 1,
  MEDIA_RESOURCES: 2,
  EVALUATION_PARAMETERS: 3,
  QUESTION_PREVIEW: 4,
  SETTINGS: 5,
};

export const FILL_IN_THE_BLANKS_PROGRESS_STEPS = [
  { 
    id: FILL_IN_THE_BLANKS_STEP_NUMBERS.QUESTION_DETAILS, 
    label: 'Question Details',
    path: '/fill-in-blanks/question-details'
  },
  { 
    id: FILL_IN_THE_BLANKS_STEP_NUMBERS.MEDIA_RESOURCES, 
    label: 'Media Resources',
    path: '/fill-in-blanks/media-resources'
  },
  { 
    id: FILL_IN_THE_BLANKS_STEP_NUMBERS.EVALUATION_PARAMETERS, 
    label: 'Evaluation Parameters',
    path: '/fill-in-blanks/evaluation-parameters'
  },
  { 
    id: FILL_IN_THE_BLANKS_STEP_NUMBERS.QUESTION_PREVIEW, 
    label: 'Question Preview',
    path: '/fill-in-blanks/preview'
  },
  { 
    id: FILL_IN_THE_BLANKS_STEP_NUMBERS.SETTINGS, 
    label: 'Settings',
    path: '/fill-in-blanks/settings'
  },
];

// Navigation helper functions
export const getNextRoute = (currentStep) => {
  const currentIndex = FILL_IN_THE_BLANKS_PROGRESS_STEPS.findIndex(step => step.id === currentStep);
  if (currentIndex < FILL_IN_THE_BLANKS_PROGRESS_STEPS.length - 1) {
    return FILL_IN_THE_BLANKS_PROGRESS_STEPS[currentIndex + 1].path;
  }
  return null; // No next step
};

export const getPreviousRoute = (currentStep) => {
  const currentIndex = FILL_IN_THE_BLANKS_PROGRESS_STEPS.findIndex(step => step.id === currentStep);
  if (currentIndex > 0) {
    return FILL_IN_THE_BLANKS_PROGRESS_STEPS[currentIndex - 1].path;
  }
  return null; // No previous step
};

export const getCurrentStepLabel = (currentStep) => {
  const step = FILL_IN_THE_BLANKS_PROGRESS_STEPS.find(step => step.id === currentStep);
  return step ? step.label : '';
};

export const isFirstStep = (currentStep) => {
  return currentStep === FILL_IN_THE_BLANKS_STEP_NUMBERS.QUESTION_DETAILS;
};

export const isLastStep = (currentStep) => {
  return currentStep === FILL_IN_THE_BLANKS_STEP_NUMBERS.SETTINGS;
};