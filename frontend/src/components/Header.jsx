import React from "react";
import location from "../assets/header/location.svg";
import search from "../assets/header/search.svg";
import shoppingcart from "../assets/header/shoppingcart.svg";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center h-14 bg-Headers p-2 mx-0">
      <div className="flex items-center space-x-2 mx-2">
        <span
          className="cursor-pointer"
          style={{
            fontFamily: "Herr Von Muellerhoff",
            fontWeight: "bold",
            fontSize: "36px",
          }}
        >
          Enchanted Pages
        </span>
      </div>
      <div className="flex items-center m-6 gap-3 cursor-pointer">
        <img src={location} alt="location" className="h-5" />
        <div className="text-lg">
          <div>Delivering to Allahabad</div>
          <div>211019</div>
        </div>
      </div>
      <div className="flex items-center h-full flex-grow mx-4">
        <div className="flex items-center h-full w-full border rounded-lg">
          <input
            className="h-full p-4 rounded-l-lg flex-grow cursor-pointer"
            placeholder="Search Enchanted Pages.in"
          />
          <button className="bg-pink-400 h-full w-10  cursor-pointer flex justify-center items-center rounded-r-lg">
            <img src={search} alt="search" className="h-5 text-xl" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 mx-2">
        <span>Hello, User</span>
      </div>
      <div className="flex cursor-pointer items-center space-x-2 mx-2">
        <img src={shoppingcart} alt="shoppingcart" className="h-5" />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;
