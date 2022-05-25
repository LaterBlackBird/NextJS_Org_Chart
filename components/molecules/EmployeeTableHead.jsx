import React from 'react'
import TableHead from '../atoms/TableHead'
import TableDataCell from '../atoms/TableDataCell'
import TableRow from '../atoms/TableRow'

const EmployeeTableHead = () => {
  return (
    <TableHead>
      <TableRow>
          <TableDataCell testID='table-header-first-name' content={'First Name'} />
          <TableDataCell testID='table-header-last-name' content={'Last Name'} />
          <TableDataCell testID='table-header-middle-initial' content={'Middle Initial'} />
          <TableDataCell content={'Actions'} />
      </TableRow>
    </TableHead>
  )
}

export default EmployeeTableHead