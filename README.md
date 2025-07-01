# 🎨 Ankish UI Components

A comprehensive React UI component library designed for educational and assessment platforms. Built with modern React patterns, TypeScript support, and comprehensive Storybook documentation.

## 🚀 Features

- 📱 **Responsive Design** - Mobile-first components that work everywhere
- ♿ **Accessibility** - WCAG compliant with proper ARIA attributes
- 🎨 **Themeable** - CSS custom properties for easy customization
- 📚 **Well Documented** - Comprehensive Storybook documentation
- 🔧 **TypeScript Ready** - Full TypeScript support
- 🧪 **Tested** - Unit tests for all components
- 📦 **Tree Shakeable** - Import only what you need

## 📦 Installation

```bash
npm install @ankish/ui-components
# or
yarn add @ankish/ui-components
```

## 🎯 Quick Start

```jsx
import React from 'react';
import { Button, Card, Input } from '@ankish/ui-components';
import '@ankish/ui-components/dist/styles.css';

function App() {
  return (
    <Card>
      <h2>Welcome to Ankish UI</h2>
      <Input label="Your Name" placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}

export default App;
```

## 📖 Components

### Core Components
- **Button** - Versatile button component with multiple variants
- **Card** - Flexible container for content organization
- **Input** - Form input with validation and styling
- **Modal** - Accessible modal dialogs
- **Header** - Navigation and page headers
- **Form** - Form wrapper with validation support

### Layout Components
- **ProgressSteps** - Multi-step process visualization
- **ResponsiveProgressSteps** - Mobile-friendly progress indicator
- **FloatingFooter** - Sticky bottom action bar
- **Tab** - Tabbed navigation component

### Specialized Components
- **QuestionTypeSelector** - Educational content type picker
- **CodeEditor** - Syntax-highlighted code editing
- **LanguageList** - Programming language selection
- **TestCases** - Test case management interface
- **SkillsInput** - Tag-based skills selection

### Page Components
- **DefaultCodes** - Code template management
- **MediaResources** - File upload and media handling
- **SubmissionQuestions** - Assessment question builder
- **FillInTheBlanks** - Interactive fill-in-the-blank questions
- **EvaluationParameters** - Assessment configuration

## 🎨 Theming

The component library uses CSS custom properties for theming:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://ankish-ui-components.netlify.app) to:
- Browse all components interactively
- View component APIs and props
- See usage examples and best practices
- Test components in different states

## 🛠 Development

```bash
# Clone the repository
git clone https://github.com/Ankish8/Mapit-React-storybook.git
cd Mapit-React-storybook

# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build the package
npm run build

# Run tests
npm test
```

## 📝 Usage Examples

### Basic Form
```jsx
import { Form, Input, Button, Card } from '@ankish/ui-components';

function ContactForm() {
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          type="email" 
          required 
          placeholder="your@email.com" 
        />
        <Input 
          label="Message" 
          multiline 
          rows={4} 
          placeholder="Your message..." 
        />
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Form>
    </Card>
  );
}
```

### Progress Steps
```jsx
import { ProgressSteps } from '@ankish/ui-components';

const steps = [
  { id: 1, label: 'Personal Info' },
  { id: 2, label: 'Preferences' },
  { id: 3, label: 'Review' },
  { id: 4, label: 'Complete' }
];

function Wizard() {
  return (
    <ProgressSteps 
      steps={steps} 
      currentStep={2} 
    />
  );
}
```

### Code Editor
```jsx
import { CodeEditor } from '@ankish/ui-components';

function CodeDemo() {
  return (
    <CodeEditor
      language="javascript"
      value="console.log('Hello World!');"
      onChange={handleCodeChange}
      theme="dark"
    />
  );
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [📚 Storybook Documentation](https://mapit-react-storybook.netlify.app)
- [📦 NPM Package](https://www.npmjs.com/package/@ankish/ui-components)
- [🐛 Bug Reports](https://github.com/Ankish8/Mapit-React-storybook/issues)
- [💡 Feature Requests](https://github.com/Ankish8/Mapit-React-storybook/discussions)

## 📊 Stats

![npm version](https://img.shields.io/npm/v/@ankish/ui-components)
![npm downloads](https://img.shields.io/npm/dm/@ankish/ui-components)
![bundle size](https://img.shields.io/bundlephobia/minzip/@ankish/ui-components)
![license](https://img.shields.io/npm/l/@ankish/ui-components)

---

Made with ❤️ by [Ankish](https://github.com/ankish8)