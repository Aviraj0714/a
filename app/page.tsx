import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Recentproject from "@/components/ui/recentproject";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative mx-auto sm:px-10 px-5 justify-center items-center flex-col overflow-hidden  bg-black-100 text-white">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
       <Hero></Hero>
       <Grid></Grid>
       <Recentproject></Recentproject>
      </div>
    </main>
    
  );
}
