// Core Components
export { default as Button } from '../lib/components/common/Button/Button.jsx';
export { default as Card } from '../lib/components/common/Card/Card.jsx';
export { default as Input } from '../lib/components/common/Input/Input.jsx';
export { default as Modal } from '../lib/components/common/Modal/Modal.jsx';
export { default as Header } from '../lib/components/common/Header/Header.jsx';
export { default as Form } from '../lib/components/common/Form/Form.jsx';
export { default as Tab } from '../lib/components/common/Tab/Tab.jsx';
export { default as Selector } from '../lib/components/common/Selector/Selector.jsx';

// Progress Components
export { default as ProgressSteps } from '../lib/components/common/ProgressSteps/ProgressSteps.jsx';
export { default as ResponsiveProgressSteps } from '../lib/components/common/ResponsiveProgressSteps/ResponsiveProgressSteps.jsx';

// Layout Components
export { default as FloatingFooter } from '../lib/components/common/FloatingFooter/FloatingFooter.jsx';

// Specialized Components
export { default as QuestionTypeSelector } from '../lib/components/QuestionTypeSelector/QuestionTypeSelector.jsx';

// Page Components
export { default as DefaultCodes } from '../lib/pages/DefaultCodes/DefaultCodes.jsx';
export { default as MediaResources } from '../lib/pages/MediaResources/MediaResources.jsx';
export { default as TestCases } from '../lib/pages/TestCases/TestCases.jsx';
export { default as SubmissionQuestions } from '../lib/pages/SubmissionQuestions/SubmissionQuestions.jsx';
export { default as SolutionDetails } from '../lib/pages/SolutionDetails/SolutionDetails.jsx';
export { default as FillInTheBlanks } from '../lib/pages/FillInTheBlanks/FillInTheBlanks.jsx';

// Sub-components
export { default as CodeEditor } from '../lib/pages/DefaultCodes/components/CodeEditor/CodeEditor.jsx';
export { default as LanguageList } from '../lib/pages/DefaultCodes/components/LanguageList/LanguageList.jsx';
export { default as ToggleCard } from '../lib/pages/DefaultCodes/components/ToggleCard/ToggleCard.jsx';

// Constants
export * from '../lib/constants/progressSteps.js';
export * from '../lib/constants/fillInTheBlanksProgressSteps.js';

// Styles (users can import these)
import '../lib/styles/variables.css';
import '../lib/styles/tokens.css';
import '../lib/styles/utilities.css';