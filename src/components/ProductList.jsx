import React from "react";
import ProductCard from "./ProductCard";
import { GiVineFlower } from "react-icons/gi";

const ProductList = () => {
  const jewelryItems = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678749105286-9970ba61a724?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Exquisite Diamond Ring",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667013829921-b1c1719a0cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvbGQlMjBuZWNrbGFjZXN8ZW58MHx8MHx8fDA%3D",
      text: "Elegant Gold Necklace",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508022909583-69228d7b2f8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Stylish Silver Bracelet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1704957205218-d436eac4c607?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Classic Pearl Earrings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1676496219942-e52c419f4868?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Stunning Ruby Pendant",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678834778763-87aa30a0dbe8?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Luxurious Emerald Ring",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Premium Platinum Band",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1691911820652-dd9ba2c1df57?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Royal Diamond Tiara",
    },
  ];

  return (
    <>
      <h1 className="flex items-center justify-center py-4 md:py-8 gap-2">
        <GiVineFlower className="text-xl md:text-3xl  lg:text-4xl" />
        <p className="text-center md:text-4xl text-2xl font-semibold tracking-tight ">Our Collection</p>
        <GiVineFlower className="text-xl md:text-3xl lg:text-4xl" />
      </h1>
      <div className="flex flex-wrap md:px-16 px-4 w-full items-center justify-between">
        {jewelryItems.map((item, index) => (
          <ProductCard key={index} image={item.image} text={item.text} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
