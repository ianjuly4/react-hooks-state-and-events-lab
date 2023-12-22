import React, {useState} from "react";

function Item({ name, category }) {
  const [item, setItem] = useState()
  function handleAddToCart(){
    setItem(!item)
  }
  const itemClass = item ? "" : "in-cart"
  const itemColor = item ? "YELLOW" : "PURPLE"
  //const textColor = item ? "BLACK" : "WHITE"
  return (
    <li className={{itemClass}}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
              style={{ background : itemColor}} 
              onClick={handleAddToCart} 
              className="add">
              {item ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
