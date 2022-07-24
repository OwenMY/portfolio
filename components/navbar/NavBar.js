import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between px-2 py-3 bg-black text-white">
      <div className="flex items-center ml-10">
        <span className="m-auto p-2 text-2xl italic font-bold font-sans ">Owen Yoshishige</span>
      </div>
      <div className="flex flex-row gap-2 items-center mr-20">
        <a
          href="https://www.linkedin.com/in/owenyoshishige/"
          className=" flex flex-row items-center p-1 m-1 font-bold font-sans transition-all ease-in hover:text-blue-300 cursor-pointer">
            <AiFillLinkedin className="w-11 h-11 transition-all ease-in fill-gray-300 hover:fill-gray-400 " />
        </a>
        <a
          href="https://github.com/OwenMY"
          className="p-1 m-1 font-bold font-sans transition-all ease-in cursor-pointer">
            <BsGithub className="w-10 h-10 transition-all ease-in fill-gray-300 hover:fill-gray-400  " />
        </a>
        <a
          className="p-2 m-1 font-bold font-sans border-2 transition-all ease-in border-gray-800 cursor-pointer text-gray-100 bg-gray-800 rounded hover:text-gray-500 hover:bg-inherit ">
            Hire Me
        </a>
      </div>
    </div>
  )
};

export default NavBar;