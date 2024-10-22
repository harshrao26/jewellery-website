// // src/components/Carousel.js
// import React from 'react';
// import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const Carousel = ({ items }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <FaArrowLeft className="text-2xl cursor-pointer" />,
//     nextArrow: <FaArrowRight className="text-2xl cursor-pointer" />,
//   };

//   return (
//     <div className="relative">
//       <Slider {...settings} className="carousel-container">
//         {items.map((item, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
//               <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-gray-500">{item.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
import React from 'react'

const CArousel = () => {
  return (
    <div>CArousel</div>
  )
}

export default CArousel