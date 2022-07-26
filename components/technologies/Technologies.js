import {FaReact, FaAws} from 'react-icons/fa';
import {SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiSass, SiJest, SiTestinglibrary, SiNextdotjs, SiVercel} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';

// const technology_style = ''
const Technologies = () => {
  return (
    <div className="flex flex-col justify-center bg-black/[.5] p-10 m-auto max-h-[20em]">
      <h2 className="text-6xl underline text-center font-bold">Technologies</h2>
      <div className="flex flex-row flex-wrap w-[90vw] overflow-hidden text-center items-center mx-auto mt-1 p-10 gap-8 justify-center">
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <FaReact className="inline m-0 p-0"/>React</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiNextdotjs className="inline m-0 p-0"/>Next</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiJavascript className="m-0 p-0"/>Javascript</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiExpress className="inline m-0 p-0"/>Express</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiMongodb className="inline m-0 p-0"/>MongoDB</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <DiMysql className="inline m-0 p-0"/>MySQL</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiPostgresql className="inline m-0 p-0"/>PostgreSQL</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <FaAws className="inline m-0 p-0"/>AWS</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiVercel className="inline m-0 p-0"/>Vercel</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiSass className="inline m-0 p-0"/>SASS</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiTailwindcss className="inline m-0 p-0"/>Tailwind</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiJest className="inline m-0 p-0"/>Jest</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiTestinglibrary className="inline m-0 p-0"/>Testing Library</span>
      </div>
    </div>
  )
};

export default Technologies;