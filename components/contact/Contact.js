import { useReducer } from 'react';

const Contact = () => {
  return (
    <div className="mt-10 max-w-[70vw] h-[60vh] m-auto">
      <h2 className="text-5xl text-center">Contact</h2>
      <div className="flex flex-col justify-center gap-10 mt-8">
          <div className="flex-col text-lg text-center my-auto hidden lg:flex">
            <span>Need a problem solved? Send me a message!</span>
          </div>
          <div className="flex flex-col gap-1 justify-center w-[90%] lg:w-[60%] lg:gap-2 m-auto">
            <div className="flex flex-row flex-wrap justify-between gap-1 lg:gap-0">
              <input className="text-black w-[100%] lg:w-[45%] h-8" placeholder="Name" type="text" name="name" ></input>
              <input className="text-black w-[100%] lg:w-[54%] h-8" placeholder="Email" type="email" name="email"></input>
            </div>
            <input className="text-black h-8" placeholder="Subject" type="text" name="email"></input>
            <textarea className="text-black h-28" placeholder="Message" type="text" name="message"></textarea>
            <button className="border-gray-500 h-8 cursor-pointer hover: rounded bg-gray-500">Send</button>
        </div>
      </div>
    </div>

  )
};

export default Contact;