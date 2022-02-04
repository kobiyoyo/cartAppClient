import React from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Typography } from 'antd';
import Discount from './components/Discount';
import Cart from './components/Cart';
import Product from './components/Product';

const App = () => {
  const { Title } = Typography;

  return (
    <Row className="row" justify="center">
      <Col span={24}>
        {' '}
        <Title>E-commerce</Title>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={6} offset={1}><Product /></Col>
          <Col span={6} offset={1}><Cart /></Col>
          <Col span={6} offset={1}><Discount /></Col>
        </Row>
      </Col>

    </Row>
  );
};
export default App;
