import React, { useEffect, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { ProductProps } from './types';
import { clearState, getProducts } from '../../features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Product = () => {
  const { Title } = Typography;
  const [cartIds, setCartIds] = useState<number[]>([]);
  const [productData, setProductData] = useState<ProductProps[]>([]);
  const dispatch = useAppDispatch();
  const {
    isSuccess, isError, errorMessage, products,
  } = useAppSelector(
    (state) => state.products,
  );
  const { carts } = useAppSelector((state) => state.carts);
  const fetchProductData = async () => setProductData(products);

  const fetchCartData = async () => {
    const data = carts.map((cart:{ product: { id: number }}) => cart.product.id);
    setCartIds(data);
  };

  useEffect(() => () => { dispatch(clearState()); }, []);
  useEffect(() => { dispatch(getProducts()); }, []);
  useEffect(() => {
    if (isSuccess) {
      fetchProductData();
      fetchCartData();
    }
    if (isError) {
      console.error(errorMessage);
    }
    dispatch(clearState());
  }, [isSuccess, isError, products]);
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
