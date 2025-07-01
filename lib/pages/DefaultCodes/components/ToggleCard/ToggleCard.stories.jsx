import { useState } from 'react';
import ToggleCard from './ToggleCard';

export default {
  title: 'Components/ToggleCard',
  component: ToggleCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    enabled: {
      control: 'boolean',
    },
    onToggle: {
      action: 'toggled',
    },
  },
};

// Helper component for interactive examples
const ToggleCardExample = (props) => {
  const [enabled, setEnabled] = useState(props.enabled || false);
  
  return (
    <ToggleCard
      enabled={enabled}
      onToggle={setEnabled}
      {...props}
    />
  );
};

export const Default = {
  render: () => <ToggleCardExample />,
};

export const Enabled = {
  render: () => <ToggleCardExample enabled={true} />,
};

export const Disabled = {
  render: () => <ToggleCardExample enabled={false} />,
};

export const Interactive = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <ToggleCard
          enabled={enabled}
          onToggle={setEnabled}
        />
        <div style={{ 
          padding: '12px', 
          backgroundColor: enabled ? 'var(--color-success-50, #ecfdf3)' : 'var(--color-secondary-50, #f9fafb)', 
          borderRadius: '6px',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Starter code is <strong>{enabled ? 'enabled' : 'disabled'}</strong>
        </div>
      </div>
    );
  },
};

export const CustomContent = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [analytics, setAnalytics] = useState(false);
    const [sharing, setSharing] = useState(true);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
        <ToggleCard
          enabled={notifications}
          onToggle={setNotifications}
          title="Email Notifications"
          description="Receive email updates about question submissions and candidate progress"
        />
        <ToggleCard
          enabled={analytics}
          onToggle={setAnalytics}
          title="Analytics Tracking"
          description="Allow collection of anonymous usage data to improve the platform"
        />
        <ToggleCard
          enabled={sharing}
          onToggle={setSharing}
          title="Public Sharing"
          description="Make this question available in the public question library"
        />
      </div>
    );
  },
};

// Edge case stories
export const NoCallback = {
  args: {
    enabled: true,
    onToggle: undefined,
    title: "No callback function",
    description: "This toggle has no onToggle callback - should not crash when clicked"
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing ToggleCard with no onToggle callback. Should not crash when clicked.'
      }
    }
  }
};

export const DisabledState = {
  args: {
    enabled: false,
    disabled: true,
    title: "Disabled toggle",
    description: "This toggle is disabled and cannot be interacted with"
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing ToggleCard in disabled state. Toggle should be non-interactive.'
      }
    }
  }
};

export const LongContent = {
  args: {
    enabled: false,
    title: "Very long title that might wrap to multiple lines in smaller containers or when the text is too long",
    description: "This is a very long description that tests how the component handles text wrapping and layout when the content exceeds the normal expected length. It should maintain proper spacing and alignment even with lengthy text content."
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing ToggleCard with very long title and description to ensure proper text wrapping.'
      }
    }
  }
};

export const EmptyContent = {
  args: {
    enabled: false,
    title: "",
    description: ""
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing ToggleCard with empty title and description. Should render with minimal content.'
      }
    }
  }
};

export const SpecialCharacters = {
  args: {
    enabled: true,
    title: "Title with <script>alert('xss')</script> & special chars",
    description: "Description with émojis 🎉, symbols & <b>HTML</b> tags that should be escaped"
  },
  parameters: {
    docs: {
      description: {
        story: 'Testing ToggleCard with special characters and potential XSS content. Content should be safely rendered.'
      }
    }
  }
};