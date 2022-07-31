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
        <p className="text-start break-normal md:overflow-hidden overflow-y-auto max-h-[40vh] md:max-h-max">Hey all! My names Owen. I am a multi-talented individual with a diverse background of experience, from fixing aircraft in the Marines to zapping out metal to create medical molds for plastic injection molding. These experiences come with many transferable skills that are too many to list. But to name a few, comming from the Marine Corps, I always strive for excellence and seek to take on more responsibility everywhere I go.  Being able to adapt quickly to change and handle short deadlines has been crucial to my success as a software engineer, especially when it came to building an MVP full-stack application within 48 hours. Outside of coding, I play alot of disc gold and fish at local lakes.
        </p>
      </motion.div>
    </div>
  );
};

export default About;