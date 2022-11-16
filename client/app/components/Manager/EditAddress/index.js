/**
 *
 * Edit Address
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Checkbox from '../../Common/Checkbox';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const EditAddress = props => {
  const { address, addressChange, formErrors, updateAddress, deleteAddress } =
    props;

  const handleSubmit = event => {
    event.preventDefault();
    updateAddress();
  };

  return (
    <div className='edit-address'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Địa chỉ'}
              name={'address'}
              placeholder={'Nhà bạn ở đâu?'}
              value={address.address}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['city']}
              label={'Tỉnh/Thành phố'}
              name={'city'}
              placeholder={'City'}
              value={address.city}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['state']}
              label={'Quận/ Huyện'}
              name={'state'}
              placeholder={'State'}
              value={address.state}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['country']}
              label={'Quốc gia'}
              name={'country'}
              placeholder={'Việt Nam'}
              value={address.country}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          
          <Col xs='12' md='12'>
            <Checkbox
              id={'default'}
              label={'Địa chỉ mặc định?'}
              name={'isDefault'}
              checked={address.isDefault}
              onChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Lưu lại'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Xoá bỏ'
            onClick={() => deleteAddress(address._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAddress;
