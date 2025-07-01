// Progress Steps Configuration
export const STEP_NUMBERS = {
  QUESTION_DETAILS: 1,
  DEFAULT_CODES: 2,
  TEST_CASES: 3,
  QUESTION_PREVIEW: 4,
  SETTINGS: 5,
};

export const PROGRESS_STEPS = [
  { 
    id: STEP_NUMBERS.QUESTION_DETAILS, 
    label: 'Question Details',
    path: '/question-details'
  },
  { 
    id: STEP_NUMBERS.DEFAULT_CODES, 
    label: 'Default Codes',
    path: '/default-codes'
  },
  { 
    id: STEP_NUMBERS.TEST_CASES, 
    label: 'Test Cases',
    path: '/test-cases'
  },
  { 
    id: STEP_NUMBERS.QUESTION_PREVIEW, 
    label: 'Question Preview',
    path: '/question-preview'
  },
  { 
    id: STEP_NUMBERS.SETTINGS, 
    label: 'Settings',
    path: '/settings'
  },
];

// Additional step configurations for specific question types
export const SUBMISSION_STEPS = [
  { 
    id: 1, 
    label: 'Question Details',
    path: '/submission-question-details'
  },
  { 
    id: 2, 
    label: 'Media & Resources',
    path: '/media-resources'
  },
  { 
    id: 3, 
    label: 'Solution Details',
    path: '/solution-details'
  },
  { 
    id: 4, 
    label: 'Question Preview',
    path: '/question-preview'
  },
  { 
    id: 5, 
    label: 'Settings',
    path: '/settings'
  },
];

export const FILL_IN_BLANKS_STEPS = [
  { 
    id: 1, 
    label: 'Question Details',
    path: '/fill-in-blanks/question-details'
  },
  { 
    id: 2, 
    label: 'Media Resources',
    path: '/fill-in-blanks/media-resources'
  },
  { 
    id: 3, 
    label: 'Evaluation Parameters',
    path: '/fill-in-blanks/evaluation-parameters'
  },
  { 
    id: 4, 
    label: 'Question Preview',
    path: '/fill-in-blanks/preview'
  },
  { 
    id: 5, 
    label: 'Settings',
    path: '/fill-in-blanks/settings'
  },
];