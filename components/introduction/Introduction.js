import Image from 'next/image';
import {motion} from 'framer-motion';

const Introduction = () => {
  return (
    <div className="flex flex-row mt-10 md:mt-20 gap-[3rem] max-w-screen min-h-[70vh] justify-center">
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
      </div>
      <div className="w-[200px] hidden lg:block">
      <Image
        layout="responsive"
        height="100"
        width="100"
        sizes="760"
        className="rounded-[50%]"
        src="/images/profile-pic.jpeg"
        alt="Owen"
      />
      </div>

  </div>
  )
};

export default Introduction;