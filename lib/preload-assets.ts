"use client";

// React 19 Asset Preloading Utilities
export function preloadImage(src: string, priority: 'high' | 'low' = 'high') {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = priority;
  document.head.appendChild(link);
}

export function preloadImages(srcs: string[], priority: 'high' | 'low' = 'low') {
  if (typeof window === 'undefined') return;

  srcs.forEach((src, index) => {
    // Use scheduler API if available (React 19 optimization)
    const loadImage = () => preloadImage(src, index < 3 ? 'high' : 'low');
    
    // Use requestIdleCallback for better hydration compatibility
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
          (window as any).scheduler.postTask(loadImage, { 
            priority: index < 3 ? 'user-visible' : 'background' 
          });
        } else {
          // Fallback: stagger loading to avoid overwhelming the network
          setTimeout(loadImage, index * 100);
        }
      });
    } else {
      // Final fallback for older browsers
      setTimeout(loadImage, index * 100);
    }
  });
}

export function preloadModule(moduleSpecifier: string) {
  if (typeof window === 'undefined') return;
  
  if ('modulePreload' in HTMLLinkElement.prototype) {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = moduleSpecifier;
    document.head.appendChild(link);
  }
}

// Portfolio-specific preloading
export const PORTFOLIO_IMAGES = [
  '/jethroau-cover.png',
  '/livr-studios-cover.png', 
  '/sceneai-cover.png',
  '/dvsa-cover.png',
  '/studybud-cover.png',
  '/stemfm-cover.png',
  '/littlelemon-cover.png',
  '/jnft-cover.webp',
  '/jblog-cover.webp',
  '/ai-environment-generator-cover.webp',
  '/yeestudio-cover.png'
];

export const CRITICAL_IMAGES = [
  '/profile.jpeg',
  '/profile_picture.webp'
];