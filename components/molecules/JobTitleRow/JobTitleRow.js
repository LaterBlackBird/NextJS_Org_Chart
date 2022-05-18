import React, { useCallback } from 'react';
import styles from './JobTitleRow.module.css';
import Hyperlink from '../../atoms/Hyperlink/Hyperlink';
import Button from '../../atoms/Button/Button';
import TableRow from '../../atoms/TableRow/TableRow';
import TableDataCell from '../../atoms/TableData/TableDataCell';

const JobTitleRow = ({ title, onDelete }) => {

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(title.id);
    }
  }, [onDelete]);

  return (
    <TableRow children={
      <>
        <TableDataCell testID={`table-row-${title.id}-column-job-title`} children={title.name} />
        <TableDataCell children={
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
      </>
    } />

  )
}

export default JobTitleRow