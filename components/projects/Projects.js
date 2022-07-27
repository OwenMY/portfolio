import GymX5000 from './GymX5000';
import Atelier from './Atelier';

const Projects = () => {
  return (
    <div className="text-center m-auto">
      <h2 className="text-6xl underline font-bold mt-10">Projects</h2>
      <div className="flex flex-row">
        <Atelier />
        <GymX5000 />
      </div>
    </div>
  )
};

export default Projects;
