import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [display, setDisplay]= useState("All")

function handleDisplay(event){
  setDisplay(event.target.value)
}

const itemsToDisplay= items.filter((item)=> {
  if (display === "All")
    return true;
  return item.category === display
})
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleDisplay}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
