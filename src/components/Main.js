require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Products from './Products';
import Cart from './Cart';
import {groupBy} from './utils'
import AppBar from 'material-ui/AppBar'

const products = [
  { name: 'Laptop', category: 'Computers', price: 3500 },
  { name: 'Gaming desktop', category: 'Computers', price: 5000 },
  { name: 'Tablet', category: 'Electronics', price: 1500 },
  { name: 'iPhone', category: 'Electronics', price: 1200 },
  { name: 'Playstation', category: 'Electronics', price: 999 },
  { name: 'Battlefield 1', category: 'Games', price: 50 },
  { name: 'FIFA 17', category: 'Games', price: 25 }
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
    const categoryProductsMap = groupBy(products, (p) => p.category)
    return (
      <div>
        <AppBar title="React Shop" showMenuIconButton={false}
                titleStyle={{'text-align': 'center'}}/>
        <section className="container">
          <div className="products-card">
          {Array.from(categoryProductsMap).map(([category, categoryProducts]) => {
            return (
                <Products category={category} products={categoryProducts}
                          onProductSelect={(name) => this.productSelectHandler(name)}/>
            )
          })}
          </div>
          <div className="cart-card">
            <Cart products={this.state.selectedProducts}/></div>
        </section>
      </div>
    );
  }
}
