import React, { useCallback } from 'react';
import styles from './EmployeeRow.module.css';
import Hyperlink from '../../atoms/Hyperlink/Hyperlink';
import Button from '../../atoms/Button/Button';
import TableRow from '../../atoms/TableRow/TableRow';
import TableDataCell from '../../atoms/TableData/TableDataCell';

const EmployeeRow = ({ onDelete, employee}) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(employee.id);
    }
  }, [onDelete]);


  return (
    <TableRow children={
      <>
        <TableDataCell testID={`table-row-${employee.id}-column-first-name`} children={employee.firstName} />
        <TableDataCell testID={`table-row-${employee.id}-column-last-name`} children={employee.lastName} />
        <TableDataCell testID={`table-row-${employee.id}-column-middle-initial`} children={employee.middleInitial} />

        <TableDataCell children={
          <>
            <Hyperlink 
              to={`/employees/${employee.id}`}
              testID={`row-${employee.id}-edit-link`}
              text={'Edit'}
            />

            <Button
              testID={`row-${employee.id}-delete-button`}
              onClick={handleDelete}
              text={'Delete'}
            />
          </>
        } />
      </>
    } />
  )
}

export default EmployeeRow