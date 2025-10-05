"use client";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import ContactSection from "./pages/Contact";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-blue ">
      <Navbar />
      <Landing />
      <ContactSection />
      <footer className="py-6 text-center text-sm text-gray-500 ">
        &copy; {new Date().getFullYear()} Shyamkrishna B Nair. Creative Developer. 
      </footer>
    </div>
  );
}