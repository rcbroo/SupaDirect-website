import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  priority?: boolean;
}

export function OptimizedImage({
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      loading={priority ? undefined : 'lazy'}
      quality={85}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    />
  );
}
