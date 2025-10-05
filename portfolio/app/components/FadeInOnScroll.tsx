import { useState,useEffect, useRef } from "react";

const FadeInOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only proceed if the environment supports IntersectionObserver (prevents server-side rendering errors in Next.js)
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !ref.current) {
        setIsVisible(true); // Default to visible if observer isn't available
        return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible (one-time animation)
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the item is visible
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-transform duration-1000 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll