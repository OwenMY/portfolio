import ReactDOM from 'react-dom';
import Contact from '../contact/Contact';
import {motion} from 'framer-motion';

const Modal = ({ isShowing, hide, component }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="fixed inset-0 z-[1040] w-screen h-screen bg-black opacity-90"/>
    <div className="fixed inset-0 z-[1050] w-[100%] h-[100%] overflow-x-hidden overflow-y-auto outline-0" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <motion.div
        className="relative z-[100] h-[100%] max-w-[80%] lg:max-w-[50%] p-[.5em] m-auto"
        transition={{duration: 1}}
        animate={{y: 0}}
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <div className="h-auto">
        <button type="button" className="absolute right-[5%] text-[2em] text-bold rounded ml-[.5em] px-[.3rem] py-[1rem] border-none" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <Contact />
        </div>
      </motion.div>
    </div>
  </>, document.body
) : null;

export default Modal;