import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BannerNewly = () => {
  return (
    <div className="overflow-hidden md:p-8 px-2">
        <h1 className="text-center md:text-4xl text-2xl font-semibold md:pb-4 py-4 tracking-tight ">Our UpComing Collection</h1>

        <div className=" overflow-hidden rounded-xl w-full flex items-center justify-center">
      <img
        src="https://www.orra.co.in/media/wysiwyg/10_1_Offer_Banner-min.jpg"
        alt="Banner"
        className=" object-cover h-full overflow-hidden  transition-transform duration-300 "
      />
      <img
        src="https://www.orra.co.in/media/wysiwyg/EMI_Offer_Banner-min.jpg"
        alt="Banner"
        className=" object-cover h-full overflow-hidden  transition-transform duration-300 "
      />
    </div>
    </div>
  );
};

export default BannerNewly;
