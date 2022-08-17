import Contact from '../contact/Contact';
import AtelierModal from '../projects/modal-data/AtelierModal';
import QNA_API_Modal from '../projects/modal-data/QNA_API_Modal';
import GymX5000Modal from '../projects/modal-data/GymX5000Modal';
import AZTM_Modal from '../projects/modal-data/AZTMModal';
import SDGModal from '../projects/modal-data/SDGModal';

const getModalComponent = (component) => {
  switch(component) {
    case 'Contact':
      return <Contact />
    case 'Atelier':
      return <AtelierModal />
    case 'Questions and Answers API':
      return <QNA_API_Modal />
    case 'GymX5000':
      return <GymX5000Modal />
    case 'Arizona Traffic Maps':
      return <AZTM_Modal />
    case 'Sensor Data Generator':
      return <SDGModal />;
    default:
      return null;
  }
};

export default getModalComponent;