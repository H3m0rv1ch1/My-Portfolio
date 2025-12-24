// Image optimization and caching utilities for super fast loading

interface CachedImage {
  data: string;
  timestamp: number;
}

interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: 'blur' | 'empty';
}

interface OptimizedImageResult {
  src: string;
  srcSet: string;
  placeholder?: string;
  width: number;
  height: number;
}

class ImageOptimizer {
  private cache = new Map<string, CachedImage>();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Generate optimized image sources with multiple formats and sizes
   */
  generateOptimizedSources(
    src: string, 
    options: ImageOptimizationOptions = {}
  ): OptimizedImageResult {
    const {
      quality = 85,
      format = 'webp',
      width,
      height,
      lazy = true
    } = options;

    // Generate different sizes for responsive images
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const srcSet = sizes
      .map(size => `${this.optimizeImageUrl(src, { ...options, width: size })} ${size}w`)
      .join(', ');

    return {
      src: this.optimizeImageUrl(src, options),
      srcSet,
      placeholder: this.generatePlaceholder(src, options),
      width: width || 800,
      height: height || 600
    };
  }

  /**
   * Optimize image URL with parameters
   */
  private optimizeImageUrl(src: string, options: ImageOptimizationOptions): string {
    const params = new URLSearchParams();
    
    if (options.quality) params.set('q', options.quality.toString());
    if (options.format) params.set('f', options.format);
    if (options.width) params.set('w', options.width.toString());
    if (options.height) params.set('h', options.height.toString());

    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}${params.toString()}`;
  }

  /**
   * Generate blur placeholder for smooth loading
   */
  private generatePlaceholder(src: string, options: ImageOptimizationOptions): string {
    if (options.placeholder === 'empty') return '';
    
    // Generate a tiny blurred version
    return this.optimizeImageUrl(src, {
      width: 10,
      height: 10,
      quality: 10,
      format: 'jpeg'
    });
  }

  /**
   * Preload critical images for better performance
   */
  preloadImage(src: string, options: ImageOptimizationOptions = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.cacheImage(src, img.src);
        resolve();
      };
      
      img.onerror = reject;
      img.src = this.optimizeImageUrl(src, options);
    });
  }

  /**
   * Cache optimized images in memory
   */
  private cacheImage(key: string, data: string): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * Get cached image if available and not expired
   */
  getCachedImage(key: string): string | null {
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  /**
   * Lazy load images with Intersection Observer
   */
  setupLazyLoading(): void {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      this.loadAllImages();
      return;
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          this.loadImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  /**
   * Load individual image
   */
  private loadImage(img: HTMLImageElement): void {
    const src = img.dataset.src;
    const srcSet = img.dataset.srcset;
    
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
    
    if (srcSet) {
      img.srcset = srcSet;
      img.removeAttribute('data-srcset');
    }
    
    img.classList.add('loaded');
  }

  /**
   * Fallback: load all images immediately
   */
  private loadAllImages(): void {
    document.querySelectorAll('img[data-src]').forEach(img => {
      this.loadImage(img as HTMLImageElement);
    });
  }

  /**
   * Convert image to WebP format if supported
   */
  supportsWebP(): Promise<boolean> {
    return new Promise(resolve => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  /**
   * Get optimal image format based on browser support
   */
  async getOptimalFormat(): Promise<'webp' | 'jpeg'> {
    const supportsWebP = await this.supportsWebP();
    return supportsWebP ? 'webp' : 'jpeg';
  }

  /**
   * Clear expired cache entries
   */
  clearExpiredCache(): void {
    const now = Date.now();
    for (const [key, cached] of this.cache.entries()) {
      if (now - cached.timestamp > this.CACHE_DURATION) {
        this.cache.delete(key);
      }
    }
  }
}

// Export singleton instance
export const imageOptimizer = new ImageOptimizer();

// Utility functions for easy use
export const optimizeImage = (
  src: string, 
  options?: ImageOptimizationOptions
): OptimizedImageResult => {
  return imageOptimizer.generateOptimizedSources(src, options);
};

export const preloadCriticalImages = async (images: string[]): Promise<void> => {
  const promises = images.map(src => imageOptimizer.preloadImage(src));
  await Promise.all(promises);
};

// Initialize lazy loading when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      imageOptimizer.setupLazyLoading();
    });
  } else {
    imageOptimizer.setupLazyLoading();
  }
}