import React, { useCallback } from 'react';
import { deleteJobTitle } from "../../services/JobTitleService";
import { useToasts } from 'react-toast-notifications';
import TableBody from '../atoms/TableBody';
import JobTitleRow from './JobTitleRow';
import LoadingWheel from '../atoms/LoadingWheel';

const JobTitleTableBody = ({ titles, setShowLoadingWheel, refreshData }) => {
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const deleteTitle = useCallback( 
    async (titleId) => {
      try {
        await deleteJobTitle(titleId);
        await refreshData();
        showToast('Job Title Deleted','success');
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
  , []);
    
  return (
    <TableBody>
      {titles &&
        titles.map(title => (
          <JobTitleRow key={title.id} onDelete={deleteTitle} title={title} />
        ))}
    </TableBody>
  )
}

export default JobTitleTableBody