import React, { useState } from 'react';
import styles from '../../styles/Departments.module.css'
import Table from '../../components/atoms/Table';
import DepartmentTableHead from '../../components/molecules/DepartmentTableHead';
import DepartmentTableBody from '../../components/molecules/DepartmentTableBody';
import LoadingWheel from '../../components/atoms/LoadingWheel';

const Departments = () => {
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  return (
    <div className={styles.departments}>
      {showLoadingWheel && <LoadingWheel />}
      <Table>
        <>
          <DepartmentTableHead />
          <DepartmentTableBody setShowLoadingWheel={setShowLoadingWheel}/>
        </>
      </Table>
    </div>
  )
}

export default Departments