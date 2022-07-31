import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import {motion} from 'framer-motion';

const Introduction = () => {
  return (
    <div className="flex flex-row mt-10 md:mt-20 gap-[3rem] max-w-screen min-h-[60vh] justify-center">
      <div className="flex-col">
        <motion.h1
          transition={{duration: 1.5}}
          animate={{y: 0}}
          initial={{opacity: 0, y: -10}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="text-5xl md:text-6xl  max-w-xl max-h-screen font-bold text-center md:text-start"
        >Software Developer And Veteran</motion.h1>
        <motion.p
          transition={{duration: 2}}
          animate={{x: 0}}
          initial={{opacity: 0, x: -70}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="text-center md:text-start max-w-[600px]">A curious software developer with a passion for automation and technology with the goal of creating satisfying and scalable applications.</motion.p>
        <div className="flex flex-row justify-center md:justify-start mt-2 gap-4">
          <motion.a
            href="/files/owen-resume.pdf"
            transition={{duration: .1}}
            animate={{y: 0}}
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            target="_blank"
            className="border-gray-700 bg-gray-700 hover:bg-gray-800 hover:text-gray-400 transition-all ease-in px-5 py-2 italic text-center my-auto rounded-[2em] font-bold text-sm cursor-pointer">
            Resumé
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/owenyoshishige/"
            transition={{duration: .1}}
            animate={{y: 0}}
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            target="_blank"
            className=" flex flex-row items-center p-1 my-auto font-bold font-sans transition-all ease-in hover:text-blue-300 cursor-pointer">
              <AiFillLinkedin className="w-11 h-11 transition-all ease-in fill-gray-300 hover:fill-gray-400 " />
          </motion.a>
          <motion.a
            href="https://github.com/OwenMY"
            transition={{duration: .3}}
            animate={{y: 0}}
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            target="_blank"
            className="p-1 my-auto font-bold font-sans transition-all ease-in cursor-pointer">
              <BsGithub className="w-10 h-10 transition-all ease-in fill-gray-300 hover:fill-gray-400" />
          </motion.a>
        </div>

      </div>
      {/* <div className="relative w-10 h-48 lg:block">
      <Image
        layout="fill"
        // height="200"
        // width="150"
        // sizes="760"
        className=""
        src="/images/profile-pic.png"
        alt="Owen"
      />
      </div> */}

  </div>
  )
};

export default Introduction;