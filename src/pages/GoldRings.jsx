import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";

const GoldRingsPage = () => {
  const [filters, setFilters] = useState({
    jewelleryType: [],
    productType: [],
    price: [],
    metalPurity: [],
    metalColour: [],
    style: [],
    occasion: [],
    design: [],
    size: [],
    gender: [],
  });

  // State to store the products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products"); // Use any API for now
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

      // Filter by each category
      Object.keys(filters).forEach((key) => {
        if (filters[key].length > 0) {
          filtered = filtered.filter((product) => {
            // Check if the product matches any of the selected filters in that category
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
  return (
    <div className="flex px- pt-24">
      <aside>
        <div className="w-64 p-4 bg-white border-r border-gray-200">
          {/* Jewellery Type */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Jewellery Type <FiChevronDown />
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
                <label htmlFor="diamond">Diamond Jewellery</label>
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

          {/* Price */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Price <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {[
                "₹50000 - ₹75000",
                "₹75000 - ₹100000",
                "₹100000 - ₹200000",
                "₹200000 - ₹300000",
                "₹300000 - ₹500000",
                "₹500000 - ₹1000000",
                "₹1000000 - ₹2000000",
                "₹1000000 - above",
              ].map((price, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`price-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("price", price)}
                  />
                  <label htmlFor={`price-${index}`}>{price}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Metal Purity */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Metal Purity <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              <div>
                <input
                  type="checkbox"
                  id="18kt"
                  className="mr-2 "
                  onChange={() => handleFilterChange("metalPurity", "18KT")}
                />
                <label htmlFor="18kt">18KT</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="22kt"
                  className="mr-2 "
                  onChange={() => handleFilterChange("metalPurity", "22KT")}
                />
                <label htmlFor="22kt">22KT</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="24kt"
                  className="mr-2 "
                  onChange={() => handleFilterChange("metalPurity", "24KT")}
                />
                <label htmlFor="24kt">24KT</label>
              </div>
            </div>
          </div>

          {/* Metal Colour */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Metal Colour <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Rose", "White", "Yellow"].map((color, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`color-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("metalColour", color)}
                  />
                  <label htmlFor={`color-${index}`}>{color}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Style */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Style <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Traditional", "Modern", "Contemporary"].map((style, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`style-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("style", style)}
                  />
                  <label htmlFor={`style-${index}`}>{style}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Occasion <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Wedding", "Party", "Casual"].map((occasion, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`occasion-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("occasion", occasion)}
                  />
                  <label htmlFor={`occasion-${index}`}>{occasion}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Design <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Floral", "Geometric", "Abstract"].map((design, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`design-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("design", design)}
                  />
                  <label htmlFor={`design-${index}`}>{design}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Size <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Small", "Medium", "Large"].map((size, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`size-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("size", size)}
                  />
                  <label htmlFor={`size-${index}`}>{size}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 flex justify-between items-center cursor-pointer">
              Gender <FiChevronDown />
            </h2>
            <div className="ml-2 text-sm">
              {["Men", "Women", "Unisex"].map((gender, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`gender-${index}`}
                    className="mr-2 "
                    onChange={() => handleFilterChange("gender", gender)}
                  />
                  <label htmlFor={`gender-${index}`}>{gender}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 ">
        <div
          className="h-60 w-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1588128211445-38bc87d6fef2?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

          }}
        ></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  );
};

export default GoldRingsPage;
