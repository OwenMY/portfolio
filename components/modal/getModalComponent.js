import Contact from '../contact/Contact';
import ProjectModal from '../projects/modal-data/ProjectModal';

const getModalComponent = (component, projectData) => {
  console.log(projectData)
  if (component === 'Contact') {
    return <Contact />
  } else {
    return <ProjectModal projectData={projectData} />
  }
};

export default getModalComponent;