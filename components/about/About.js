import {motion} from 'framer-motion';

const About = () => {
  return (
    <header className="flex flex-col w-[70vw] m-auto pt-10 pb-20 justify-start content-start">
      <motion.h2
        role="heading"
        aria-level="1"
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
        <p className="text-start break-normal md:overflow-hidden overflow-y-auto max-h-[40vh] md:max-h-max">Hey all! My names Owen. I was born and raised in Hawaii but currently reside in Tempe, Arizona. I am a multi-talented software developer with a diverse background of experience, from fixing aircraft in the Marines to zapping out metal to create medical molds for plastic injection molding. My interests and passions are in computer science, automation and technology.  I enjoy working in cross functional teams and with my &quot;figure it out&quot; mindset, success has always followed me. Outside of work, I play disc golf, fish at local lakes and cook new foods.
        </p>
      </motion.div>
    </header>
  );
};

export default About;