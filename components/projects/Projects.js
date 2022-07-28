import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {motion} from 'framer-motion';
import GymX5000 from './GymX5000';
import Atelier from './Atelier';
import QnA from './QnA_API';
import ArizonaTrafficMaps from './ArizonaTrafficMaps';

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
    <motion.div className="text-center">
      <h2 className="text-6xl underline font-bold mt-10">Projects</h2>
      <Carousel className="max-w-[54em] m-auto" responsive={responsive}>
        <Atelier />
        <QnA />
        <GymX5000 />
        <ArizonaTrafficMaps />
      </Carousel>
    </motion.div>
  )
};

export default Projects;
