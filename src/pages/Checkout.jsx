import React from "react";

const CheckoutPage = () => {
  const gifUrl = "https://cdn.dribbble.com/users/159981/screenshots/2112264/media/40b1edcc8d8e168d6e32f3976318747f.gif";

  return (
    <div className="flex flex-col items-center justify-center px-8 py-20 ">
      <h2 className="text-3xl font-semibold  text-[#77B43F]">Checkout Successful!</h2>
      <img
        src={gifUrl}
        alt="Checkout Success"
        className="h-96"
      />
      <p className="text-lg text-gray-700 mb-4">
        Thank you for your purchase! Your order is being processed.
      </p>
      <p className="text-md text-gray-500">
        You will receive an email confirmation shortly.
      </p>
    </div>
  );
};

export default CheckoutPage;
