/* eslint-disable max-len */
import React from 'react';
import {
  List, Skeleton, Button, Col, Row,
} from 'antd';
import { CartListProps } from './types';
import { useAppDispatch } from '../../hooks/hooks';
import { removeFromCart, updateCart } from '../../features/CartSlice';

const CartList = ({ data }: CartListProps) => {
  const dispatch = useAppDispatch();
  const handleDrop = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrement = (itemQuantity: number, itemId: number) => {
    const newQuantity = itemQuantity + 1;
    dispatch(updateCart({ quantity: newQuantity, id: itemId }));
  };
  const handleDecrement = (itemQuantity: number, itemId: number) => {
    const newQuantity = itemQuantity - 1;
    dispatch(updateCart({ quantity: newQuantity, id: itemId }));
  };
  const cartTotalSum = data.map((product) => +product.total).reduce((a, b) => a + b, 0);
  const cartSubTotalSum = data.map((product) => +product.sub_total).reduce((a, b) => a + b, 0);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[<Button onClick={() => handleIncrement(item.quantity, item.id)}>+</Button>, <Button onClick={() => handleDecrement(item.quantity, item.id)}>-</Button>, <Button onClick={() => handleDrop(item.id)}>Drop</Button>]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                title={item.product?.name}
              />
              <div className="total">
                <div>
                  <span>
                    Qty:
                    {' '}
                    {item.quantity}
                  </span>
                </div>
                <div>
                  <span>
                    ST:
                    {' '}
                    <b>
                      $
                      {item.sub_total}
                    </b>
                  </span>
                </div>
                <div>
                  <span>
                    Total:
                    {' '}
                    <b>
                      $
                      {item.total}
                    </b>
                  </span>
                </div>

              </div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Row>
        <Col span="12">
          <h1>
            SubTotal:$
            {' '}
            {cartSubTotalSum.toFixed(2)}
          </h1>
        </Col>
        <Col span="12">
          <h1>
            Total:$
            {' '}
            {cartTotalSum.toFixed(2)}
          </h1>
        </Col>
      </Row>
    </>
  );
};
export default CartList;
