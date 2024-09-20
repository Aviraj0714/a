"use client";

import React from 'react';
import { Grid } from '@/components/grid';
import { Hero } from '@/components/hero';
import Approch from '@/components/ui/approch';
import Experience from '@/components/ui/experience';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Footer from '@/components/ui/footer';
import Recentproject from '@/components/ui/recentproject';
import { navItems } from '@/data';

const Home = () => {
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