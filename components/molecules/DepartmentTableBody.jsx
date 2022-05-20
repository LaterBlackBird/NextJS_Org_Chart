import React, { useState, useEffect, useCallback } from 'react';
import { getActiveDepartments, deleteDepartment } from '../../services/DepartmentService';
import { useToasts } from 'react-toast-notifications';
import TableBody from '../atoms/TableBody';
import DepartmentRow from './DepartmentRow';

export const getStaticProps = async () => {
  const res = await fetch()
}


const DepartmentTableBody = ({ setShowLoadingWheel }) => {
  const [departments, setDepartments] = useState([]);
  const { addToast } = useToasts();

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const loadActiveDepts = async () => {
    setShowLoadingWheel(true);
    const getActive = await getActiveDepartments();
    setDepartments(getActive);
    setShowLoadingWheel(false);
  };

  const deleteDept = useCallback( 
    async (deptId) => {
      try {
        setShowLoadingWheel(true);
        await deleteDepartment(deptId);
        showToast('Department Deleted','success');
        loadActiveDepts();
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
  , []);

  useEffect(() => {
    loadActiveDepts();
  },[]);
    
  return (
    <TableBody>
      {departments &&
        departments.map(dept => (
          <DepartmentRow key={dept.id} onDelete={deleteDept} department={dept} />
        ))}
    </TableBody>
  )
}

export default DepartmentTableBody