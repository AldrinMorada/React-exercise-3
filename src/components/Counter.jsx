import { Button } from "@mui/material";
import React from "react";

const Counter = ({ product, handleIncrement, handleDecrement, toggleCart }) => {
  const count = () => {
    return "bg-gray-100 border-2 border-gray-200 px-5 py-1.5 font-semibold text-gray-900";
  };

  const decrementButton = () => {
    if (product.counter === 0) {
      return "bg-gray-400 text-white cursor-not-allowed";
    }
    return "bg-orange-700 hover:bg-orange-500  text-white";
  };

  const formatText = () => {
    const { counter } = product;
    if (counter > 0) {
      return counter;
    }

    return 0;
  };

  return (
    <section className="grid grid-cols-7 py-2 w-full relative">
      <div></div>
      <div className="col-span-5 space-x-1">
        <Button
          variant="contained"
          onClick={() => handleDecrement(product.id)}
          className={decrementButton()}
          disabled={product.counter === 0}
        >
          -
        </Button>
        <Button disabled>
          <div className={count()}>{formatText()}</div>
        </Button>

        <Button
          variant="contained"
          onClick={() => handleIncrement(product.id)}
          className="bg-blue-700 hover:bg-blue-500 px-5 text-white"
        >
          +
        </Button>
      </div>
      <Button
        title="Remove from cart"
        className="p-0 text-red-900 hover:bg-white hover:text-red-600"
        onClick={toggleCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 -mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </section>
  );
};

export default Counter;
