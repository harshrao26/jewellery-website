import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";
import Navigation from "../components/Navigation";

const Products = () => {
  // State to store the filters
  const [filters, setFilters] = useState({
    jewelleryType: [],
    productType: [],
    priceRange: [10000, 2000000],
    metalPurity: [],
  });

  // State to store the products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      // Filter by price range
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      // Filter by metal purity
      if (filters.metalPurity.length > 0) {
        filtered = filtered.filter((product) =>
          filters.metalPurity.includes(product.metalPurity)
        );
      }

      // Filter by other categories
      Object.keys(filters).forEach((key) => {
        if (
          key !== "priceRange" &&
          key !== "metalPurity" &&
          filters[key].length > 0
        ) {
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

  // Handle filter change
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value
        );
      } else {
        newFilters[category].push(value);
      }
      return newFilters;
    });
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const value = e.target.value.split(",").map(Number);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: value,
    }));
  };

  // Handle metal purity change
  const handleMetalPurityChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      metalPurity: [value],
    }));
  };

  return (
    <>
     

      <div className="flex pt-24">
        
        <aside>
          <div className="w-64 p-4 bg-white border-r border-gray-200">
            {/* Jewellery Type */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
                Stone Type <FiChevronDown />
              </h2>
              <div className="ml-2 text-sm">
                <div>
                  <input
                    type="checkbox"
                    id="diamond"
                    className="mr-2 "
                    onChange={() =>
                      handleFilterChange("jewelleryType", "Diamond")
                    }
                  />
                  <label htmlFor="diamond">Diamond</label>
                </div>
              </div>
            </div>

            {/* Product Type */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
                Product Type <FiChevronDown />
              </h2>
              <div className="ml-2 text-sm">
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
                      className="mr-2 "
                      onChange={() => handleFilterChange("productType", type)}
                    />
                    <label htmlFor={`product-${index}`}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
                Price Range <FiChevronDown />
              </h2>
              <div className="ml-2 text-sm">
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  step="10000"
                  value={filters.priceRange}
                  onChange={(e) => handlePriceChange(e)}
                  className="slider"
                  multiple
                />
                <div className="flex justify-between text-sm">
                  <span>₹{filters.priceRange[0]}</span>
                  {/* <span>{filters.priceRange[1]}</span> */}
                </div>
              </div>
            </div>

            {/* Metal Purity */}
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
                Metal Purity <FiChevronDown />
              </h2>
              <div className="ml-2 text-sm">
                <input
                  type="range"
                  min="18"
                  max="24"
                  step="2"
                  value={filters.metalPurity}
                  onChange={(e) => handleMetalPurityChange(e)}
                  className="slider"
                />
                <div className="flex justify-between text-sm">
                  <span>18KT</span>
                  <span>24KT</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product List */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 flex flex-col">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40  object-contain"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <h3 className="text-sm font-medium my-2">{product.title}</h3>
                  <p className="text-gray-600">₹{product.price}/-</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
