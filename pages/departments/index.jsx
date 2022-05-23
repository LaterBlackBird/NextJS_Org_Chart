import React, { useState } from 'react';
import styles from '../../styles/Departments.module.css'
import Table from '../../components/atoms/Table';
import DepartmentTableHead from '../../components/molecules/DepartmentTableHead';
import DepartmentTableBody from '../../components/molecules/DepartmentTableBody';
import LoadingWheel from '../../components/atoms/LoadingWheel';

import { getActiveDepartments, deleteDepartment } from '../../services/DepartmentService';


export const getStaticProps = async () => {
  const res = await getActiveDepartments();
  console.log('static props')
  console.log(res);
  // const data = await res.json();

  return {
    props: { departments: res}
  }
}

const Departments = ({ departments }) => {
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  return (
    <div className={styles.departments}>
      {showLoadingWheel && <LoadingWheel />}
      <Table>
        <>
          <DepartmentTableHead />
          <DepartmentTableBody departments={departments} setShowLoadingWheel={setShowLoadingWheel}/>
        </>
      </Table>
    </div>
  )
}

export default Departments