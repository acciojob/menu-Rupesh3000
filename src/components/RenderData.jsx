import React from "react";

const RenderData = ({ filteredData }) => {
  return (
    <div>
      {filteredData.map(({ id, title, img, price, desc }) => (
        <div key={id} className="product-card">
          <img src={img} alt={title} />
          <div className="product-content">
            <div className="product-title">
              <span>{title}</span>
              <span className="product-price">${price}</span>
            </div>
            <p className="product-desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderData;
