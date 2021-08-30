import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { StoryWrapper } from 'components/layouts/Landing';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [
  (Story) => (
    <StoryWrapper>
      <Story />
    </StoryWrapper>
  ),
];