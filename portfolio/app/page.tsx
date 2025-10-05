"use client";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-[200vh]">
      <Navbar />
      
      {/* Spacer to push content down and show the scroll effect */}
      <div className="pt-20 text-center text-gray-500">
        <p>Scroll down to test the translucent navbar!</p>
      </div>
    </div>
  );
}