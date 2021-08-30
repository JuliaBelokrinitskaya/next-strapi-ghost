import Image from 'next/image';

const myLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export interface ImgProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  layout?: 'responsive' | 'fill' | 'fixed' | 'intrinsic' | undefined;
  priority?: boolean;
  amp?: boolean;
}

export function Img({
  src,
  width,
  height,
  alt,
  layout = 'responsive',
  priority,
  amp,
}: ImgProps) {
  const isAmp = amp;

  const imgProps = {
    src,
    width,
    height,
    priority,
    layout,
  };

  const ampProps = {
    src,
    width,
    height,
    layout,
  };

  if (isAmp) {
    return (
      <div>
        <amp-img {...ampProps} alt={alt} />
      </div>
    );
  }

  return (
    <div>
      <Image loader={myLoader} {...imgProps} alt={alt}></Image>
    </div>
  );
}
