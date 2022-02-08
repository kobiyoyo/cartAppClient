/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import DiscountList from './DiscountList';
import { DiscountProps } from './types';
import DiscountService from '../../services/DiscountService';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import useFilter from '../../hooks/useFetch';
import { clearState, getDiscounts } from '../../features/DiscountSlice';

const Discount = () => {
  const { Title } = Typography;
  const {
    isSuccess, isError, errorMessage, discounts,
  } = useAppSelector(
    (state) => state.discounts,
  );
  const dispatch = useAppDispatch();
  useEffect(() => () => { dispatch(clearState()); }, []);
  useEffect(() => { dispatch(getDiscounts()); }, []);
  const [discountData] = useFilter(discounts, isError, isSuccess, errorMessage);
  return (
    <Row>
      <Col span="24">
        {' '}
        <Title>Discount</Title>
        {' '}
      </Col>
      <Col span="24">
        <DiscountList data={discountData} />
      </Col>
    </Row>

  );
};

export default Discount;
