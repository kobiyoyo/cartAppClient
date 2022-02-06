import React from 'react';
import {
  List, Skeleton, Button,
} from 'antd';
import { ProductListProps } from './types';

const ProductList = ({ data }: ProductListProps) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        actions={[<Button>Add to cart</Button>]}
      >
        <Skeleton avatar title={false} loading={false} active>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
          />
          <div>{item.price}</div>
        </Skeleton>
      </List.Item>
    )}
  />
);

export default ProductList;
