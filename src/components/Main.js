require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Products from './Products';
import Cart from './Cart';

const products = [
  { name: 'Laptop', price: 3500 },
  { name: 'Gaming desktop', price: 5000 },
  { name: 'Tablet', price: 1500 },
  { name: 'Cell phone', price: 1200 },
  { name: 'Playstation', price: 999 }
]

export default class AppComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedProducts: []
    }
  }

  productSelectHandler(name) {
    const selectedProducts = this.state.selectedProducts;
    const wasSelected = selectedProducts.filter(p => p.name === name).length !== 0;
    if (wasSelected) {
      this.setState({selectedProducts: selectedProducts.filter(p => p.name !== name)})
    } else {
      selectedProducts.push(products.find(p => p.name === name))
      this.setState({selectedProducts: selectedProducts})
    }
  }

  render() {
    return (
      <div className="index">
        <div className="main-section">
          <Products products={products} onProductSelect={(name) => this.productSelectHandler(name)} />
        </div>
        <div className="cart">
          <Cart products={this.state.selectedProducts} />
        </div>
      </div>
    );
  }
}
