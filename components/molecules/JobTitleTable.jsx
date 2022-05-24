import React, { useState} from "react";
import styles from "./JobTitleTable.module.css";
import Table from "../../atoms/Table/Table";
import JobTitleTableHead from "../JobTitleTableHead/JobTitleTableHead";
import JobTitleTableBody from "../JobTitleTableBody/JobTitleTableBody";
import LoadingWheel from "../../atoms/LoadingWheel/LoadingWheel";

const JobTitleTable = () => {
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  return (
    <>
      {showLoadingWheel && <LoadingWheel />}
      <Table children={
        <>
          <JobTitleTableHead />
          <JobTitleTableBody setShowLoadingWheel={setShowLoadingWheel}/>
        </>      
      } />
    </>
  );
};

export default JobTitleTable;
