import React, { useCallback } from 'react';
import styles from '../../styles/DepartmentRow.module.css';
import Hyperlink from '../atoms/Hyperlink';
import Button from '../atoms/Button';
import TableRow from '../atoms/TableRow';
import TableDataCell from '../atoms/TableDataCell';

const DepartmentRow = ({ department, onDelete }) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(department.id);
    }
  }, [onDelete]);

  return (
    <TableRow>
      <>
        <TableDataCell testID={`table-row-${department.id}-column-department-name`} content={department.name} />
        <TableDataCell content={
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
    </TableRow>

  )
}

export default DepartmentRow