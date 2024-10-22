import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const jewelryStones = [
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
  ];

  let hideTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      setIsAboutActive(currentPath.startsWith("/about"));
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const formattedSearchTerm = searchTerm
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase();
      navigate(`/products/${formattedSearchTerm}`);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.trim()) {
      const filteredSuggestions = jewelryStones.filter((stone) =>
        stone.toLowerCase().includes(input.trim().toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setHighlightedIndex(-1); // Reset the highlighted index when the input changes
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        setSearchTerm(suggestions[highlightedIndex]);
        setSuggestions([]);
      }
    }
  };

  return (
    <div
      className={`w-full z-50 h-20 fixed flex items-center justify-between text-black nav-transition ${
        isScrolled ? "bg-zinc-800 text-white transition-all ease-in-out" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full md:px-8 px-2">
        <NavLink to="/">
          <div className="px-4 py-2 rounded-2xl">
            <img src="" alt="Logo" className="w-[8vw] " />
          </div>
        </NavLink>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-[4vw] uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Products
          </NavLink>

          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              aria-disabled
              className={`cursor-pointer font-semibold text-sm ${
                isAboutActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              About Us
            </NavLink>
            {dropdownVisible && (
              <div className="absolute bg-zinc-800 text-white rounded-lg py-2 mt-2 w-40 z-[100000000]">
                <NavLink
                  to="/our-story"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={() => setDropdownVisible(false)}
                >
                  Our Story
                </NavLink>
                <NavLink
                  to="/award"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={() => setDropdownVisible(false)}
                >
                  Awards
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="md:flex hidden md:opacity-100 lg:gap-4 items-center relative py-2">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white text-black px-2 py-1 rounded-lg w-full lg:w-auto"
          >
            <input
              type="text"
              className="outline-none border-none px-2 py-1 text-sm w-full"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className="text-sm text-white bg-zinc-800 px-2 py-1 rounded"
            >
              <FiSearch className="text-xl font-bold cursor-pointer" />
            </button>
          </form>

          {suggestions.length > 0 && (
            <div className="absolute top-10 bg-white text-black rounded-lg mt-1 w-full lg:w-48 z-50">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                    index === highlightedIndex ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setSearchTerm(suggestion);
                    setSuggestions([]);
                    setHighlightedIndex(-1); // Reset highlighted index
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          <NavLink
            to="/cart"
            className="hidden lg:block text-xl cursor-pointer"
          >
            <LuShoppingCart />
          </NavLink>
        </div>
      </div>
      <div className="absolute md:hidden top-5 bg-black bg-opacity-50 right-8 mx-1 ">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-white text-black  py-1 md:gap-4 rounded-lg w-40  lg:w-auto"
        >
          <input
            type="text"
            className="outline-none border-none px-2 py-1 text-sm w-full"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="text-sm text-white bg-zinc-800 px-1 py-1 rounded"
          >
            <FiSearch className="text-xl font-bold cursor-pointer" />
          </button>
          <NavLink
            to="/cart"
            className="  text-2xl cursor-pointer mx-2"
          >
            <LuShoppingCart />
          </NavLink>
        </form>

        {suggestions.length > 0 && (
          <div className="absolute top-10 bg-white text-black rounded-lg mt-1 w-full lg:w-48 z-50">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  index === highlightedIndex ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setSearchTerm(suggestion);
                  setSuggestions([]);
                  setHighlightedIndex(-1); // Reset highlighted index
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}

        <NavLink to="/cart" className="hidden lg:block text-xl cursor-pointer">
          <LuShoppingCart />
        </NavLink>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-800 text-white py-4">
          <NavLink
            to="/"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Products
          </NavLink>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className="block px-4 py-2 w-full text-left hover:bg-zinc-700"
            >
              About Us
            </button>
            {dropdownVisible && (
              <div className="absolute bg-zinc-800 text-white rounded-lg py-2 mt-2 w-40 z-[100000000]">
                <NavLink
                  to="/our-story"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={toggleMobileMenu}
                >
                  Our Story
                </NavLink>
                <NavLink
                  to="/award"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={toggleMobileMenu}
                >
                  Awards
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/contact"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
