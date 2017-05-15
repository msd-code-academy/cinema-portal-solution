import React from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Item
} from 'semantic-ui-react';
import Order from './../components/Order';
import Price from './../components/Price';

const Checkout = (props) => {
  /*
   * TODO display orders
   */
  const orders = [{id: 1}, {id: 2}].map(
    (order) => <Order
      key={order.id}
      order={order}
      onRemoveOrder={props.handleOrderDelete}
    />
  );

  return (
    <Container>
      <Header as='h2' attached='top'>
        Your orders
      </Header>
      <Segment attached>
        <Item.Group>
          {orders}
        </Item.Group>
        <Divider section/>
        <div style={{float: 'right'}}>
          <Price price={NaN} label='Total amount' />
        </div>
        <div style={{clear: 'both'}}></div>
      </Segment>
    </Container>
  );
};

export default Checkout;