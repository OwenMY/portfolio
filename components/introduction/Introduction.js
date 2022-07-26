import Image from 'next/image';
import {motion} from 'framer-motion';

const Introduction = () => {
  return (
    <div className="flex flex-row mt-20 gap-[3rem] max-w-screen min-h-[80vh] justify-center">
      <div className="flex-col">
        <motion.h1
          transition={{duration: 1.5}}
          animate={{y: 0}}
          initial={{opacity: 0, y: -10}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="text-6xl max-w-xl max-h-screen font-bold text-start"
        >Software Developer And Veteran</motion.h1>
        <motion.p
          transition={{duration: 2}}
          animate={{x: 0}}
          initial={{opacity: 0, x: -70}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="text-start max-w-[600px]">A curious software developer with a passion for automation and technology.
          Making websites that run faster then your refridgerator (Im kidding)</motion.p>

      </div>
      <div className="block w-[200px]">
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