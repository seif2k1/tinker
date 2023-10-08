"use client";
import Image from "next/image";
import "./about.css";
import { lists } from "./list";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className=" about max-w-full overflow-hidden text-white h-full lg:h-[calc(100vh-70px)]  w-full">
      <div className="h-full w-full lg:h-[80%] lg:flex-row md:gap-y-4 gap-y-8 py-5 flex flex-col items-center justify-center">
        {lists.map((list, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between h-[80%] md:h-[100%] md:gap-y-4 flex-col w-full gap-y-8  md:w-[50%] lg:w-[25%]"
            >
              <div className="flex h-full w-full flex-col  gap-y-2 items-center justify-evenly">
                <div>
                  <Image
                    src={list.logo}
                    alt="service"
                    priority
                    layout="response"
                    className=" stroke-red-500 fill-red-500 h-[100px] w-[100px] bg-yellow-500 p-3 rounded-full border-2 border-white"
                  />
                </div>
                <div className="">
                  <h1>{list.title}</h1>
                </div>
              </div>
              <hr className="bg-red-500 text-red-500 w-[80%] " />
              <div className="flex flex-col h-full md:gap-y-4 gap-y-8 w-[80%] items-center  justify-evenly">
                <div className="text-center">
                  <h1 className="text-[15px] text-left lg:text-center">
                    {list.desc}
                  </h1>
                </div>
                <div>
                  <Link
                    className=" cursor-pointer"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                  >
                    <button className="bg-cyan-500 uppercase flex items-center justify-center px-8 py-2 rounded-[20px] ">
                      {list.button}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
