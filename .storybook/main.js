/** @type { import("@storybook/react-vite").StorybookConfig } */
const config = {
  stories: [
    "../lib/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
