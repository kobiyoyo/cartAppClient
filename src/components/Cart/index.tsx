import React, { useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import CartList from './CartList';
import CartService from '../../services/CartService';
import { CartProps } from './types';

const Cart = () => {
  const { Title } = Typography;
  const [cartData, setCartData] = useState<CartProps[]>([]);
  const getCarts = async () => {
    const response = await CartService.getAll();
    setCartData(response);
  };
  useEffect(() => { getCarts(); }, []);

  return (
    <Row>
      <Col span="24">
        {' '}
        <Title>Cart</Title>
        {' '}
      </Col>
      <Col span="24">
        <CartList data={cartData} />
      </Col>
    </Row>

  );
};

export default Cart;
