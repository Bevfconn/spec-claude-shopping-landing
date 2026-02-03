import { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  borderRadius?: number | string;
  className?: string;
}

const DEFAULT_FALLBACK = '/images/placeholders/product-placeholder.svg';

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  borderRadius = 0,
  className,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        borderRadius,
        overflow: 'hidden',
        bgcolor: 'grey.100',
      }}
      className={className}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <Box
        component="img"
        src={imgSrc}
        alt={alt}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        sx={{
          width: '100%',
          height: '100%',
          objectFit,
          display: isLoading ? 'none' : 'block',
          opacity: hasError ? 0.5 : 1,
          transition: 'opacity 0.2s ease-in-out',
        }}
      />
    </Box>
  );
}
