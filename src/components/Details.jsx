import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaGem, FaExchangeAlt, FaSyncAlt, FaUndoAlt, FaShieldVirus, FaTruck } from 'react-icons/fa';

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-blue-100 py-4 relative">
      <div
        className="flex whitespace-nowrap animate-marquee"
      >
        {/* Content repeated twice for smooth looping */}
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 300s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

const MarqueeContent = () => (
  <>
    <div className="flex items-center mx-4">
      <FaCheckCircle className="text-xl text-blue-500" />
      <span className="ml-2">100% Certified Jewellery</span>
    </div>
    <div className="flex items-center mx-4">
      <FaShieldAlt className="text-xl text-blue-500" />
      <span className="ml-2">BIS Hallmarked Gold Jewellery</span>
    </div>
    <div className="flex items-center mx-4">
      <FaGem className="text-xl text-blue-500" />
      <span className="ml-2">Platinum Certified Jewellery</span>
    </div>
    <div className="flex items-center mx-4">
      <FaExchangeAlt className="text-xl text-blue-500" />
      <span className="ml-2">Lifetime Exchange</span>
    </div>
    <div className="flex items-center mx-4">
      <FaSyncAlt className="text-xl text-blue-500" />
      <span className="ml-2">Lifetime Buyback</span>
    </div>
    <div className="flex items-center mx-4">
      <FaUndoAlt className="text-xl text-blue-500" />
      <span className="ml-2">7 Days Return Policy</span>
    </div>
    <div className="flex items-center mx-4">
      <FaShieldVirus className="text-xl text-blue-500" />
      <span className="ml-2">1 Year Free Insurance</span>
    </div>
    <div className="flex items-center mx-4">
      <FaGem className="text-xl text-blue-500" />
      <span className="ml-2">6 Months Free Product Upgrade</span>
    </div>
    <div className="flex items-center mx-4">
      <FaTruck className="text-xl text-blue-500" />
      <span className="ml-2">Free Shipping</span>
    </div>
  </>
);

export default Marquee;
