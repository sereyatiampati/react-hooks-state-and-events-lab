import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //const [list, setList] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState(items)

  function handleFilterChange(event){
    let selected= event.target.value;    
    const newItems= items.filter(item=>item.category===selected);
    setSelectedCategory(newItems)
  }
  
    return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
