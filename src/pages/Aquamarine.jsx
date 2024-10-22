import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";

const Aquamarine = () => {
  const [filters, setFilters] = useState({
    jewelleryType: [],
    productType: [],
    priceRange: 2000, // Adjust the default max value for price
    metalPurity: [],
  });

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // Adjusted for new API structure
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      // Filter by price range
      filtered = filtered.filter(
        (product) => product.price <= filters.priceRange
      );

      // Filter by metal purity
      if (filters.metalPurity.length > 0) {
        filtered = filtered.filter((product) =>
          filters.metalPurity.includes(product.metalPurity)
        );
      }

      // Filter by other categories
      Object.keys(filters).forEach((key) => {
        if (key !== "priceRange" && key !== "metalPurity" && filters[key].length > 0) {
          filtered = filtered.filter((product) => {
            return filters[key].some((filter) =>
              product.title.toLowerCase().includes(filter.toLowerCase())
            );
          });
        }
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [filters, products]);

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter((item) => item !== value);
      } else {
        newFilters[category].push(value);
      }
      return newFilters;
    });
  };

  const handlePriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: parseInt(e.target.value),
    }));
  };

  return (
    <>
    <img
      src="https://www.orra.co.in/media/catalog/category/1900_x_300_Aekta_y_3.jpg"
      alt=""
      className="pt-20"
    />

    <div className="flex">
      <aside>
        <div className="md:w-64 w-36 p-4 bg-white border-r border-gray-200">
          {/* Stone Type */}
          <div className="mb-4">
            <h2 className="md:text-lg text-sm font-medium mb-2 flex justify-between items-center cursor-pointer">
              Stone Type <FiChevronDown />
            </h2>
            <div className="md:ml-2 md:text-sm text-xs">
              {[
                "Ruby",
                "Emerald",
                "Sapphire",
                "Diamond",
                "Opal",
                "Topaz",
                "Amethyst",
                "Garnet",
                "Aquamarine",
                "Peridot",
                "Citrine",
                "Tourmaline",
              ].map((stone, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`stone-${index}`}
                    className="mr-2"
                    onChange={() => handleFilterChange("jewelleryType", stone)}
                  />
                  <label htmlFor={`stone-${index}`}>{stone}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Product Type */}
          <div className="mb-4">
            <h2 className="md:text-lg text-sm font-medium mb-2 flex justify-between items-center cursor-pointer">
              Product Type <FiChevronDown />
            </h2>
            <div className="md:ml-2 md:text-sm text-xs">
              {[
                "Bangle",
                "Bracelet",
                "Earring",
                "Jewellery Set",
                "Mang Tikka",
                "Neckwear",
                "Neckwear Set",
                "Ring",
              ].map((type, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`product-${index}`}
                    className="mr-2"
                    onChange={() => handleFilterChange("productType", type)}
                  />
                  <label htmlFor={`product-${index}`}>{type}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h2 className="md:text-lg text-sm font-medium mb-2 flex justify-between items-center cursor-pointer">
              Price Range <FiChevronDown />
            </h2>
            <div className="md:ml-2 ml-0 md:text-sm text-xs ">
              <input
                type="range"
                min="0"
                max="2000"
                step="100"
                value={filters.priceRange}
                onChange={(e) => handlePriceChange(e)}
                className="slider w-28"
              />
              <div className="flex justify-between text-xs">
                <span>₹0</span>
                <span>₹{filters.priceRange}</span>
              </div>
            </div>
          </div>

          {/* Metal Purity */}
          <div className="mb-4">
            <h2 className="md:text-lg text-sm font-medium mb-2 flex justify-between items-center cursor-pointer">
              Metal Purity <FiChevronDown />
            </h2>
            <div className="md:ml-2 text-sm">
              <input
                type="range"
                min="18"
                max="24"
                step="2"
                value={filters.metalPurity}
                onChange={(e) => handleFilterChange("metalPurity", e.target.value)}
                className="slider w-28"
              />
              <div className="flex justify-between text-xs">
                <span>18KT</span>
                <span>24KT</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product List */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border p-4 h-64 flex flex-col cursor-pointer">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-contain"
                  />
                </div>
                <div className="flex flex-col py-2 flex-grow justify-between">
                  <h3 className="text-sm font-medium ">{product.title}</h3>
                  <p className="text-gray-600">₹{product.price}/-</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  </>
  );
};

export default Aquamarine;
