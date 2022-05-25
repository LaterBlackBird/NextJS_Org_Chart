import React, { useCallback } from 'react';
import { deleteDepartment } from '../../services/DepartmentService';
import { useToasts } from 'react-toast-notifications';
import TableBody from '../atoms/TableBody';
import DepartmentRow from './DepartmentRow';


const DepartmentTableBody = ({ departments, setShowLoadingWheel, refreshData }) => {
  const { addToast } = useToasts();

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const deleteDept = useCallback( 
    async (deptId) => {
      try {
        setShowLoadingWheel(true);
        await deleteDepartment(deptId)
        await refreshData();
        showToast('Department Deleted','success');
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
  , []);
    
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