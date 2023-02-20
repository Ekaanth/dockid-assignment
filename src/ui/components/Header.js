import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-end items-end">
        <Link to={"/account"}>
          <img
            src="https://placeimg.com/640/480/any"
            className="rounded-full w-8 h-8"
            alt="user"
          />
        </Link>
      </div>
    </header>
  );
};
