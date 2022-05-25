import React, { useCallback } from 'react';
import styles from '../../styles/JobTitleRow.module.css';
import Hyperlink from '../atoms/Hyperlink';
import Button from '../atoms/Button';
import TableRow from '../atoms/TableRow';
import TableDataCell from '../atoms/TableDataCell';

const JobTitleRow = ({ title, onDelete }) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(title.id);
    }
  }, [onDelete, title.id]);

  return (
    <TableRow>
        <TableDataCell 
          testID={`table-row-${title.id}-column-job-title`}
          content={title.name} />
        <TableDataCell content={
          <>
            <Hyperlink 
              to={`/titles/${title.id}`}
              testID={`row-${title.id}-edit-link`}
              text={'Edit'}
            />

            <Button
              testID={`row-${title.id}-delete-button`}
              onClick={handleDelete}
              text={'Delete'}
            />
          </>
        } />
    </TableRow>

  )
}

export default JobTitleRow