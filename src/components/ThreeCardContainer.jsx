import React from "react";
import CardTwo from './CardTwo'
const ThreeCardContainer = () => {
  return (
    <div>
      <div className="md:px-8  px-2 gap-2 flex justify-between ">
        <CardTwo
          image="https://images.unsplash.com/photo-1633555234047-192d10238f5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gradientFrom="rgba(0, 0, 0, 0.9)"
          gradientTo="transparent"
          title="LOCKET"
          buttonText="View Collection"
        />
        <CardTwo
          image="https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gradientFrom="rgba(117, 129, 42, 0.9)"
          gradientTo="transparent"
          title="EARINGS"
          buttonText="View Collection"
        />
        <CardTwo
          image="https://plus.unsplash.com/premium_photo-1671641737553-3d669dc1f927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
          gradientFrom="rgba(117, 129, 142, 0.9)"
          gradientTo="transparent"
          
          title="RINGS"
          buttonText="View Collection"
        />
      </div>
    </div>
  );
};

export default ThreeCardContainer;
