/**
 * Security Utilities
 * Helper functions for secure data handling and sanitization
 */

/**
 * Sanitize a string to prevent XSS attacks
 * Removes HTML tags and dangerous characters
 */
export function sanitizeString(input: string): string {
  if (!input || typeof input !== 'string') return '';
  
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Secure LocalStorage wrapper with validation
 */
export const secureStorage = {
  /**
   * Set an item in localStorage with JSON validation
   */
  set(key: string, value: unknown): void {
    try {
      // Validate key is not malicious
      if (!key || typeof key !== 'string' || key.length > 100) {
        console.warn('Invalid storage key');
        return;
      }
      
      // Validate value
      if (value === undefined || value === null) {
        console.warn('Cannot store null or undefined');
        return;
      }
      
      // Check for potentially dangerous keys
      const dangerousKeys = ['token', 'password', 'secret', 'apiKey', 'auth'];
      if (dangerousKeys.some(dk => key.toLowerCase().includes(dk))) {
        console.warn(`Potentially dangerous key detected: ${key}`);
        return;
      }
      
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error('Storage set error:', error);
    }
  },
  
  /**
   * Get an item from localStorage with type safety
   */
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  },
  
  /**
   * Remove an item from localStorage
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  },
  
  /**
   * Clear all items from localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }
};

/**
 * Validate if a URL is safe (same-origin or trusted domain)
 */
export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    
    // Only allow same-origin or known safe domains
    const safeDomains = [
      'mohammedalghanam.com',
      'www.mohammedalghanam.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'github.com',
      'linkedin.com',
      'twitter.com',
      'x.com'
    ];
    
    // Same origin is always safe
    if (parsed.origin === window.location.origin) {
      return true;
    }
    
    // Check against safe domains
    return safeDomains.some(domain => parsed.hostname.includes(domain));
  } catch {
    return false;
  }
}

/**
 * Prevent prototype pollution in objects
 */
export function safeObjectAssign<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const dangerousKeys = ['__proto__', 'constructor', 'prototype'];
  
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // Skip dangerous keys
      if (dangerousKeys.includes(key)) {
        continue;
      }
      
      if (typeof source[key] === 'object' && source[key] !== null) {
        (target as Record<string, unknown>)[key] = safeObjectAssign(
          (target[key] as Record<string, unknown>) || {},
          source[key] as Record<string, unknown>
        );
      } else {
        (target as Record<string, unknown>)[key] = source[key];
      }
    }
  }
  
  return target;
}

/**
 * Rate limiting helper for API calls
 */
export function createRateLimiter(maxRequests: number, timeWindow: number) {
  const requests: number[] = [];
  
  return function canMakeRequest(): boolean {
    const now = Date.now();
    
    // Remove old requests outside the time window
    const cutoff = now - timeWindow;
    while (requests.length > 0 && requests[0] < cutoff) {
      requests.shift();
    }
    
    if (requests.length < maxRequests) {
      requests.push(now);
      return true;
    }
    
    return false;
  };
}

/**
 * Debounce function to prevent rapid-fire actions
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if user input is potentially malicious
 */
export function isMaliciousInput(input: string): boolean {
  const maliciousPatterns = [
    /<script[^>]*>/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /url\s*\(\s*javascript:/i,
    /data:text\/html/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /__proto__/,
    /constructor/,
    /prototype/
  ];
  
  return maliciousPatterns.some(pattern => pattern.test(input));
}

/**
 * Generate a secure random ID
 */
export function generateSecureId(length: number = 32): string {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
