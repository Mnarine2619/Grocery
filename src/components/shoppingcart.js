import React from 'react';
import './shoppingcart.css';

function computeTotal(cart) {
  if (cart.length > 0) {
    let prices = cart.map(item => item.price)
    let total = prices.reduce((a, b) => a + b)
    return total
  } else { return 0 }
}
function ShoppingCart(props) {
  return (
    <div className="ShoppingCart">
        <div className="cartItem">
          <h3>Sample Item</h3>
          <h5>$ 100</h5>
        </div>
        <div className="cartItem">
          <h3>Sample Two</h3>
          <h5>$ 20</h5>
        </div>
      {props.cart.map((item) => {
        return(
          <div className="cartItem" key={item.name }>
            <h3>{item.name}</h3>
            <h5>$ {item.price}</h5>
          </div>
        )
      })}
      <h2>Total: $ {computeTotal(props.cart)}</h2>
    </div>
  );
}


export default ShoppingCart;
