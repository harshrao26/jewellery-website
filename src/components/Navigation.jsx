import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Example icon

const Navigation = () => {
  return (
    <nav className="z-10">
      <div className="container">
        <div className="flex gap-4 ">
          <NavItem title="Watch" to="/watches" dropdownItems={['Luxury Watches', 'Smart Watches']} />
          <NavItem title="Rings" to="/rings" dropdownItems={['Gold Rings', 'Silver Rings', 'Diamond Rings']} />
          <NavItem title="Earrings" to="/earrings" dropdownItems={['Hoops', 'Studs', 'Dangles']} />
          <NavItem title="Pendants" to="/pendants" dropdownItems={['Gold Pendants', 'Silver Pendants', 'Gemstone Pendants']} />
          <NavItem title="Solitaires" to="/solitaires" dropdownItems={['Diamond Solitaires', 'Gold Solitaires']} />
          <NavItem title="All Jewellery" to="/all-jewellery" dropdownItems={['Necklaces', 'Bracelets', 'Brooches']} />
          <NavItem title="Gifts" to="/gifts" dropdownItems={['For Her', 'For Him', 'For Kids']} />
          <NavItem title="Gold Coins" to="/gold-coins" dropdownItems={['Bullion Coins', 'Collectible Coins']} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title, to, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isHoveringDropdown() && !isHoveringDropdownMenu()) {
        setIsOpen(false);
      }
    }, 300); 
  };

  const isHoveringDropdown = () => document.querySelector(`#${title}-dropdown`)?.matches(':hover');
  const isHoveringDropdownMenu = () => document.querySelector(`#${title}-dropdown-menu`)?.matches(':hover');

  return (
    <div
      id={`${title}-dropdown`}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1  className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
        <span>{title}</span>
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </h1>
      <div
        id={`${title}-dropdown-menu`}
        className={`absolute left-0 mt-4 bg-white text-black w-48 transition-transform ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-top`}
      >
        <ul>
          {dropdownItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="block">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
