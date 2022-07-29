import {motion} from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col w-[70vw] m-auto mt-10 mb-20 justify-start content-start">
      <motion.h2
        transition={{duration: 1}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="text-start font-bold text-3xl mb-5">About Me</motion.h2>
      <motion.div
        transition={{duration: 1.5}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="content-center justify-center flex flex-col flex-wrap max-w-[70vw] m-auto">
        <p className="text-start break-normal">I am a former Marine turned software developer, born and raised in Hawaii. You can find me taking on challenging work tickets and sharing the insights with my team mates. Outside of coding, I play alot of disc golf and fish in local lakes.</p>
      </motion.div>
    </div>
  );
};

export default About;