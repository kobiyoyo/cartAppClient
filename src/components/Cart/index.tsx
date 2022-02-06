import React from 'react';
import { Col, Row, Typography } from 'antd';
import CartList from './CartList';

const Cart = () => {
  const { Title } = Typography;
  const rawdata = [
    {
      id: 1,
      quantity: 10,
      total: 15.55,
      sub_total: 31.1,
      product: {
        id: 1,
        name: 'Green Tea',
        price: 3.11,
        code: 'GR1',
      },
    },
    {
      id: 2,
      quantity: 1,
      total: 5.0,
      sub_total: 5.0,
      product: {
        id: 2,
        name: 'Strawberries',
        price: 5.0,
        code: 'SR1',
      },
    },
    {
      id: 3,
      quantity: 1,
      total: 11.23,
      sub_total: 11.23,
      product: {
        id: 3,
        name: 'Coffe',
        price: 11.23,
        code: 'CF1',
      },
    },
  ];
  return (
    <Row>
      <Col span="24">
        {' '}
        <Title>Cart</Title>
        {' '}
      </Col>
      <Col span="24">
        <CartList data={rawdata} />
      </Col>
    </Row>

  );
};

export default Cart;
