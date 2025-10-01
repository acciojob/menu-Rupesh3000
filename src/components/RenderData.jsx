import React from "react";

const RenderData = ({ filteredData }) => {
  return (
    // Inside App.jsx (where you render filteredData)
    <div className="render-data-container">
      {filteredData.map((item) => (
        <div className="menu">
          <article
            key={item.id}
            data-test-id={`menu-item-${item.category}`}
            className="menu-item"
          >
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default RenderData;
