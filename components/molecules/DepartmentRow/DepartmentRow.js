import React, { useCallback } from 'react';
import styles from './DepartmentRow.module.css';
import Hyperlink from '../../atoms/Hyperlink/Hyperlink';
import Button from '../../atoms/Button/Button';
import TableRow from '../../atoms/TableRow/TableRow';
import TableDataCell from '../../atoms/TableData/TableDataCell';

const DepartmentRow = ({ department, onDelete }) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(department.id);
    }
  }, [onDelete]);

  return (
    <TableRow children={
      <>
        <TableDataCell testID={`table-row-${department.id}-column-department-name`} children={department.name} />
        <TableDataCell children={
          <>
            <Hyperlink 
              to={`/departments/${department.id}`}
              testID={`row-${department.id}-edit-link`}
              text={'Edit'}
            />

            <Button
              testID={`row-${department.id}-delete-button`}
              onClick={handleDelete}
              text={'Delete'}
            />
          </>
        } />
      </>
    } />

  )
}

export default DepartmentRow