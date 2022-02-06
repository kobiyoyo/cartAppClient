import React from 'react';
import {
  List, Skeleton,
} from 'antd';
import { DiscountListProps } from './types';

const DiscountList = ({ data }: DiscountListProps) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Skeleton avatar title={false} active loading={false}>
          <List.Item.Meta
            title={item.name}
            description={item.description}
          />
          <div>{item.quantity}</div>
        </Skeleton>
      </List.Item>
    )}
  />
);

export default DiscountList;
