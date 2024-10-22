import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, image: 'https://via.placeholder.com/300x200?text=Necklace+1', name: 'Shimmering Brilliance Diamond Necklace Set' },
  { id: 2, image: 'https://via.placeholder.com/300x200?text=Necklace+2', name: 'Timeless Charm Diamond Necklace Set' },
  { id: 3, image: 'https://via.placeholder.com/300x200?text=Necklace+3', name: 'Radiant Opulence Diamond Necklace Set' },
  { id: 4, image: 'https://via.placeholder.com/300x200?text=Necklace+4', name: 'Majestic Brilliance Diamond Necklace Set' },
  { id: 5, image: 'https://via.placeholder.com/300x200?text=Necklace+5', name: 'Shimmering Brilliance Diamond Necklace Set' },
  { id: 6, image: 'https://via.placeholder.com/300x200?text=Necklace+6', name: 'Timeless Charm Diamond Necklace Set' },
  { id: 7, image: 'https://via.placeholder.com/300x200?text=Necklace+7', name: 'Radiant Opulence Diamond Necklace Set' },
  { id: 8, image: 'https://via.placeholder.com/300x200?text=Necklace+8', name: 'Majestic Brilliance Diamond Necklace Set' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Show 1 item per page on small screens
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2); // Show 2 items per page on medium screens
      } else {
        setItemsPerPage(4); // Show 4 items per page on large screens
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const displayedProducts = products.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-white rounded-full px-4 py-2 shadow-lg z-10 hover:bg-gray-200 transition duration-300"
        >
          ❮
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`w-full sm:w-1/2 md:w-1/4 flex-shrink-0 p-4 flex flex-col items-center`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
                <p className="text-center mt-4 text-sm font-semibold">{product.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-white rounded-full px-4 py-2 shadow-lg z-10 hover:bg-gray-200 transition duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
