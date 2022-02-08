import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import CartList from './CartList';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { clearState, getCarts } from '../../features/CartSlice';
import useFilter from '../../hooks/useFetch';

const Cart = () => {
  const { Title } = Typography;
  const {
    isSuccess, isError, errorMessage, cart,
  } = useAppSelector(
    (state) => state.carts,
  );
  const dispatch = useAppDispatch();
  useEffect(() => () => { dispatch(clearState()); }, []);
  useEffect(() => { dispatch(getCarts()); }, []);
  const [cartData] = useFilter(cart, isError, isSuccess, errorMessage);
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
