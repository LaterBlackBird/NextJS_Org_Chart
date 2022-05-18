import React, { useState} from 'react';
import styles from './EmployeeTable.module.css';
import Table from '../../atoms/Table/Table';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';
import EmployeeTableBody from '../EmployeeTableBody/EmployeeTableBody';
import LoadingWheel from "../../atoms/LoadingWheel/LoadingWheel";

const EmployeeTable = () => {
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  return (
    <>
      {showLoadingWheel && <LoadingWheel />}
      <Table children={
        <>
          <EmployeeTableHead />
          <EmployeeTableBody setShowLoadingWheel={setShowLoadingWheel}/>
        </>
      } />
    </>
  );
};

export default EmployeeTable;