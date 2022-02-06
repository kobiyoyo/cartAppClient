// import React, { useState, useEffect} from 'react';
// import { Col, Row, Typography } from 'antd';
// import DiscountList from './DiscountList';
// import { fetchWrapper } from '../../services/Base';
// import { baseUrl } from '../../config/baseUrl';
// import { DiscountProps } from './types';


// const Discount = () => {
//   const discountUrl = `${baseUrl}/discounts`;
//   const [discountData, setDiscountData] = useState<DiscountProps[]>([]);
//   const getDiscounts = async () => {
//     try {
//       const response = await fetchWrapper.get(discountUrl);
//       setDiscountData(response.json);
//     } catch (error) {
      
//     }
//   }
//   useEffect(() => {
//     getDiscounts();
//   });
//   const { Title } = Typography;
//   const rawData = [{
//     name: 'DiscountPerPriceService',
//     quantity: 3,
//     description: 'buy 3 or more strawberries, the price should drop to 4.50',
//   },
//   {
//     name: 'DiscountPerTotalService',
//     quantity: 3,
//     description: 'buy 3 or more coffees, the price of all coffees should drop to 2/3 of the original price.',
//   }];
//   return (
//     <Row>
//       <Col span="24">
//         {' '}
//         <Title>Discount</Title>
//         {' '}
//       </Col>
//       <Col span="24">
//         <DiscountList data={rawData} />
//       </Col>
//     </Row>

//   );
// };

// export default Discount;
