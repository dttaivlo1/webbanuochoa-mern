/**
 *
 * UserRole
 *
 */

import React from 'react';

import { ROLE_ADMIN } from '../../../constants';

const UserRole = props => {
  const { className, user } = props;

  return (
    <>
      {user.role === ROLE_ADMIN ? (
        <span className={`role admin ${className}`}>Quản Trị Viên</span>
      ) : user.role === 'ROLE_MERCHANT' ? (
        <span className={`role merchant ${className}`}>Nhân Viên Bán Hàng</span>
      ) : (
        <span className={`role member ${className}`}>Khách Hàng</span>
      )}
    </>
  );
};

UserRole.defaultProps = {
  className: ''
};

export default UserRole;
