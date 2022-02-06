import React from 'react';
import {
  List, Skeleton, Button,
} from 'antd';
import { ProductListProps } from './types';
import OrderItemService from '../../services/OrderItemService';

const ProductList = ({ data, cartIds }: ProductListProps) => {
  const handleAddToCart = (id: number) => {
    OrderItemService.create({ product_id: id });
    window.location.reload();
  };
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[cartIds.includes(item.id) ? 'Already Added' : <Button onClick={() => handleAddToCart(item.id)}>Add to cart</Button>]}
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              title={item.name}
            />
            <div>
              $
              {' '}
              {item.price}
            </div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default ProductList;
