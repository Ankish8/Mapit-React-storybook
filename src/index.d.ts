import React from 'react';

// Common prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button Component
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare const Button: React.FC<ButtonProps>;

// Card Component
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'outlined' | 'filled' | 'ghost';
  padding?: 'none' | 'small' | 'medium' | 'large';
  clickable?: boolean;
  hoverable?: boolean;
  selected?: boolean;
  onAction?: () => void;
}

export declare const Card: React.FC<CardProps>;

// Input Component
export interface InputProps extends BaseComponentProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'filled' | 'ghost';
  multiline?: boolean;
  rows?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export declare const Input: React.FC<InputProps>;

// Modal Component
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large' | 'extra-large' | 'fullscreen';
  footer?: React.ReactNode;
}

export declare const Modal: React.FC<ModalProps>;

// Progress Steps Component
export interface ProgressStep {
  id: number;
  label: string;
  path?: string;
}

export interface ProgressStepsProps extends BaseComponentProps {
  steps: ProgressStep[];
  currentStep: number;
}

export declare const ProgressSteps: React.FC<ProgressStepsProps>;

// Responsive Progress Steps Component
export interface ResponsiveProgressStepsProps extends ProgressStepsProps {
  orientation?: 'horizontal' | 'vertical';
  compact?: boolean;
}

export declare const ResponsiveProgressSteps: React.FC<ResponsiveProgressStepsProps>;

// Header Component
export interface HeaderProps extends BaseComponentProps {
  title: string;
  onBack?: () => void;
  showBackButton?: boolean;
}

export declare const Header: React.FC<HeaderProps>;

// Form Component
export interface FormProps extends BaseComponentProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  layout?: 'vertical' | 'horizontal' | 'grid';
}

export declare const Form: React.FC<FormProps>;

// Tab Component
export interface TabItem {
  id: string;
  label: string;
  icon?: string;
}

export interface TabProps extends BaseComponentProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export declare const Tab: React.FC<TabProps>;

// Selector Component
export interface SelectorOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface SelectorProps extends BaseComponentProps {
  options: SelectorOption[];
  value?: string;
  onChange: (value: string) => void;
  layout?: 'vertical' | 'horizontal' | 'inline';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

export declare const Selector: React.FC<SelectorProps>;

// Floating Footer Component
export interface FloatingFooterProps extends BaseComponentProps {
  hasValidationAlert?: boolean;
  validationMessage?: string;
  showAlert?: boolean;
}

export declare const FloatingFooter: React.FC<FloatingFooterProps>;

// Question Type Selector Component
export interface QuestionTypeSelectorProps extends BaseComponentProps {
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}

export declare const QuestionTypeSelector: React.FC<QuestionTypeSelectorProps>;

// Code Editor Component
export interface CodeEditorProps extends BaseComponentProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  theme?: 'light' | 'dark';
  readOnly?: boolean;
}

export declare const CodeEditor: React.FC<CodeEditorProps>;

// Language List Component
export interface LanguageListProps extends BaseComponentProps {
  selectedLanguages: string[];
  onLanguageToggle: (language: string) => void;
  availableLanguages?: string[];
}

export declare const LanguageList: React.FC<LanguageListProps>;

// Toggle Card Component
export interface ToggleCardProps extends BaseComponentProps {
  title: string;
  description?: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export declare const ToggleCard: React.FC<ToggleCardProps>;

// Skills Input Component
export interface Skill {
  id: string;
  name: string;
}

export interface SkillsInputProps extends BaseComponentProps {
  skills: Skill[];
  onSkillsChange: (skills: Skill[]) => void;
  placeholder?: string;
}

export declare const SkillsInput: React.FC<SkillsInputProps>;

// Constants
export declare const PROGRESS_STEPS: ProgressStep[];
export declare const STEP_NUMBERS: {
  QUESTION_DETAILS: number;
  DEFAULT_CODES: number;
  TEST_CASES: number;
  QUESTION_PREVIEW: number;
  SETTINGS: number;
};

export declare const FILL_IN_THE_BLANKS_PROGRESS_STEPS: ProgressStep[];
export declare const FILL_IN_THE_BLANKS_STEP_NUMBERS: {
  QUESTION_DETAILS: number;
  MEDIA_RESOURCES: number;
  EVALUATION_PARAMETERS: number;
  QUESTION_PREVIEW: number;
  SETTINGS: number;
};

// Helper functions
export declare function getNextRoute(currentStep: number): string | null;
export declare function getPreviousRoute(currentStep: number): string | null;