/* eslint-disable max-len */
import React from 'react';
import {
  List, Skeleton, Button, Col, Row,
} from 'antd';
import { CartListProps } from './types';
import OrderItemService from '../../services/OrderItemService';

const CartList = ({ data }: CartListProps) => {
  const handleDrop = (id: number) => {
    OrderItemService.delete(id);
    window.location.reload();
  };

  const handleIncrement = (itemQuantity: number, itemId: number) => {
    const newQuantity = itemQuantity + 1;
    OrderItemService.update({ quantity: newQuantity }, itemId);
    window.location.reload();
  };
  const handleDecrement = (itemQuantity: number, itemId: number) => {
    const newQuantity = itemQuantity - 1;
    OrderItemService.update({ quantity: newQuantity }, itemId);
    window.location.reload();
  };
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
        <Col span="12"><h1>SubTotal: 23</h1></Col>
        <Col span="12"><h1>Total: 23</h1></Col>
      </Row>
    </>
  );
};
export default CartList;
