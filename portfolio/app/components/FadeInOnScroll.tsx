import { useState,useEffect, useRef } from "react";

const FadeInOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only proceed if the environment supports IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !ref.current) {
        setIsVisible(true); 
        return;
    }

    // FIX 1: Copy ref.current to a local variable to satisfy the hook dependency warning
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    observer.observe(currentRef); // Use local variable for observation

    return () => {
      if (currentRef) { // Use the local variable in the cleanup function
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this only runs once

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-1000 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  );
};


export default FadeInOnScroll