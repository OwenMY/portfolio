/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';

const ProjectModal = ({projectData}) => {
  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">{projectData.name}</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src={projectData.src}
          alt={projectData}
          loading="eager"
        />
      </div>
      <div className="flex flex-col md:w-[100%]">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <div className="flex flex-row w-[100%] md:w-[60%] flex-wrap self-center gap-1">
          {projectData.badges}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            {projectData.live ?
            <div>
              <a
                href="http://13.57.235.108:3000/"
                target="_blank"
                className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <FaAws className="m-0"/>Live</a>
            </div> : null }
            <div>
              <a
                href={projectData.github}
                target="_blank"
                className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
          {projectData.description}
        </div>
      </div>
    </div>
  )
};

export default ProjectModal;