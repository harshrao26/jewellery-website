import React from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";

import { useNavigate } from "react-router-dom";

const DeliveryInfoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className="container mx-auto  sm:p-6  w-[50vw] pt-20 ">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 pt-16 w-full text-center">
        Add Product Delivery Information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Recipient Name */}
        <div>
          <label
            htmlFor="recipientName"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Recipient Name
          </label>
          <input
            id="recipientName"
            type="text"
            {...register("recipientName", {
              required: "Recipient name is required",
            })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.recipientName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.recipientName.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address", { required: "Address is required" })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            City
          </label>
          <input
            id="city"
            type="text"
            {...register("city", { required: "City is required" })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            State
          </label>
          <input
            id="state"
            type="text"
            {...register("state", { required: "State is required" })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* Zip Code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Zip Code
          </label>
          <input
            id="zipCode"
            type="text"
            {...register("zipCode", { required: "Zip code is required" })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.zipCode.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Delivery Instructions */}
        <div>
          <label
            htmlFor="deliveryInstructions"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Delivery Instructions
          </label>
          <textarea
            id="deliveryInstructions"
            {...register("deliveryInstructions")}
            rows="4"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={handleCheckout}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out text-sm sm:text-base"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeliveryInfoPage;
