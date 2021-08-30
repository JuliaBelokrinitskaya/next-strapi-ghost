import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from './';
import { ButtonProps } from './';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YuGiSapdy9lwimBXUqGfPI/All.-Library-Osome-Marketing?node-id=804%3A215',
    },
  },
  args: {
    ghost: false,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Standard = Template.bind({});

export const Ghost = Template.bind({});

Ghost.args = {
  ghost: true,
};
