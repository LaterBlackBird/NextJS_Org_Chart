import React from 'react';
import TableHead from '../atoms/TableHead';
import TableDataCell from '../atoms/TableDataCell';
import TableRow from '../atoms/TableRow';

const DepartmentTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <>
          <TableDataCell testID='table-header-department-name' content={'Department Name'} />
          <TableDataCell content={'Actions'} />
        </>
      </TableRow>
    </TableHead>
  )
}

export default DepartmentTableHead