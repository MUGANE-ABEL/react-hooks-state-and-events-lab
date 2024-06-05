import React, {useState} from "react";

function Item({ name, category }) {
const [isInTheCart, setIsInTheCart]= useState(true)

function handleAdding(){
  setIsInTheCart((isInTheCart)=> !isInTheCart)
}

const adding= isInTheCart ? "" : "in-cart"
const buttonApp = isInTheCart ? "add" : "remove"


  return (
    <li className= {adding}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonApp} onClick={handleAdding} >{isInTheCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
