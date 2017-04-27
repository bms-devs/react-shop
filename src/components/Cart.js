import React from 'react'

const Cart = (props) => {
  return (
    <ul>
      { props.products.map(p => <li key={p.name} >{p.name} {p.price}</li>) }
    </ul>
  )
}

export default Cart
