import React from "react";
import home from "../assets/food.jpeg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = "menu";
    navigate(path);
  };
  return (
    <div className="hm">
      <img src={home} className="homeback" alt="homeback" />
      <div className="htext">
        <h2 className="h2">Food Corner</h2>
        <h3>INDIAN FOOD AT A CLICK</h3>
      </div>
      <button className="but" onClick={handleClick}>
        Order-Now
      </button>
    </div>
  );
};

export default Home;
