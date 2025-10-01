import React from "react";

export default function Menu({ onFilterChange }) {
  return (
    <div className="nav">
      <h1>Our Menu</h1>
      <div className="menu-btn">
        <button>All</button>
        <button
          className="filter-btn"
          id="filter-btn-1"
          onClick={() => onFilterChange("breakfast")}
        >
          Breakfast
        </button>
        <button
          className="filter-btn"
          id="filter-btn-2"
          onClick={() => onFilterChange("lunch")}
        >
          Lunch
        </button>
        <button
          className="filter-btn"
          id="filter-btn-3"
          onClick={() => onFilterChange("shakes")}
        >
          Shakes
        </button>
      </div>
    </div>
  );
}
