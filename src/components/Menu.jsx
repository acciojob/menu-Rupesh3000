import React from "react";

const Menu = ({ onFilterChange }) => {
  return (
    <>
      <h1>Our Menu</h1>
      <div className="menu-btn">
        <button>All</button>
        <button className="filter-btn" id="filter-btn-1" onClick={()=>onFilterChange("breakfast")}>Breakfast</button>
        <button className="filter-btn" id="filter-btn-2" onClick={()=>onFilterChange("lunch")}>Lunch</button>
        <button className="filter-btn" id="filter-btn-3" onClick={()=>onFilterChange("shakes")}>Shakes</button>
      </div>
    </>
  );
};

export default Menu;
