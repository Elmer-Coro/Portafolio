import React from "react";
import Blur from "./components/Blur";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Proyectos from "./sections/Proyectos";
import Footer from "./sections/Footer";
import Copyright from "./sections/Copyright";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className=''>
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
