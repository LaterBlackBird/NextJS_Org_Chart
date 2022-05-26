import React, { useState, useEffect } from "react";
import { useToasts } from 'react-toast-notifications'
import { getTopEmployee } from "../services/EmployeeService";
import EmployeeBranch from '../components/molecules/EmployeeBranch'
import styles from "../styles/OrgChart.module.css";

const OrgChart = () => {

  const [topLevelEmployee, setTopLevelEmployee] = useState([])
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };
  
  useEffect(() => {
    const getTop = async () => {
      try {
        const topEmployees = await getTopEmployee();
        setTopLevelEmployee(topEmployees)
      } catch (error) {
        showToast(error.message, 'error')
      }
    }
    getTop();
  }, [])

  console.log(topLevelEmployee);
  return (
    <div className={styles.orgChartContainer}>
      <p className={styles.orgChartTitle}>Nexient Org Chart</p>
      {topLevelEmployee &&
        topLevelEmployee.map((employee) => {
          return <EmployeeBranch key={employee.id} employeeData={employee} />;
        })}
    </div>
  );
};

export default OrgChart;
