import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Titles.module.css'
import Table from '../../components/atoms/Table';
import JobTitleTableHead from '../../components/molecules/JobTitleTableHead/JobTitleTableHead'
import JobTitleTableBody from '../../components/molecules/JobTitleTableBody';
import LoadingWheel from '../../components/atoms/LoadingWheel';

import { getJobTitles } from '../../services/JobTitleService';


export const getServerSideProps = async () => {
  const data = await getJobTitles();

  return {
    props: { titles: data}
  }
}

const Titles = ({ titles }) => {
  const router = useRouter();


  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <div className={styles.titles}>
      <Table>
        <>
          <JobTitleTableHead />
          <JobTitleTableBody titles={titles} setShowLoadingWheel={setShowLoadingWheel} refreshData={refreshData}/>
        </>
      </Table>
    </div>
  )
}

export default Titles