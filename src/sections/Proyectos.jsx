import React from "react";
import Card from "../components/Card";

import quizApp from "../../public/images/quiz.png";
import SpaceX from "../../public/images/854shots_so.png";
import DevHaicut from "../../public/images/DevHaircut.png";

export default function Proyectos() {
  return (
    <section
      id='proyectos'
      className='max-w-[1200px] m-auto py-20 px-8'>
      <h2 className='text-gradient font-extrabold text-center text-3xl '>
        PROYECTOS
      </h2>
      <div className='grid-cols-12 place-items-center md:grid-cols-12 lg:grid-cols-12 mt-16 grid gap-4  '>
        <Card
          tamaño='h-[13em] xl:h-[14em]'
          cols='col-span-12 sm:col-span-12 lg:col-span-6'
          text={"Snake"}
          paragraph={
            "'Snake', una interpretación moderna del clásico juego de la serpiente, desarrollado con pasión y creatividad utilizando JavaScript. Este emocionante juego combina la nostalgia del pasado con la emoción del presente"
          }
          img={SpaceX}
          websiteLink='https://elmer-coro.github.io/Snake/'
        />
        <Card
          tamaño='h-[13em] xl:h-[14em]'
          cols='col-span-12 sm:col-span-6 lg:col-span-6'
          text='Memory Game'
          paragraph='El proyecto "Memory Game - Desafía tu Memoria" es una emocionante recreación digital del clásico juego de mesa que pondrá a prueba tus habilidades de concentración y memoria.'
          img={DevHaicut}
          websiteLink='https://elmer-coro.github.io/memory-game/src/'
          githubLink='https://github.com/Elmer-Coro/memory-game'
        />
        <Card
          cols='col-span-12 sm:col-span-6 lg:col-span-4'
          text='Gallery Project'
          paragraph='DevHaircut es una galería virtual de imágenes de cortes de cabello que ofrece una fuente inagotable de inspiración para aquellos que buscan un cambio de look y no saben por cual decidir.'
          img={DevHaicut}
        />
        <Card
          cols='col-span-12 sm:col-span-12 lg:col-span-4'
          text='Calculator'
          paragraph='Calculadora web accesible desde cualquier dispositivo con conexión a Internet. Esta herramienta versátil y fácil de usar está diseñada para cubrir una amplia gama de necesidades de cálculo.'
          img={DevHaicut}
        />
        <Card
          cols='col-span-12 sm:col-span-6 lg:col-span-4'
          text='Quizz App'
          paragraph='¡Prepárate para poner a prueba tus conocimientos mi aplicación de cuestionarios, el "Desafío de Conocimientos"! Ya sea que quieras aprender cosas nuevas o poner a prueba lo que ya sabes.'
          img={quizApp}
        />
        <Card
          cols='col-span-12 sm:col-span-6 lg:col-span-6'
          tamaño='h-[13em] xl:h-[14em]'
          text='Dessert Page'
          paragraph='La página web "Kg-Box" es un paraíso virtual para amantes de los postres. Desde exquisitas tortas hasta delicados macarons y tentadoras galletas, esta plataforma te llevará en un viaje culinario lleno de sabor y creatividad.'
          img={DevHaicut}
        />
        <Card
          tamaño='h-[14em]'
          cols='col-span-12 sm:col-span-12 lg:col-span-6'
          text='Dessert Page'
          paragraph='La página web "Kg-Box" es un paraíso virtual para amantes de los postres. Desde exquisitas tortas hasta delicados macarons y tentadoras galletas, esta plataforma te llevará en un viaje culinario lleno de sabor y creatividad.'
          img={DevHaicut}
        />
      </div>
    </section>
  );
}
