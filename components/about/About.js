import {motion} from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col w-[70vw] m-auto mt-10 mb-20 justify-start content-start">
      <motion.h2
        transition={{duration: 1}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="text-start font-bold text-3xl mb-10">About Me</motion.h2>
      <motion.div
        transition={{duration: 1.5}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="content-center justify-center flex flex-col flex-wrap max-w-[70vw] m-auto">
        <p className="text-start break-normal">From fixing aircraft in the Marines to coding CNC machines, I have a breadth of experience.  During my time working in the machining industry, I created programs for CNC machines that would cut metal to create intricate parts.  Outside of coding, I play alot of disc golf and fish in local lakes.</p>
      </motion.div>
    </div>
  );
};

export default About;