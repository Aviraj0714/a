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
  <div className="loader invert flex justify-center items-center h-screen ">
   <div data-glitch="" className="glitch"><img src="/aviraj-logo.png" alt="" /></div>
</div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

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
