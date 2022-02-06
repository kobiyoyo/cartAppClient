/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import DiscountList from './DiscountList';
import { DiscountProps } from './types';
import DiscountService from '../../services/DiscountService';

const Discount = () => {
  const { Title } = Typography;
  const [discountData, setDiscountData] = useState<DiscountProps[]>([]);
  const getDiscounts = async () => {
    const response = await DiscountService.getAll();
    setDiscountData(response);
  };
  useEffect(() => { getDiscounts(); }, []);
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
