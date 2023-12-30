import React from "react";
import Icon from "../components/Icon";
import {
  SvgHtml,
  SvgCss,
  SvgFigma,
  SvgJavascript,
  SvgNode,
  SvgReact,
  SvgTailwind,
  SvgGithub2,
  SvgBootstrap,
} from "../icons/Icons";

export default function Skills() {
  return (
    <section
      id='habilidades'
      className='max-w-[1000px] m-auto py-20 px-8'>
      <h2 className='text-gradient font-extrabold text-center text-3xl mb-8'>
        HABILIDADES
      </h2>
      <p className='text-white/70 mb-4 text-center font-extralight'>
        Mi viaje en el mundo del desarrollo web ha estado marcado por la
        dedicación a la excelencia, la creatividad y la búsqueda constante de
        soluciones innovadoras. A lo largo de mi carrera, he cultivado
        habilidades sólidas en JavaScript, CSS y HTML, y he aplicado esta
        experiencia en una amplia gama de proyectos emocionantes.
      </p>
      <div className='grid place-items-center place-content-center gap-4 grid-cols-12 py-20 auto-rows-auto '>
        <Icon
          icon={<SvgGithub2 />}
          sizes='col-span-2'
        />
        <Icon
          icon={<SvgFigma />}
          sizes='col-span-4 '
        />
        <Icon
          icon={<SvgTailwind />}
          sizes='col-span-2'
        />
        <Icon
          icon={<SvgBootstrap />}
          sizes='col-span-4'
        />

        <Icon
          icon={<SvgHtml />}
          sizes='col-span-4 '
        />
        <Icon
          icon={<SvgCss />}
          sizes='col-span-2'
        />
        <Icon
          icon={<SvgJavascript />}
          sizes='col-span-4'
        />
        <Icon
          icon={<SvgNode />}
          sizes='col-span-2'
        />
        <Icon
          icon={<SvgReact />}
          sizes='col-span-2'
        />
        <Icon
          icon={<SvgReact />}
          sizes='col-span-4 '
        />
        <Icon
          icon={<SvgHtml />}
          sizes='col-span-2  '
        />
        <Icon
          icon={<SvgJavascript />}
          sizes='col-span-4'
        />
      </div>
    </section>
  );
}
