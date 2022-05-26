import React, { useState, useEffect, useCallback } from 'react';
import styles from '../../styles/EmployeeTableBody.module.css';
import { useToasts } from 'react-toast-notifications';
import { getEmployees, deleteEmployee } from "../../services/EmployeeService";
import TableBody from '../atoms/TableBody';
import EmployeeRow from './EmployeeRow'

const EmployeeTableBody = () => {
  const [employees, setEmployees] = useState([]);
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const loadActiveEmployees = async () => {
    const getActive = await getEmployees();
    setEmployees(getActive);
  };

  const deleteSelected = useCallback(
    async (employeeId) => {
    try {
      await deleteEmployee(employeeId);
      showToast('Employee Deleted','success');
      loadActiveEmployees();
    } catch (error) {
      showToast(error.message, 'error');
    }
  }
  , []);

  useEffect(() => {
    loadActiveEmployees();
  },[]);


  return (
    <TableBody>
      {employees &&
        employees.map(employee => (
          <EmployeeRow key={employee.id} onDelete={deleteSelected} employee={employee} />
        ))
      }
    </TableBody>
  )
}

export default EmployeeTableBody