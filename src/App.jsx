import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"; 
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <>
      
      <Navbar className="z-40" />
      <Routing  className="z-20"/>
      <Footer />
    </>
  );
}

export default App;