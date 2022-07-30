import Contact from '../contact/Contact';
import AtelierModal from '../projects/modal-data/AtelierModal';
import QNA_API_Modal from '../projects/modal-data/QNA_API_Modal';

const getModalComponent = (component) => {
  switch(component) {
    case 'Contact':
      return <Contact />
    case 'Atelier':
      return <AtelierModal />
    case 'QNA':
      return <QNA_API_Modal />
    default:
      return null;
  }
};

export default getModalComponent;