import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="fixed inset-0 z-[1040] w-screen h-screen bg-black opacity-50"/>
    <div className="fixed inset-0 z-[1050] w-[100%] h-[100%] overflow-x-hidden overflow-y-auto outline-0" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="relative bg-white z-[100] max-w-[500px] p-[2rem] mx-[1.75rem] my-auto">
        <div className="flex flex-end">
          <button type="button" className="text-[.9em] text-bold rounded ml-[.5em] px-[.3rem] py-[1rem] border-none" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, Im a modal.
        </p>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;