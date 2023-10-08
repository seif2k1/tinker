import React from "react";

const Map = () => {
  return (
    <div className="h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103040.37654153646!2d5.337425926279489!3d36.19059566311323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3159c5fcafc4b%3A0xb063cfbbd3cadcd5!2zU8OpdGlm!5e0!3m2!1sfr!2sdz!4v1696511122632!5m2!1sfr!2sdz"
        className="border-0 w-full h-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
