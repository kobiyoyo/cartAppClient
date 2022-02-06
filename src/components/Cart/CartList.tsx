/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  List, Skeleton, Button,
} from 'antd';
import { CartListProps } from './types';

const CartList = ({ data }: CartListProps) => {
  const [quantity, setQuantity] = useState(0);
  const handleDrop = (id: number) => {
    console.log(id);
  };

  const handleIncrement = (itemQuantity: number) => {
    console.log(itemQuantity + 1);
  };
  const handleDecrement = () => {
    setQuantity((c) => c - 1);
    console.log(quantity);
  };
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[<Button onClick={() => handleIncrement(item.quantity)}>+</Button>, <Button onClick={handleDecrement}>-</Button>, <Button onClick={() => handleDrop(item.id)}>Drop</Button>]}
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
                  Price:
                  {' '}
                  <b>
                    $
                    {item.product?.price}
                  </b>
                </span>
              </div>

            </div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default CartList;
