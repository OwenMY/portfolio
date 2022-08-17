import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {motion} from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Projects = () => {
  return (
    <div className="text-center bg-black/50">
      <h2 className="text-6xl underline font-bold pt-10">Projects</h2>
      <Carousel className="max-w-[54em] m-auto" responsive={responsive}>
        {projectData.map(project => <ProjectCard key={project.projectName} project={project}/> )}
      </Carousel>
    </div>
  )
};

export default Projects;
