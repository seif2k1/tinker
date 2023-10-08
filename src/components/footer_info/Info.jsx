import React from "react";

const Info = () => {
  return (
    <div className="md:h-[40%] h-full gap-y-5 p-5 md:p-0 w-full md:flex-row flex flex-col items-center justify-around text-white bg-[#373a3c]">
      <div className="h-full w-full md:w-[33%] flex items-center justify-center">
        <div className="flex flex-col  justify-center w-full h-full md:w-[80%] md:h-[80%] text-left">
          <h1 className="text-[25px] text-center md:text-left">
            <span className="text-yellow-500 text-[45px] ">T</span>INKER
          </h1>
          <h3>Copyright © 2023 Design: Seif2k1</h3>
        </div>
      </div>
      <div className="h-full w-full md:w-[33%] flex items-center justify-center ">
        <div className="flex flex-col justify-around w-full h-full md:w-[90%] md:h-[80%] text-left">
          <h1 className="text-center md:text-left">Location</h1>
          <div className="flex items-center w-full justify-around">
            <div className="w-full">
              <p>46 Raffles Ave, Singapore 039803 </p>
            </div>
            <p className="h-full w-[1px] me-5 bg-white"></p>
            <div className="w-full">
              <p>12 Republic Blvd, Singapore 038975</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full md:w-[33%] flex items-center justify-center  ">
        <div className="flex flex-col justify-around w-full h-full md:w-[80%] md:h-[80%] text-left">
          <h1 className="text-center md:text-left">MORE INFO</h1>
          <div className="flex text-left flex-col w-full justify-around">
            <p>Phone: 040-040-0440</p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
