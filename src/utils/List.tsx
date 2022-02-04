import React from 'react';
import {
  List, Skeleton, Button,
} from 'antd';

type ListViewProps = {
 data: any[]
}

const ListView = ({ data }: ListViewProps) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        actions={[<Button>Add</Button>]}
      >
        <Skeleton avatar title={false} loading={item.loading} active>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <div>content</div>
        </Skeleton>
      </List.Item>
    )}
  />
);

export default ListView;
