import React from "react";
import "./header.css";
function header({ filterItem, allitems }) {
  return (
    <div className="header">
      <h1>Order Your Favourite Dish</h1>
      <hr />
      <div className="header__btn">
        {allitems.map((currElem, index) => {
          return (
            <button key={index} onClick={() => filterItem(currElem)}>
              {currElem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default header;
