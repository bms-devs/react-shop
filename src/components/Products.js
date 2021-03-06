import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import {Card, CardText, CardHeader} from 'material-ui/Card';

const ProductsCard = (props) => {
  return (
    <Card className="card-margin">
      <CardHeader title={props.category}/>
      <CardText>
        <Products {...props}/>
      </CardText>
    </Card>
  )
}

const Products = (props) => {
  return (
    <div>
      {props.products.map(
        p => <Product key={p.name} name={p.name} price={p.price} onProductSelect={props.onProductSelect}/>)}
    </div>
  )
}

const Product = (props) => (
  <div>
    <Checkbox label={props.name + ' ' + props.price + ' $'}
              onCheck={() => props.onProductSelect(props.name)}/>
  </div>
)

export default ProductsCard
