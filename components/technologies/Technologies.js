import {FaReact, FaAws} from 'react-icons/fa';
import {SiJavascript, SiExpress, SiMongodb, SiPostgresql,
   SiTailwindcss, SiSass, SiJest, SiTestinglibrary, SiNextdotjs, SiVercel, SiChartdotjs} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import {motion} from 'framer-motion';

// const technology_style = ''
const Technologies = () => {
  return (
    <div className="flex flex-col justify-center bg-black/[.5] p-10 m-auto">
      <motion.h2
        transition={{duration: 1}}
        animate={{x: 0}}
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="text-[2em] sm:text-4xl md:text-6xl underline m-5 text-center font-bold">Technologies</motion.h2>
      <motion.div
        transition={{duration: 2}}
        animate={{x: 0}}
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="flex flex-col md:flex-row md:flex-wrap w-[80vw] overflow-y-auto sm:max-h-max text-center items-center mx-auto mt-1 p-10  gap-3 md:gap-8 justify-center">
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiJavascript className="m-0 p-0"/>Javascript</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <FaReact className="inline m-0 p-0"/>React</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiNextdotjs className="inline m-0 p-0"/>Next</span>
        <span className="flex flex-row items-center px-3 py-2 font-bold text-xl">
          <SiChartdotjs className="inline m-0 p-0"/>Chart</span>
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
      </motion.div>
    </div>
  )
};

export default Technologies;