import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-600  animate-pulse">404</h1>
        <p className="text-3xl font-semibold mb-2 text-gray-800">Oops! Page Not Found</p>
        <p className="text-lg mb-6 text-gray-600">
          The page you’re looking for doesn’t exist. Please check your entered keyword.
        </p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          <FaArrowLeft className="inline-block mr-2" />
          Go Back Home
        </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
