import React,{useState, useEffect} from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/Checkout.jsx";
import DeliveryInfoPage from "../pages/DeliveryInfoPage.jsx";
import ProductDetails from "../components/ProductDetails";

import LuxeryWatchesPage from '../pages/LuxeryWatchesPage.jsx';
import SmartWatchesPage from '../pages/SmartWatchesPage.jsx';

import GoldRings from '../pages/GoldRings.jsx';
import SilverRings from '../pages/SilverRings.jsx';
import DiamondRings from '../pages/DiamondRings.jsx';

import Ruby from '../pages/Ruby.jsx';
import Emerald from '../pages/Emerald.jsx';
import Sapphire from '../pages/Sapphire.jsx';
import Diamond from '../pages/Diamond.jsx';
import Opal from '../pages/Opal.jsx';
import Topaz from '../pages/Topaz.jsx';
import Amethyst from '../pages/Amethyst.jsx';
import Garnet from '../pages/Garnet.jsx';
import Aquamarine from '../pages/Aquamarine.jsx';
import Peridot from '../pages/Peridot.jsx';
import Citrine from '../pages/Citrine.jsx';
import Tourmaline from '../pages/Tourmaline.jsx';

import NotFound from '../pages/NotFound.jsx';



import Hoops from '../pages/Hoops.jsx';
import Studs from '../pages/Studs.jsx';
import Dangles from '../pages/Dangles.jsx';

import Gold from '../pages/Gold.jsx';
import Silver from '../pages/Silver.jsx';
import GemStone from '../pages/GemStone.jsx';

import DiamondSolitaires from '../pages/DiamondSolitaires.jsx';
import GoldSolitaires from '../pages/GoldSolitaires.jsx';

import Necklaces from '../pages/Necklaces.jsx';
import Bracelets from '../pages/Bracelets.jsx';
import Brooches from '../pages/Brooches.jsx';

import ForHer from '../pages/ForHer.jsx';
import ForHim from '../pages/ForHim.jsx';
import ForKids from '../pages/ForKids.jsx';


import CoinBullion from '../pages/CoinBullion.jsx'
import CoinCollectible from '../pages/CoinCollectible.jsx'








const Routing = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<DeliveryInfoPage />} />

        <Route path="/products/ruby" element={<Ruby />} />
        <Route path="/products/emerald" element={<Emerald />} />
        <Route path="/products/sapphire" element={<Sapphire />} />
        <Route path="/products/diamond" element={<Diamond />} />
        <Route path="/products/opal" element={<Opal />} />
        <Route path="/products/topaz" element={<Topaz />} />
        <Route path="/products/amethyst" element={<Amethyst />} />
        <Route path="/products/garnet" element={<Garnet />} />
        <Route path="/products/aquamarine" element={<Aquamarine />} />
        <Route path="/products/peridote" element={<Peridot />} />
        <Route path="/products/citrine" element={<Citrine />} />
        <Route path="/products/tourmaline" element={<Tourmaline />} />

        {/* Watches */}
        <Route path="/luxury-watches" element={<LuxeryWatchesPage/>} />
        <Route path="/smart-watches" element={<SmartWatchesPage/>} />

        {/* Rings */}
        <Route path="/gold-rings" element={<GoldRings />} />
        <Route path="/silver-rings" element={<SilverRings />} />
        <Route path="/diamond-rings" element={<DiamondRings />} />



        <Route path="*" element={<NotFound />} />


        

        
      </Routes>
    </>
  );
};

export default Routing;