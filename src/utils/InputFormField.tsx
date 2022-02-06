/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import * as React from 'react';
import { Input, FormItem, InputNumber } from 'formik-antd';
import { FormInputValues } from './types';

export const InputFormField = ({
  name,
  label,
  placeholder,
  size,
  ...rest
}: FormInputValues) => (
  <FormItem name={name} label={label}>
    <Input name={name} placeholder={placeholder} size={size} {...rest} />
  </FormItem>
);

export const InputNumField = ({
  name,
  label,
  placeholder,
  size,
  ...rest
}: FormInputValues) => (
  <FormItem name={name} label={label}>
    <InputNumber name={name} placeholder={placeholder} size={size} {...rest} />
  </FormItem>
);
