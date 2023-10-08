"use client";
import Image from "next/image";
import logo from "../../../public/asset/banner_bg.jpg";
import { Link } from "react-scroll";
const Main = () => {
  return (
    <div className="home w-full main h-[calc(100vh-70px)] text-white mt-[70px] bg-main-section flex items-center justify-center ">
      <Image
        src={logo}
        alt="image"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div className="h-1/2 w-[70%] md:w-[80%] lg:w-[60%] flex flex-col items-center justify-around ">
        <div className="w-full">
          <h1 className=" text-[20px] flex-wrap sm:flex-nowrap md:text-[35px] capitalize flex items-center justify-around ">
            <span className="text-[#f89624] font-[800] uppercase">Tinker</span>
            <span className="text-[#33c1cf] font-[800] uppercase">
              Nextjs.13
            </span>
            Template
          </h1>
        </div>
        <div>
          <p>
            Tinker is a responsive CSS template provided by templatemo site.
            This design can be applied for any kind of website. Please mention
            our site to your colleagues. Thank you.
          </p>
        </div>
        <div>
          <Link
            className=" cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            <button className="bg-white px-[22px] py-3 text-black rounded-[25px] flex items-center justify-center">
              let's start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
