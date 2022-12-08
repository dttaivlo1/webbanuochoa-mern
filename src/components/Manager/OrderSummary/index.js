/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';

const OrderSummary = props => {
  const { order } = props;

  return (
    <Col className='order-summary pt-3'>
      <h2>Thông Tin Thanh Toán</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Tổng Tiền</p>
        <p className='summary-value ml-auto'>{order.total} VNĐ</p>
      </div>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>VAT</p>
        <p className='summary-value ml-auto'>{order.totalTax} VNĐ</p>
      </div>

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Phí Vận Chuyển</p>
        <p className='summary-value ml-auto'>Miễn Phí cho đơn hàng trên 500K</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Tổng Cộng</p>
        <p className='summary-value ml-auto'>{order.totalWithTax} VNĐ</p>
      </div>
    </Col>
  );
};

export default OrderSummary;
