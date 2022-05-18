import React from 'react'
import TableHead from '../../atoms/TableHead/TableHead'
import TableDataCell from '../../atoms/TableData/TableDataCell'
import TableRow from '../../atoms/TableRow/TableRow'

const DepartmentTableHead = () => {
  return (
    <TableHead children={
      <TableRow children={
        <>
          <TableDataCell testID='table-header-department-name' children={'Department Name'} />
          <TableDataCell children={'Actions'} />
        </>
      } />
    } />
  )
}

export default DepartmentTableHead