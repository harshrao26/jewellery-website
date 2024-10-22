import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ image, text }) => {
  return (
    <div className="md:w-72 w-44  overflow-hidden rounded shadow-md mb-8 ">
      <div className="md:h-72 h-40 md:w-72 w-60 flex items-center justify-center overflow-hidden relative group">
        <img
          src={image}
          alt="Product"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="bg-[#1f1f1f10] absolute w-full flex justify-end p-2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <FaShoppingBag
            className="bg-white text-black p-1 rounded-md hover:text-green-600"
            size={28}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="tracking-tight py-2 w-full font-semibold px-4 text-center">{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
