"use client";

import React, { useState, useEffect } from 'react';
import { Grid } from '@/components/grid';
import { Hero } from '@/components/hero';
import Approch from '@/components/ui/approch';
import Experience from '@/components/ui/experience';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Footer from '@/components/ui/footer';
import Recentproject from '@/components/ui/recentproject';
import { navItems } from '@/data';

const Loading = () => (
  <div className="loader flex flex-col justify-center items-center h-screen relative">
    <div data-glitch="" className="glitch invert">
      <img src="/aviraj-logo.png" alt="Aviraj Logo" />
    </div>
    <div data-glitch="Loading..." className="glitch mt-4">
      Loading...
    </div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(false); // Track if sound has been played
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!soundPlayed && audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
        setSoundPlayed(true); // Mark sound as played
        window.removeEventListener('scroll', handleScroll); // Remove scroll listener
      }
    };

    if (!soundPlayed) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [soundPlayed]);

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
      setSoundPlayed(false); // Allow sound to play again on next scroll
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
         <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Recentproject />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
