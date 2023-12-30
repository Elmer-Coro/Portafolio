import React from "react";
import "@fontsource/roboto";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Proyectos from "./sections/Proyectos";
import Footer from "./sections/Footer";
import Copyright from "./sections/Copyright";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className='relative'>
      <div className='absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />

      <Nav />
      <Hero />

      <Proyectos />
      <Skills />

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
