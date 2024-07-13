import React from 'react';
import cart from "../assets/cart.png";
import location from "../assets/location.svg";
import search from "../assets/search.svg";
import shoppingcart from "../assets/shoppingcart.svg";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center h-14 bg-Headers p-2">
      <div className="flex items-center space-x-2">
        <span style={{fontFamily:"Herr Von Muellerhoff", fontWeight:"bold", fontSize:"36px"}}>Enchanted Pages</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={location} alt="location" className="h-5" />
        <div className="text-sm">
          <div>Delivering to Allahabad</div>
          <div>211019</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input 
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary "
          
        />
        <img src={search} alt="search" className="h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span>Hello, User</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src={shoppingcart} alt="shoppingcart" className="h-5" />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;
