import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import MenuItems from "../components/MenuItems";
import "./filter.css";

const allListItems = [
  ...new Set(
    Menu.map((currEle) => {
      return currEle.Category;
    })
  ),
  "all",
];

function FilterImage() {
  const [items, setItems] = useState(Menu);
  const [allitems, setAllItems] = useState(allListItems);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((item) => {
      return item.Category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <div className="filter">
      <Header filterItem={filterItem} allitems={allitems} />
      <MenuItems items={items} />
    </div>
  );
}

export default FilterImage;
