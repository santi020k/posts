import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path'

import '@storybook/addon-console';

const rootDir = path.resolve(__dirname, '../..');

const config: StorybookConfig = {
  stories: [`${rootDir}/**/*.mdx`, `${rootDir}/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-storysource",
    "@whitespace/storybook-addon-html",
    "storybook-addon-pseudo-states"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [`${rootDir}/public`],
  webpackFinal: async (config) => {
    if (!config.resolve) return config;

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': `${rootDir}/src/`,
      '@/atoms': `${rootDir}/src/components/atoms`,
      '@/molecules': `${rootDir}/src/components/molecules`,
      '@/organisms': `${rootDir}/src/components/organisms`
    };

    return config;
  }
};

export default config;
