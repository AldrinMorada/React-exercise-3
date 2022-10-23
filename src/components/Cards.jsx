import Counter from "./Counter";
import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cards = ({ product, handleIncrement, handleDecrement, handleReset }) => {
  const { id, price, name, description, image } = product;

  let [cart, setCart] = useState(true);
  const toggleCart = () => {
    setCart((cart = !cart));
    if (cart === false) {
      handleReset(id);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <section>
          <Box component="div" sx={{ textOverflow: "clip" }}>
            <Typography variant="h6" title={name}>
              {name}
            </Typography>
          </Box>
          <small className="text-sm">P{price}</small>
        </section>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center items-end">
        {cart ? (
          <Button
            onClick={() => toggleCart()}
            className="px-4 py-2 rounded-md flex text-blue-700 items-center space-x-1 hover:text-fuchsia-900 cursor-pointer hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="uppercase font-semibold">Add to cart</span>
          </Button>
        ) : (
          <Counter
            product={product}
            toggleCart={toggleCart}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Cards;
