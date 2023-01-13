import React, {useState} from "react";

function Item({ name, category }) {
  const [toCart, setToCart] = useState("")
 
  function handleAddToCart(){
    if (toCart === ""){
      setToCart("in-cart")
    }
    else setToCart("")


  }
  
const cartOption = toCart ==="" ? "Add to Cart" : "Remove From Cart";
  return (
    <li className={toCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{cartOption}</button>
    </li>
  );
}

export default Item;
