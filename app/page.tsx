'use client'

import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificate from "./components/sections/Certificate";
import BackgroundGrid from './components/ฺGridBackground';
import LogoAnimation from "./components/LogoAnimation";

export default function Home() {
  return (
    <div className="flex flex-col px-5 gap-14 md:gap-20 lg:px-20 ">
      <div className="w-full" id='home'>
      <BackgroundGrid className="absolute inset-0 w-full mt-16" />
      <HeroSection />
      </div>
      <div id='about' className="">
        <About/>
      </div>
      <div id='experience'>
        <Experience/>
      </div>
      <div id='skill'>
        <Skills/>
      </div>
      <div id='project'>
        <Projects/>  
      </div>
      <div id="cert">
        <Certificate/>
      </div>
      <div>
      <LogoAnimation/>
      </div>
      
    </div>
  );
}
