"use client";
import Image from "next/image";
import { img_gal } from "./image";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState(img_gal);
  const [selected, setSelected] = useState(0);

  const filter = (type) => {
    setGallery(img_gal.filter((item) => item.cate.includes(type) === true));
  };
  return (
    <div className="gallery w-full h-full md:h-[calc(100vh-70px)] flex flex-col md:flex-row items-center justify-between">
      <div className="w-[100%] h-full flex flex-col items-center justify-center bg-cyan-400 text-white">
        <div className=" w-[80%] md:w-[60%] h-full flex flex-col gap-y-5 p-5  items-center justify-center">
          <div className="w-full">
            <h1 className=" w-full text-left">OUR GALLERY</h1>
          </div>
          <hr className="w-full " />
          <div className="w-full">
            <h4 className="w-full">
              In malesuada placerat ligula et bibendum. Aenean eget urna enim.
              Sed enim ante, bibendum nec dictum ac, gravida ac lectus.
            </h4>
          </div>
          <div className="w-full h-[35%] mt-5 text-left">
            <ul className="h-full flex flex-col items-start capitalize justify-around">
              <li
                className={`${
                  selected === 0 && "text-[#f7c552]"
                } cursor-pointer`}
                onClick={() => {
                  setGallery(img_gal);
                  setSelected(0);
                }}
              >
                show all
              </li>
              <li
                className={`${
                  selected === 1 && "text-[#f7c552]"
                } cursor-pointer`}
                onClick={() => {
                  filter("branding");
                  setSelected(1);
                }}
              >
                branding
              </li>
              <li
                className={`${
                  selected === 2 && "text-[#f7c552]"
                } cursor-pointer`}
                onClick={() => {
                  filter("graphic");
                  setSelected(2);
                }}
              >
                graphic
              </li>
              <li
                className={`${
                  selected === 3 && "text-[#f7c552]"
                } cursor-pointer`}
                onClick={() => {
                  filter("nature");
                  setSelected(3);
                }}
              >
                nature
              </li>
              <li
                className={`${
                  selected === 4 && "text-[#f7c552]"
                } cursor-pointer`}
                onClick={() => {
                  filter("animation");
                  setSelected(4);
                }}
              >
                animation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full overflow-hidden ">
        <div className="w-[90%] items-start h-full flex flex-wrap justify-start p-5  ">
          {gallery.map((gal, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-center w-[50%] "
              >
                <Image src={gal.logo} alt="images" priority />
              </div>
            );
          })}
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
