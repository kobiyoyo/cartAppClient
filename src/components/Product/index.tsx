import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { clearState, getProducts } from '../../features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCarts } from '../../features/CartSlice';
import useFilter from '../../hooks/useFetch';

const Product = () => {
  const { Title } = Typography;
  const dispatch = useAppDispatch();
  const {
    isSuccess, isError, errorMessage, products,
  } = useAppSelector(
    (state) => state.products,
  );
  const {
    cart, isError: isCartError, isSuccess: isCartSuccess, errorMessage: errorCartMessage,
  } = useAppSelector((state) => state.carts);

  useEffect(() => () => { dispatch(clearState()); }, []);
  useEffect(() => { dispatch(getProducts()); dispatch(getCarts()); }, []);
  const [productData] = useFilter(products, isError, isSuccess, errorMessage);
  const [cartData] = useFilter(cart, isCartError, isCartSuccess, errorCartMessage);
  const cartIds = cartData.map((item:{ product: { id: number }}) => item.product.id);

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
