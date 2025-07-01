# Ankish UI Components

A React component library for building educational and assessment platforms. Contains reusable UI components with TypeScript support and Storybook documentation.

## Installation

```bash
npm install @ankish8/ui-components
```

## Basic Usage

```jsx
import React from 'react';
import { Button, Card, Input } from '@ankish8/ui-components';
import '@ankish8/ui-components/dist/style.css';

function App() {
  return (
    <Card>
      <h2>My App</h2>
      <Input label="Name" placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## What's Included

### Basic Components
- **Button** - Different button styles and sizes
- **Card** - Container for content
- **Input** - Form inputs with labels
- **Modal** - Popup dialogs
- **Header** - Page headers
- **Form** - Form wrapper

### Layout Components
- **ProgressSteps** - Show progress through steps
- **ResponsiveProgressSteps** - Mobile-friendly progress
- **FloatingFooter** - Bottom action bar
- **Tab** - Tab navigation

### Educational Components
- **QuestionTypeSelector** - Pick question types
- **CodeEditor** - Code editing with syntax highlighting
- **LanguageList** - Select programming languages
- **TestCases** - Manage test cases
- **SkillsInput** - Tag-based skill selection

### Page Templates
- **DefaultCodes** - Code templates
- **MediaResources** - File uploads
- **SubmissionQuestions** - Question builder
- **FillInTheBlanks** - Fill-in-the-blank questions
- **EvaluationParameters** - Assessment settings

## Documentation

Check out the [live documentation](https://mapit-storybook.netlify.app) to see all components with examples and try them out.

## Customization

You can customize colors using CSS variables:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

## Example: Simple Form

```jsx
import { Form, Input, Button, Card } from '@ankish8/ui-components';

function ContactForm() {
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          type="email" 
          placeholder="your@email.com" 
        />
        <Input 
          label="Message" 
          multiline 
          rows={4} 
          placeholder="Your message" 
        />
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
    </Card>
  );
}
```

## Requirements

- React 16.8+
- React DOM 16.8+

## License

MIT License - see [LICENSE](LICENSE) file.

## Links

- [Documentation](https://mapit-storybook.netlify.app)
- [NPM Package](https://www.npmjs.com/package/@ankish8/ui-components)
- [Source Code](https://github.com/Ankish8/Mapit-React-storybook)

---

Built by Ankish for educational platforms.