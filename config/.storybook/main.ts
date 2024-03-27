import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path'

const rootDir = path.resolve(__dirname, '../..');

const config: StorybookConfig = {
  stories: [`${rootDir}/**/*.mdx`, `${rootDir}/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
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
