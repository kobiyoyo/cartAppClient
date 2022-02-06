import React from 'react';
import { Formik } from 'formik';
import {
  Col, message, Row,
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

const ProductForm = () => {
  const { Option } = Select;

  const initialValues = {
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values,
        { setSubmitting },
      ) => {
        console.log(values);
        message.error("We couldn't save product, try again!", 2);
        setSubmitting(false);
      }}
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
                    <Option value={1}>Buy one Take one</Option>
                    <Option value={2}>Buy three more and get half price</Option>
                  </Select>
                </FormItem>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <FormItem name="button">
                <SubmitButton disabled size="large">
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
