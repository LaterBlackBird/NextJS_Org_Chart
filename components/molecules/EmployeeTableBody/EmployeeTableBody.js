import React, { useState, useEffect, useCallback } from 'react';
import styles from './EmployeeTableBody.module.css';
import { useToasts } from 'react-toast-notifications';
import { getEmployees, deleteEmployee } from "../../../services/EmployeeService";
import TableBody from '../../atoms/TableBody/TableBody';
import EmployeeRow from '../EmployeeRow/EmployeeRow'

const EmployeeTableBody = ({ setShowLoadingWheel }) => {
  const [employees, setEmployees] = useState([]);
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const loadActiveEmployees = async () => {
    setShowLoadingWheel(true);
    const getActive = await getEmployees();
    setEmployees(getActive);
    setShowLoadingWheel(false);
  };

  const deleteSelected = useCallback(
    async (employeeId) => {
    try {
      setShowLoadingWheel(true);
      await deleteEmployee(employeeId);
      showToast('Employee Deleted','success');
      loadActiveEmployees();
      setShowLoadingWheel(false);
    } catch (error) {
      showToast(error.message, 'error');
    }
  }
  , []);

  useEffect(() => {
    loadActiveEmployees();
  },[]);


  return (
    <TableBody children={
      employees &&
        employees.map(employee => (
          <EmployeeRow key={employee.id} onDelete={deleteSelected} employee={employee} />
        ))
    } />
  )
}

export default EmployeeTableBody