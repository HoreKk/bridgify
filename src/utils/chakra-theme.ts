import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
  mergeConfigs,
} from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-geist-sans)', description: 'The font used for headings' },
        body: { value: 'var(--font-geist-mono)', description: 'The font used for body text' },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: '#ff0000',
          description: 'This is the primary color',
        },
      },
    },
  },
});

const config = mergeConfigs(defaultConfig, customConfig);

export const system = createSystem(config);
