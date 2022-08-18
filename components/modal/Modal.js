import ReactDOM from 'react-dom';
import getModalComponent from './getModalComponent';
import {motion} from 'framer-motion';

const Modal = ({ isShowing, hide, component, projectData = null }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="fixed inset-0 z-[1040] w-screen h-screen bg-black opacity-90"/>
    <div className="fixed inset-0 z-[1050] w-[100%] h-[100%] overflow-y-scroll outline-0" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <motion.div
        className="relative z-[100] h-[100%] max-w-[100%] lg:max-w-[60%] p-[.5em] mx-auto"
        transition={{duration: 1}}
        animate={{y: 0}}
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <div className="h-auto w-sreen overflow-hidden">
          <button type="button" className="absolute right-0 top-[0%] text-[2em] text-bold ml-[.3em] px-[0] py-[1rem] border-none cursor-pointer z-[1060]" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
          </button>
          {getModalComponent(component, projectData)}
        </div>
      </motion.div>
    </div>
  </>, document.body
) : null;

export default Modal;