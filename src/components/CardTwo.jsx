import React from 'react';

const JewelleryCard = ({ image, gradientFrom, gradientTo, title, buttonText }) => {
  return (
    <div className="relative md:w-[30vw] w-60 md:h-[30v] rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
          opacity: 0.8,
        }}
      ></div>
      <div className="absolute bottom-4 flex flex-col justify-center items-center w-full text-white">
        <h2 className="md:text-2xl text-lg font-bold mb-2">{title}</h2>
        <button className="bg-white text-black md:text-lg text-xs md:py-2 py-1 md:px-4 px-2 rounded-lg">{buttonText}</button>
      </div>
    </div>
  );
};

export default JewelleryCard;
