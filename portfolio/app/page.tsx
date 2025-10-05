"use client";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import ContactSection from "./pages/Contact";
import FadeInOnScroll from "./components/FadeInOnScroll";
import About from "./pages/About";
import WorksSection from "./pages/WorkSection";

export default function App() {
  return (
    <div className="font-sans antialiased text-white-900 bg-gray-950 min-h">
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