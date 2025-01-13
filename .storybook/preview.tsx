import type { Preview } from '@storybook/react'
import './fontDeclaration.scss'
import '../src/styles/index.scss'
const preview: Preview = {
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#0D0D0D' }] },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
