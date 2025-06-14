import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to a comfortable reading position (not the very top)
    window.scrollTo({
      top: 120, // Scroll past the navigation bar
      behavior: 'smooth'
    });
  }, [location]);
}