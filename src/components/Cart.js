import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';

const Cart = (props) => {

  const calculatePrice = () => props.products
    .map(p => p.price)
    .reduce((left, right) => left + right, 0)

  return (
      <Card className="card-margin">
        <CardTitle title="Cart"/>
        <CardText>
          <ul>
            { props.products.map(p => <li key={p.name}>{p.name} {p.price} $</li>) }
          </ul>
        </CardText>
        <CardActions>
          <RaisedButton label="Buy"/>
          <strong>{calculatePrice()} $</strong>
        </CardActions>
      </Card>
  )
}

export default Cart
