import React from 'react'

const products = [
    { name: 'Laptop', price: 3500 },
    { name: 'Gaming desktop', price: 5000 },
    { name: 'Tablet', price: 1500 },
    { name: 'Cell phone', price: 1200 },
    { name: 'Playstation', price: 999 }
  ]

const Products = () => (
  <ul>
    { products.map(p => <li>Name: {p.name}, Price: {p.price}</li>) }
  </ul>
)

export default Products
