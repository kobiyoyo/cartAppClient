/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  Col, Row,
} from 'antd';
import {
  Form,
  FormItem,
  ResetButton,
  Select,
  SubmitButton,
} from 'formik-antd';
import * as Yup from 'yup';
import { InputFormField, InputNumField } from '../../utils/InputFormField';
import { DiscountProps } from '../Discount/types';
import DiscountService from '../../services/DiscountService';
import ProductService from '../../services/ProductService';
import { toSnakeCase } from '../../helper/caseConverter';
import { ProductProps } from './types';

const ProductForm = () => {
  const { Option } = Select;
  const [discountData, setDiscountData] = useState<DiscountProps[]>([]);
  const getDiscounts = async () => {
    const response = await DiscountService.getAll();
    setDiscountData(response);
  };
  const discountOptions = discountData.map((discount) => (
    <Option key={discount.id} value={discount.id}>{discount.name}</Option>));

  const initialValues = {
    id: 0,
    name: '',
    price: 0,
    code: '',
    discountId: 0,
  };

  const productValidation = Yup.object({
    name: Yup.string().required('name is required'),
    price: Yup.number().required('price is required'),
    code: Yup.string().required('code is required'),
    discountId: Yup.number(),
  });

  const onSubmit = (
    values: ProductProps,
    actions: { setSubmitting: (str: boolean) => void, resetForm: () => void},
  ) => {
    ProductService.create(toSnakeCase(values));
    actions.setSubmitting(false);
    actions.resetForm();
    window.location.reload();
  };

  useEffect(() => { getDiscounts(); }, []);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={productValidation}
      render={() => (
        <Form layout="vertical">
          <Row justify="center" style={{ marginTop: '3%' }}>
            <Col span={24}>
              <Col xs={24} sm={24} md={24} lg={18} xl={18} offset={2}>
                <InputFormField
                  name="name"
                  size="middle"
                  label="Name"
                  placeholder="Chubi"
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18} offset={2}>
                <InputFormField
                  name="code"
                  size="middle"
                  label="Code"
                  placeholder="GL2"
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18} offset={2}>
                <InputNumField
                  name="price"
                  size="middle"
                  label="Price"
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18} offset={2}>
                <FormItem name="discountId" label="Dsicount">
                  <Select name="discountId" defaultValue="Select">
                    <Option value={0}>Select</Option>
                    {discountOptions}
                  </Select>
                </FormItem>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <FormItem name="button">
                <SubmitButton size="large">
                  Add
                </SubmitButton>
                <ResetButton style={{ margin: '0 8px' }} size="large">
                  Cancel
                </ResetButton>
              </FormItem>
            </Col>
          </Row>
        </Form>
      )}
    />
  );
};

export default ProductForm;
