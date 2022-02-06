import React, { useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { ProductProps } from './types';
import ProductService from '../../services/ProductService';
import CartService from '../../services/CartService';

const Product = () => {
  const { Title } = Typography;
  const [cartIds, setCartIds] = useState<number[]>([]);
  const [productData, setProductData] = useState<ProductProps[]>([]);
  const getProducts = async () => {
    const response = await ProductService.getAll();
    setProductData(response);
  };
  const getCartIds = async () => {
    const response = await CartService.getAll();
    const data = response.map((cart:{ product: { id: number }}) => cart.product.id);
    setCartIds(data);
  };
  useEffect(() => { getProducts(); getCartIds(); }, []);
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
        <ProductList data={productData} cartIds={cartIds} />
      </Col>
    </Row>

  );
};

export default Product;
