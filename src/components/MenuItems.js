import React from "react";
import "./menuitem.css";
function MenuItems({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="menu" key={item.idCategory}>
            <div className="menu__image">
              <img src={item.strCategoryThumb} alt="" />
            </div>
            <div className="menu__content">
              <div className="menu__title">
                <h1>{item.strCategory}</h1>
              </div>
              <div className="menu__description">
                <p>{item.strCategoryDescription}</p>
              </div>
              <div className="menu__btn">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
