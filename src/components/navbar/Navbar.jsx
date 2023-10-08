"use client";

import { useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [isSelected, setIsSelected] = useState(null);
  return (
    <div className=" relative">
      <div
        className={`duration-[500ms] w-full h-[70px]  flex items-center bg-white text-black z-[99] justify-around fixed top-0 right-0 left-0`}
      >
        <div className="tinker">
          <Link
            to="home"
            className=" cursor-pointer"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            <h1 className=" uppercase text-[20px] font-[800]">
              <span className=" text-[30px] text-[#f7c552]">T</span>inker
            </h1>
          </Link>
        </div>
        <div
          className={`${isActive ? "Humberger" : " Humberger-close"}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${
            isActive
              ? "hidden lg:flex text-[13px] lg:w-[50%]"
              : " w-full flex items-center justify-center fixed inset-0 bg-white text-gray-600"
          }`}
        >
          <ul
            className={`flex lg:flex-row flex-col h-[80%]  items-center justify-evenly w-full uppercase `}
          >
            <Link
              className=" cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <li
                className={`${isSelected === 0 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(0);
                  setIsActive(true);
                }}
              >
                home
              </li>
            </Link>
            <Link
              className=" cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <li
                className={`${isSelected === 1 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(1);
                  setIsActive(true);
                }}
              >
                about us
              </li>
            </Link>
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
              <li
                className={`${isSelected === 2 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(2);
                  setIsActive(true);
                }}
              >
                portfolio
              </li>
            </Link>
            <Link
              className=" cursor-pointer"
              to="post"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-70}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <li
                className={`${isSelected === 3 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(3);
                  setIsActive(true);
                }}
              >
                blog
              </li>
            </Link>
            <Link
              className=" cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-70}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <li
                className={`${isSelected === 4 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(4);
                  setIsActive(true);
                }}
              >
                contact us
              </li>
            </Link>
            <Link
              className=" cursor-pointer"
              to="footer"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-70}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <li
                className={`${isSelected === 5 && " text-[#f7c552]"} `}
                onClick={() => {
                  setIsSelected(5);
                  setIsActive(true);
                }}
              >
                service
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
