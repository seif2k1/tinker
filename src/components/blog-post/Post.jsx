"use client";
import Image from "next/image";
import { lists } from "./list";
import { useEffect, useState } from "react";
import logo from "../../../public/asset/blog-bg.jpg";
import "./post.css";
const Post = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="post h-full w-full md:h-[calc(100vh-70px)] flex flex-col md:flex-row items-center justify-between">
      {/* <Image
        src={logo}
        alt="image"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      /> */}
      <div className="w-full md:w-[80%] lg:w-[70%] bg-[rgba(0,0,0,0.5)] h-full flex flex-col items-center justify-center text-white">
        <div className="w-full md:w-[60%] lg:w-[80%] h-full flex flex-col gap-y-5 p-5 md:p-0 lg:p-5  items-center justify-center">
          <div className="w-full">
            <h1 className=" w-full text-left">OUR BLOG POSTS</h1>
          </div>
          <hr className="w-full " />
          <div className="w-full">
            <h4 className="w-full">
              Nam vulputate elementum nulla, sit amet congue ipsum malesuada
              pretium. Vivamus vel gravida quam.
            </h4>
          </div>
          <div className="w-full h-[50%] md:h-[35%] mt-5 text-left">
            <ul className="h-full gap-y-3 flex flex-col items-start capitalize justify-around">
              <li
                className={`w-full px-4 py-2 rounder-[9px] bg-white text-black text-center ${
                  selected === 0 ? "text-red-500" : ""
                } cursor-pointer`}
                onClick={() => {
                  setSelected(0);
                }}
              >
                Nulla eget convallis augue
              </li>
              <li
                className={`w-full px-4 py-2 rounder-[9px] bg-white text-black text-center ${
                  selected === 1 ? "text-red-500" : ""
                } cursor-pointer`}
                onClick={() => {
                  setSelected(1);
                }}
              >
                Quisque ultricies maximus
              </li>
              <li
                className={`w-full px-4 py-2 rounder-[9px] bg-white text-black text-center ${
                  selected === 2 ? "text-red-500" : ""
                } cursor-pointer`}
                onClick={() => {
                  setSelected(2);
                }}
              >
                Sed vel elit et lorem
              </li>
              <li
                className={`w-full px-4 py-2 rounder-[9px] bg-white text-black text-center ${
                  selected === 3 ? "text-red-500" : ""
                } cursor-pointer`}
                onClick={() => {
                  setSelected(3);
                }}
              >
                Vivamus purus neque
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full duration-[2s] overflow-hidden ">
        <div className="w-[100%]  h-full flex items-center justify-center md:p-5  ">
          <div className="w-[100%] md:w-[80%] ">
            <Image
              src={lists[selected].logo}
              alt="images"
              className=""
              priority
            />
            <div className="p-5 bg-white">
              <h1>{lists[selected].name}</h1>
              <h4>{lists[selected].link}</h4>
              <p>{lists[selected].des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
