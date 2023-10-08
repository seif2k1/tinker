import React from "react";

const Contact = () => {
  return (
    <div className="contact h-[300px] w-full bg-gray-400 flex items-center justify-center">
      <div className="md:h-[80%] md:w-[35%] h-full w-full text-white text-center flex flex-col items-center justify-evenly">
        <h1 className=" capitalize text-[30px]">Contact us</h1>
        <hr />
        <p>
          Nunc posuere non quam at pharetra. Mauris tincidunt purus vel ultrices
          malesuada. Integer euismod erat ut nulla ultrices, ut auctor eros
          feugiat.
        </p>
        <button className="bg-cyan-500 px-6 py-3 uppercase rounded-[35px]">
          send us a message
        </button>
      </div>
    </div>
  );
};

export default Contact;
