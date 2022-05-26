import React, { useState, useEffect } from "react";
import styles from "../styles/OrgChart.module.css";

import { useToasts } from 'react-toast-notifications'
import { getTopEmployee } from "../services/EmployeeService";

import EmployeeBranch from '../components/molecules/EmployeeBranch'


export const getServerSideProps = async () => {
  const data = await getTopEmployee();
  return {
    props: { topEmployee: data }
  }
}

const OrgChart = ({ topEmployee }) => {
  const { addToast } = useToasts()

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  return (
    <div className={styles.orgChartContainer}>
      <p className={styles.orgChartTitle}>Nexient Org Chart</p>
      {topEmployee &&
        topEmployee.map((employee) => {
          return <EmployeeBranch key={employee.id} employeeData={employee} />;
        })}
    </div>
  );
};

export default OrgChart;
