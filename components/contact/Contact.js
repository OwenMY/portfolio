import { useReducer } from 'react';

const Contact = () => {
  return (
    <div className="mt-10 max-w-[70vw] h-[60vh] m-auto">
      <h2 className="text-5xl text-center">Contact</h2>
      <div className="flex flex-row justify-center gap-10 mt-8">
          <div className="flex-col text-3xl text-center my-auto hidden lg:flex">
            <span>Need a problem solved? </span>
            <span>Send me a message!</span>
          </div>
          <div className="flex flex-col gap-1 justify-center w-[20em] ">
            <div className="flex flex-row flex-wrap justify-between gap-1 lg:gap-0">
              <input className="text-black w-[100%] lg:w-[39%]" placeholder="Name" type="text" name="name" ></input>
              <input className="text-black w-[100%] lg:w-[60%]" placeholder="Email" type="email" name="email"></input>
            </div>
            <input className="text-black" placeholder="Subject" type="text" name="email"></input>
            <textarea className="text-black" placeholder="Message" type="text" name="message"></textarea>
            <button className="border-gray-500 cursor-pointer hover: rounded bg-gray-500">Send</button>
        </div>
      </div>
    </div>

  )
};

export default Contact;