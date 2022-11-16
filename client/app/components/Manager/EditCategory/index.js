/**
 *
 * EditCategory
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';
import Switch from '../../Common/Switch';

const EditCategory = props => {
  const {
    products,
    category,
    categoryChange,
    formErrors,
    updateCategory,
    deleteCategory,
    activateCategory
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateCategory();
  };

  return (
    <div className='edit-category'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Danh mục hàng hoá </label>
        <Link to={`/shop/category/${category.slug}`} className='default-link'>
          {category.slug}
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Tên'}
              name={'name'}
              placeholder={'Nhập mỹ'}
              value={category.name}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['slug']}
              label={'Liên kết'}
              name={'slug'}
              placeholder={'nuoc-hoa-nhap-my'}
              value={category.slug}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Mô tả'}
              name={'description'}
              placeholder={'nước hoa như thế nào'}
              value={category.description}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['products']}
              label={'Chọn sản phẩm'}
              multi={true}
              defaultValue={category.products}
              options={products}
              handleSelectChange={value => {
                categoryChange('products', value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              style={{ width: 100 }}
              tooltip={category.isActive}
              tooltipContent={`Disabling ${category.name} will also disable all ${category.name} products.`}
              id={`enable-category-${category._id}`}
              name={'isActive'}
              label={'Khả dụng?'}
              checked={category.isActive}
              toggleCheckboxChange={value =>
                activateCategory(category._id, value)
              }
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
            text='Xoá'
            onClick={() => deleteCategory(category._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
