import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    showBackButton: {
      control: 'boolean',
    },
    onBack: {
      action: 'back clicked',
    },
  },
};

export const Default = {
  args: {
    title: 'Question Details',
    onBack: () => console.log('Back clicked'),
  },
};

export const WithoutBackButton = {
  args: {
    title: 'Page Title Only',
    showBackButton: false,
  },
};

export const LongTitle = {
  args: {
    title: 'Very Long Page Title That Might Wrap to Multiple Lines',
    onBack: () => console.log('Back clicked'),
  },
};

export const DefaultCodes = {
  args: {
    title: 'Default Codes',
    onBack: () => console.log('Back clicked'),
  },
};

export const TestCases = {
  args: {
    title: 'Test Cases',
    onBack: () => console.log('Back clicked'),
  },
};

export const CustomBackHandler = {
  args: {
    title: 'Custom Back Action',
    onBack: () => alert('Custom back action triggered!'),
  },
};

// Edge case stories
export const EmptyTitle = {
  args: {
    title: '',
    onBack: () => console.log('Back clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing Header component with empty title. Should render gracefully with empty title.'
      }
    }
  }
};

export const UndefinedTitle = {
  args: {
    title: undefined,
    onBack: () => console.log('Back clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing Header component with undefined title. Should fallback to empty string.'
      }
    }
  }
};

export const NoBackHandler = {
  args: {
    title: 'No Back Handler',
    showBackButton: true,
    // onBack is undefined - should use browser history.back()
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing Header component without onBack handler. Should fallback to browser history.back().'
      }
    }
  }
};

export const MinimalHeader = {
  args: {
    title: 'Minimal',
    showBackButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing Header component in minimal configuration - title only, no back button.'
      }
    }
  }
};

export const SpecialCharactersTitle = {
  args: {
    title: '特殊字符 & Émojis 🎉 <script>alert("xss")</script>',
    onBack: () => console.log('Back clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing Header component with special characters, unicode, and potential XSS content in title.'
      }
    }
  }
};