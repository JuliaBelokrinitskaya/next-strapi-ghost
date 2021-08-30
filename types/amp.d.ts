declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': {
      src: string;
      width: number;
      height: number;
      alt: string;
      layout: string;
    };
  }
}

declare module 'storybook-amp' {
  const withAmpDecorator: (...args: any) => any;
}
