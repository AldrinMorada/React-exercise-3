import { Badge, Button } from "@mui/material";
import React from "react";
import "../index.css";

const Navbar = ({ props }) => {
  return (
    <nav className="nav">
      <a href="/">E-Commerce App</a>
      <ul className="flex justify-center space-x-4">
        <CustomLink href="/products/table">PRODUCTS</CustomLink>
        <CustomLink href="/cart">
          <Button variant="text">
            <Badge badgeContent={props} color="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Badge>
          </Button>
        </CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li
      className={
        path.includes(href)
          ? "bg-blue-700 rounded-md list-none grid place-items-center px-2"
          : "hover:bg-blue-700 rounded-md list-none grid place-items-center px-2"
      }
    >
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
