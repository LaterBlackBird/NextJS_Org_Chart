import React, { useCallback } from 'react';
import styles from '../../styles/EmployeeRow.module.css';
import Hyperlink from '../atoms/Hyperlink';
import Button from '../atoms/Button';
import TableRow from '../atoms/TableRow';
import TableDataCell from '../atoms/TableDataCell';

const EmployeeRow = ({ onDelete, employee}) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(employee.id);
    }
  }, [onDelete]);


  return (
    <TableRow>
        <TableDataCell testID={`table-row-${employee.id}-column-first-name`} content={employee.firstName} />
        <TableDataCell testID={`table-row-${employee.id}-column-last-name`} content={employee.lastName} />
        <TableDataCell testID={`table-row-${employee.id}-column-middle-initial`} content={employee.middleInitial} />
        <TableDataCell content={
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
    </TableRow>
  )
}

export default EmployeeRow