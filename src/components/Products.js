import React from 'react'

const Products = (props) => {
  return (
    <ul>
      { props.products.map(p => <Product key={p.name} name={p.name} price={p.price} onProductSelect={props.onProductSelect} />) }
    </ul>
  )
}

const Product = (props) => (
  <li>
    Name: {props.name}, Price: {props.price} <input type="checkbox" onChange={() => props.onProductSelect(props.name)} />
  </li>
)

export default Products
