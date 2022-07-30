import Contact from '../contact/Contact';
import AtelierModal from '../projects/modal-data/AtelierModal';

const getModalComponent = (component) => {
  switch(component) {
    case 'contact':
      return <Contact />
    case 'Atelier':
      return <AtelierModal />
    default:
      return null;
  }
};

export default getModalComponent;