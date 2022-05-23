import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Departments.module.css'
import Table from '../../components/atoms/Table';
import DepartmentTableHead from '../../components/molecules/DepartmentTableHead';
import DepartmentTableBody from '../../components/molecules/DepartmentTableBody';
import LoadingWheel from '../../components/atoms/LoadingWheel';

import { getActiveDepartments, deleteDepartment } from '../../services/DepartmentService';


export const getServerSideProps = async () => {
  const data = await getActiveDepartments();

  return {
    props: { departments: data}
  }
}

const Departments = ({ departments }) => {
  const router = useRouter();
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);


  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <div className={styles.departments}>
      {showLoadingWheel && <LoadingWheel />}
      <Table>
        <>
          <DepartmentTableHead />
          <DepartmentTableBody departments={departments} setShowLoadingWheel={setShowLoadingWheel} refreshData={refreshData}/>
        </>
      </Table>
    </div>
  )
}

export default Departments