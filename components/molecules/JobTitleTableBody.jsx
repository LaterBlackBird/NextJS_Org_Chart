import React, { useState, useEffect, useCallback } from 'react';
import { getJobTitles, deleteJobTitle } from "../../../services/JobTitleService";
import { useToasts } from 'react-toast-notifications';
import TableBody from '../../atoms/TableBody/TableBody';
import JobTitleRow from './JobTitleRow/JobTitleRow';

const JobTitleTableBody = ({ setShowLoadingWheel }) => {
  const [jobTitles, setJobTitles] = useState([]);
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const loadAllTitles = async () => {
    setShowLoadingWheel(true);
    const getTitles = await getJobTitles();
    setJobTitles(getTitles);
    setShowLoadingWheel(false);
  };

  const deleteTitle = useCallback( 
    async (titleId) => {
      try {
        setShowLoadingWheel(true);
        await deleteJobTitle(titleId);
        showToast('Job Title Deleted','success');
        loadAllTitles();
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
  , []);

  useEffect(() => {
    loadAllTitles();
  },[]);
    
  return (
    <TableBody children={
      jobTitles &&
        jobTitles.map(title => (
          <JobTitleRow key={title.id} onDelete={deleteTitle} title={title} />
        ))
    } />
  )
}

export default JobTitleTableBody