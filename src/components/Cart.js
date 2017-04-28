import React from 'react'

const Cart = (props) => {

  const calculatePrice = () => props.products
    .map(p => p.price)
    .reduce((left, right) => left + right, 0)

  return (
    <div className="cart">
      <div className="cart-elements">
        <ul>
          { props.products.map(p => <li key={p.name}>{p.name} {p.price}</li>) }
        </ul>
      </div>
      <div>SUM: {calculatePrice()}</div>
    </div>
  )
}

export default Cart
