import React from 'react'
import TableHead from '../../atoms/TableHead/TableHead'
import TableDataCell from '../../atoms/TableData/TableDataCell'
import TableRow from '../../atoms/TableRow/TableRow'

const EmployeeTableHead = () => {
  return (
    <TableHead children={
      <TableRow children={
        <>
          <TableDataCell testID='table-header-first-name' children={'First Name'} />
          <TableDataCell testID='table-header-last-name' children={'Last Name'} />
          <TableDataCell testID='table-header-middle-initial' children={'Middle Initial'} />

          <TableDataCell children={'Actions'} />
          
        </>
      } />
    } />
  )
}

export default EmployeeTableHead