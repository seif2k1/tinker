import React from "react";
import Map from "../map/Map";
import Info from "../footer_info/Info";

const Footer = () => {
  return (
    <div className=" footer h-[calc(100vh-70px)] max-w-full overflow-hidden w-full flex flex-col items-center">
      <Map />
      <Info />
    </div>
  );
};

export default Footer;
