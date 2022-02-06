import React from 'react';
import { Col, Row, Typography } from 'antd';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Product = () => {
  const { Title } = Typography;
  const rawData = [{
    name: 'Coffee',
    code: 'GL2',
    price: 3.11,
  }, {
    name: 'Strawberries',
    code: 'CL2',
    price: 5.0,
  }];
  return (
    <Row>
      <Col span="24">
        {' '}
        <Title>Product</Title>
        {' '}
      </Col>
      <Col span="24">
        <ProductForm />
      </Col>
      <Col span="24">
        <ProductList data={rawData} />
      </Col>
    </Row>

  );
};

export default Product;
