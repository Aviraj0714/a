import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import Approch from "@/components/ui/approch";
import Experience from "@/components/ui/experience";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/ui/footer";
import { EnquiryForm } from "@/components/ui/form";


import Recentproject from "@/components/ui/recentproject";
import { navItems } from "@/data";
import Head from "next/head";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    
    <main className="relative scroll-smooth mx-auto sm:px-10 px-5 justify-center items-center flex-col overflow-clip bg-black-100 text-white">
      <div className="max-w-7xl lg:ml-20 md:ml:20 w-full">
        
        <FloatingNav navItems={navItems}></FloatingNav>
       <Hero></Hero>
       <Grid></Grid>
       <Recentproject></Recentproject>
       <Experience></Experience>
       <Approch></Approch>
       <Footer></Footer>
      </div>
    </main>
    
  );
}
