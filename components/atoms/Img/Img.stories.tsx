import { Story, Meta } from '@storybook/react';
import { withAmpDecorator } from 'storybook-amp';
import { Img } from './';
import { ImgProps } from './';

export default {
  component: Img,
  title: 'Atoms/Img',
  decorators: [withAmpDecorator],
  parameters: {
    amp: {
      isEnabled: false,
    },
  },
  args: {
    src: 'https://osome.com/assets/new/img/avatar/osome/helena@2x.jpg',
    width: 80,
    height: 80,
    alt: 'Helena',
    layout: 'fixed',
  },
} as Meta;

export const NormalImg = (args: ImgProps) => <Img {...args} />;

export const AmpImg = (args: ImgProps) => <Img {...args} amp />;

AmpImg.parameters = {
  amp: {
    isEnabled: true,
  },
};
