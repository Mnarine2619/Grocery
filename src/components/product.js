import React from 'react';

function Product(props) {
  return (
    <div className="Product">
      <h2>{props.item.name}</h2>
      <h3>${props.item.price}</h3>
      <div className="buttons">
        <button onClick={()=>{props.add(props.item)}}>Add</button>
        <button onClick={()=>{props.remove(props.item)}}>Remove</button>
      </div>
    </div>
  );
  }
export default Product;
