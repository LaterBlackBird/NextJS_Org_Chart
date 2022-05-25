import React from 'react'
import TableHead from '../atoms/TableHead'
import TableDataCell from '../atoms/TableDataCell'
import TableRow from '../atoms/TableRow'

const JobTitleTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableDataCell testID='table-header-job-title' content={'Job Title'} />
        <TableDataCell content={'Actions'} />
      </TableRow>
    </TableHead>
  )
}

export default JobTitleTableHead