import React from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Proyectos from "./sections/Proyectos";
import Footer from "./sections/Footer";
import Copyright from "./sections/Copyright";
import Skills from "./sections/Skills";

function App() {
  return (
    <div>
      <div className='bg-mgh dark:bg-slate-900'>
        <Nav />
        <Hero />
      </div>
      <div className='dark:bg-slate-900'>
        <Proyectos />
        <Skills />
      </div>
      <div className='dark:bg-slate-900 bg-blue-900'>
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
