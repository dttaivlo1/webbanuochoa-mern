/**
 *
 * UserList
 *
 */

 import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { formatDate } from '../../../utils/date';
import UserRole from '../UserRole';
import './style.css';


const UserList = props => {

  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Group 1',
      children: [
        { field: 'athlete', minWidth: 170, resizable: true },
        { field: 'age', resizable: true },
      ],
    },
    {
      headerName: 'Group 2',
      children: [
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);
  const { users } = props;
   // đawwwwwwww
   
  return (
    <div className='u-list'>
      {users.map((user, index) => (
        <div key={index} className='mt-3 px-4 py-3 user-box'>
          <label className='text-black'>Tên </label>
          <p className='fw-medium'>
            {user?.firstName ? `${user?.firstName} ${user?.lastName}` : 'N/A'}
          </p>
          <label className='text-black'>Email</label>
          <p>{user?.email}</p>
          <label className='text-black'>Nhà cung cấp</label>
          <p>{user?.provider}</p>
          <label className='text-black'>Đăng kí bằng:</label>
          <p>{formatDate(user?.created)}</p>
          <label className='text-black'>Vai trò</label>
          <p className='mb-0'>
            <UserRole user={user} className='d-inline-block mt-2' />

          </p>
        </div>
      ))}
      <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
    </div>
  );
};

export default UserList;
