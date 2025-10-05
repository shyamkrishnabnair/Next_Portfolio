"use client";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div className="font-serif antialiased text-gray-900 bg-gray-50 min-h-[200vh]">
      <Navbar />
      <Landing />
    </div>
  );
}