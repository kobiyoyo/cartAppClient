import React from 'react';
import { Col, Row, Typography } from 'antd';
import ListView from '../../utils/List';

const Cart = () => {
  const { Title } = Typography;
  const rawData = [{}, {}];
  return (
    <Row>
      <Col span="24">
        {' '}
        <Title>Cart</Title>
        {' '}
      </Col>
      <Col span="24">
        <ListView data={rawData} />
      </Col>
    </Row>

  );
};

export default Cart;
