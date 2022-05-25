import React, { Suspense, useState} from 'react';
import styles from '../../styles/EmployeeTable.module.css';
import Table from '../atoms/Table';
import EmployeeTableHead from '../EmployeeTableHead';
import EmployeeTableBody from '../EmployeeTableBody';
import LoadingWheel from "../atoms/LoadingWheel";

const EmployeeTable = () => {

  return (
    <Suspense fallback={LoadingWheel}>
      <Table>
          <EmployeeTableHead />
          <EmployeeTableBody setShowLoadingWheel={setShowLoadingWheel}/>
      </Table>
    </Suspense>
  );
};

export default EmployeeTable;