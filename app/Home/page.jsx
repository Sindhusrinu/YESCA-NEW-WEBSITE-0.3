"use client";

import { useEffect, useRef } from "react";
import HomePage from "@/app/Components/HomePage/page";
import HomeFirstSection from "@/app/SectionsContent/HomeFirstSection";

export default function HomeMain() {
  const mainRef = useRef(null);

  return (
    <main
      ref={mainRef}
      className="relative w-full min-h-screen  overflow-hidden scroll-smooth"
    >
      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500" />

      {/* Section 1 */}
      <section
        id="section1"
        className="w-full h-screen text-white relative flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg,rgba(45, 53, 142, 1) 0%, rgba(117, 167, 218, 1) 85%, rgba(117, 167, 218, 1) 100%)",
        }}
      >
        <HomePage />
        <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 z-0"></div>
        <HomeFirstSection />
      </section>
    </main>
  );
}
