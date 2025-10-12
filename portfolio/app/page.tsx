"use client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import ContactSection from "./pages/Contact";
import FadeInOnScroll from "./components/FadeInOnScroll";
import About from "./pages/About";
import WorksSection from "./pages/WorkSection";
import MouseFollower from "./components/MouseFollower";




export default function App() {

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if window is available before adding event listener (Next.js server component safety)
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
        // CHANGE: Simplified handler to only track viewport coordinates (clientX/clientY)
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this only runs once on mount

  // Dynamic style for the background gradient
  const backgroundStyle = {
    // CHANGE: Adjusted opacity (0.15) and spread (50%) for better visibility across the dark theme
    backgroundColor: '#0a0a0a', 
    backgroundImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(79, 70, 229, 0.15) 0%, rgba(10, 10, 10, 1) 50%)`,
    backgroundAttachment: 'fixed', // ESSENTIAL for the gradient to follow the mouse while scrolling
  };
  
  // Positional adjustment for the MouseFollower
  const followerY = cursorPos.y + (typeof window !== 'undefined' ? window.scrollY : 0);

  return (
    <div className="font-sans antialiased text-white-900 min-h" style={backgroundStyle}>
      {/* <MouseFollower x={cursorPos.x} y={followerY} /> */}
      <Navbar />
      <Landing />
      <FadeInOnScroll>
            <About />
      </FadeInOnScroll>
      <FadeInOnScroll>
            <WorksSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
            <ContactSection />
      </FadeInOnScroll>
      <footer className="py-6 text-center text-sm text-gray-500 ">
        &copy; {new Date().getFullYear()} Shyamkrishna B Nair. Creative Developer. 
      </footer>
    </div>
  );
}