import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <div className="flex flex-col sm:flex-row  justify-between px-2 py-3 bg-black text-white">
      <div className="flex items-center ml-5">
        <span className="m-auto p-2 text-2xl italic font-bold font-sans ">Owen Yoshishige</span>
      </div>
      <div className="flex flex-row gap-2 justify-center sm:justify-center items-center sm:mr-5">
        <motion.a
          href="https://www.linkedin.com/in/owenyoshishige/"
          transition={{duration: .1}}
          animate={{y: 0}}
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className=" flex flex-row items-center p-1 m-1 font-bold font-sans transition-all ease-in hover:text-blue-300 cursor-pointer">
            <AiFillLinkedin className="w-11 h-11 transition-all ease-in fill-gray-300 hover:fill-gray-400 " />
        </motion.a>
        <motion.a
          href="https://github.com/OwenMY"
          transition={{duration: .3}}
          animate={{y: 0}}
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="p-1 m-1 font-bold font-sans transition-all ease-in cursor-pointer">
            <BsGithub className="w-10 h-10 transition-all ease-in fill-gray-300 hover:fill-gray-400  " />
        </motion.a>
        <motion.a
          transition={{duration: .5}}
          animate={{y: 0}}
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="p-2 m-1 font-bold font-sans border-2 transition-all ease-in border-gray-800 cursor-pointer text-gray-100 bg-gray-800 rounded hover:text-gray-500 hover:bg-inherit ">
            Contact
        </motion.a>
      </div>
    </div>
  )
};

export default NavBar;