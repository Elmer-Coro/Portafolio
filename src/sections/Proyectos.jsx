import React from "react";
import Card from "../components/Card";
import snake from "../../public/images/snake.jpg";
import memoryGame from "../../public/images/memoryGame.png";
import calculadora from "../../public/images/calculadora.png";
import kgBox from "../../public/images/kg-box.png";
import devHaircut from "../../public/images/devHaircut.png";
import quizApp from "../../public/images/quizApp.png";

export default function Proyectos() {
  return (
    <section
      id='proyectos'
      className='max-w-[1200px] m-auto py-20 px-8'>
      <h2 className='dark:text-gray-300 font-bold text-blue-900 text-center text-3xl'>
        PROYECTOS
      </h2>
      <div className='grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-16 grid gap-8'>
        <Card
          text={"Snake"}
          paragraph={
            "'Snake', una interpretación moderna del clásico juego de la serpiente, desarrollado con pasión y creatividad utilizando JavaScript. Este emocionante juego combina la nostalgia del pasado con la emoción del presente"
          }
          img={snake}
          websiteLink='https://elmer-coro.github.io/Snake/'
        />
        <Card
          text='Memory Game'
          paragraph='El proyecto "Memory Game - Desafía tu Memoria" es una emocionante recreación digital del clásico juego de mesa que pondrá a prueba tus habilidades de concentración y memoria.'
          img={memoryGame}
          websiteLink='https://elmer-coro.github.io/memory-game/src/'
          githubLink='https://github.com/Elmer-Coro/memory-game'
        />
        <Card
          text='Gallery Project'
          paragraph='DevHaircut es una galería virtual de imágenes de cortes de cabello que ofrece una fuente inagotable de inspiración para aquellos que buscan un cambio de look y no saben por cual decidir.'
          img={devHaircut}
        />
        <Card
          text='Calculator'
          paragraph='Calculadora web accesible desde cualquier dispositivo con conexión a Internet. Esta herramienta versátil y fácil de usar está diseñada para cubrir una amplia gama de necesidades de cálculo.'
          img={calculadora}
        />
        <Card
          text='Quizz App'
          paragraph='¡Prepárate para poner a prueba tus conocimientos mi aplicación de cuestionarios, el "Desafío de Conocimientos"! Ya sea que quieras aprender cosas nuevas o poner a prueba lo que ya sabes.'
          img={quizApp}
        />
        <Card
          text='Dessert Page'
          paragraph='La página web "Kg-Box" es un paraíso virtual para amantes de los postres. Desde exquisitas tortas hasta delicados macarons y tentadoras galletas, esta plataforma te llevará en un viaje culinario lleno de sabor y creatividad.'
          img={kgBox}
        />
      </div>
    </section>
  );
}
