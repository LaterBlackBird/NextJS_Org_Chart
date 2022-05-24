import React from 'react'
import TableHead from '../../atoms/TableHead/TableHead'
import TableDataCell from '../../atoms/TableData/TableDataCell'
import TableRow from '../../atoms/TableRow/TableRow'

const JobTitleTableHead = () => {
  return (
    <TableHead children={
      <TableRow children={
        <>
          <TableDataCell testID='table-header-job-title' children={'Job Title'} />
          <TableDataCell children={'Actions'} />
        </>
      } />
    } />
  )
}

export default JobTitleTableHead