import React from "react";
import Menulist from "../MenuList";
const Menu = () => {
  const list = Menulist.map((namee) => {
    return (
      <div key={namee.id} className="list">
        <img src={namee.image} className="menuph" alt="menuph"></img>
        <h2 key={namee.id} className="menu">
          {namee.name}
        </h2>
        <h2 className="menuprice">₹{namee.price}</h2>
      </div>
    );
  });
  return (
    <div className="head">
      <h1>Our Menu</h1>
      <div className="menus">{list}</div>
    </div>
  );
};

export default Menu;
