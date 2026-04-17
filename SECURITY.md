# Security Policy

This document outlines the security measures implemented in this portfolio website to protect against common web vulnerabilities.

## Implemented Security Measures

### 1. Content Security Policy (CSP)
Strict CSP headers prevent XSS and code injection attacks by controlling resource loading.

**Implemented:**
- `default-src 'self'` - Only load from same origin
- `script-src` - Controlled script execution
- `style-src` - Controlled stylesheet loading
- `img-src` - Restricted image sources
- `connect-src` - API connection restrictions
- `frame-ancestors 'none'` - Clickjacking protection
- `object-src 'none'` - No plugin execution
- `base-uri 'self'` - Prevent base tag manipulation
- `upgrade-insecure-requests` - Force HTTPS

### 2. HTTP Security Headers
Multiple security headers added to the HTML:

- **X-Content-Type-Options: nosniff** - Prevent MIME sniffing
- **X-Frame-Options: DENY** - Block iframe embedding
- **X-XSS-Protection: 1; mode=block** - XSS filter
- **Referrer-Policy: strict-origin-when-cross-origin** - Control referrer data
- **Permissions-Policy** - Restrict browser APIs (camera, mic, geolocation)

### 3. HTTPS Enforcement
Automatic redirect from HTTP to HTTPS in production:
```javascript
if (location.protocol !== 'https:' && !location.hostname.includes('localhost')) {
  location.replace('https://' + location.hostname + location.pathname + ...);
}
```

### 4. Clickjacking Protection
Multiple layers of protection:
- X-Frame-Options header
- frame-ancestors CSP directive
- JavaScript frame buster in body

### 5. Input Sanitization
Created `src/utils/security.ts` with:
- `sanitizeString()` - HTML entity encoding
- `isMaliciousInput()` - Pattern detection for XSS attempts
- `secureStorage` - Validated localStorage wrapper
- `isSafeUrl()` - URL validation

### 6. Secure localStorage
Protected localStorage usage:
- Theme storage with validation
- No sensitive data storage
- Dangerous key filtering (token, password, secret, apiKey, auth)
- Try-catch error handling

### 7. No dangerous patterns found in code:
- ✅ No `dangerouslySetInnerHTML` usage
- ✅ No `eval()` calls
- ✅ No `document.write()`
- ✅ No inline scripts (except security checks)

### 8. Prototype Pollution Protection
Sanitization utilities prevent prototype pollution through:
- Blocking `__proto__`, `constructor`, `prototype` keys
- Safe object merging
- Type validation

### 9. Rate Limiting & Debouncing
Security utilities include:
- `createRateLimiter()` - API call throttling
- `debounce()` - Prevent rapid-fire user actions
- `generateSecureId()` - Cryptographically random IDs

### 10. Service Worker Security
Service Worker implements:
- Same-origin caching only
- No external request caching
- Secure asset loading

## Reporting Security Issues

If you discover a security vulnerability, please:
1. Do NOT open a public issue
2. Email: mohamed.atef.23@gmail.com
3. Allow time for investigation and patch before disclosure

## Security Checklist

- [x] CSP implemented
- [x] HTTPS enforced
- [x] Clickjacking protected
- [x] XSS prevention
- [x] Input sanitization
- [x] Secure storage
- [x] No eval/innerHTML
- [x] Frame busting
- [x] MIME sniffing prevented
- [x] Permissions restricted

## Dependencies Security

Regularly check for vulnerabilities:
```bash
npm audit
npm audit fix
```

## Deployment Security Notes

When deploying to production:
1. Ensure HTTPS is configured
2. Verify CSP doesn't break functionality
3. Test all interactive features
4. Check browser console for CSP violations
5. Verify security headers in response

---

Last updated: April 2025
