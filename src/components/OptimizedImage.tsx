import React, { useState, useEffect, useRef } from 'react';
import { optimizeImage, imageOptimizer } from '../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  lazy?: boolean;
  placeholder?: 'blur' | 'empty';
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 85,
  format,
  lazy = true,
  placeholder = 'blur',
  className = '',
  priority = false,
  onLoad,
  onError,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [optimalFormat, setOptimalFormat] = useState<'webp' | 'jpeg'>('jpeg');
  const imgRef = useRef<HTMLImageElement>(null);

  // Determine optimal format based on browser support
  useEffect(() => {
    const getFormat = async () => {
      const optimal = await imageOptimizer.getOptimalFormat();
      setOptimalFormat(optimal);
    };
    
    if (!format) {
      getFormat();
    }
  }, [format]);

  // Generate optimized image sources
  const optimizedImage = optimizeImage(src, {
    quality,
    format: format || optimalFormat,
    width,
    height,
    lazy: lazy && !priority,
    placeholder
  });

  // Preload critical images
  useEffect(() => {
    if (priority) {
      imageOptimizer.preloadImage(src, {
        quality,
        format: format || optimalFormat,
        width,
        height
      });
    }
  }, [src, priority, quality, format, optimalFormat, width, height]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Base CSS classes for smooth transitions
  const baseClasses = `
    transition-all duration-300 ease-in-out
    ${isLoaded ? 'opacity-100' : 'opacity-0'}
    ${className}
  `;

  // Placeholder styles
  const placeholderClasses = `
    ${!isLoaded && placeholder === 'blur' ? 'filter blur-sm scale-105' : ''}
    ${isError ? 'bg-gray-200 dark:bg-gray-700' : ''}
  `;

  if (lazy && !priority) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }}
      >
        {/* Blur placeholder */}
        {placeholder === 'blur' && optimizedImage.placeholder && !isLoaded && (
          <img
            src={optimizedImage.placeholder}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-110 ${placeholderClasses}`}
            aria-hidden="true"
          />
        )}
        
        {/* Main image */}
        <img
          ref={imgRef}
          data-src={optimizedImage.src}
          data-srcset={optimizedImage.srcSet}
          alt={alt}
          width={width || optimizedImage.width}
          height={height || optimizedImage.height}
          sizes={sizes}
          className={`w-full h-full object-cover ${baseClasses}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
        
        {/* Error fallback */}
        {isError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Image failed to load</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Non-lazy loading (priority images)
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && optimizedImage.placeholder && !isLoaded && (
        <img
          src={optimizedImage.placeholder}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${placeholderClasses}`}
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={optimizedImage.src}
        srcSet={optimizedImage.srcSet}
        alt={alt}
        width={width || optimizedImage.width}
        height={height || optimizedImage.height}
        sizes={sizes}
        className={`w-full h-full object-cover ${baseClasses}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Error fallback */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

// Utility component for hero images
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'priority' | 'lazy'>> = (props) => (
  <OptimizedImage {...props} priority={true} lazy={false} />
);

// Utility component for gallery images
export const GalleryImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage {...props} lazy={true} placeholder="blur" />
);

// Utility component for avatar images
export const AvatarImage: React.FC<Omit<OptimizedImageProps, 'width' | 'height'> & { size?: number }> = ({ 
  size = 100, 
  className = '', 
  ...props 
}) => (
  <OptimizedImage 
    {...props} 
    width={size} 
    height={size} 
    className={`rounded-full ${className}`}
    priority={true}
  />
);