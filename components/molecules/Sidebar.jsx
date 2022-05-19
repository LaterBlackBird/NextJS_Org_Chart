import React from "react";
import Navlink from "../atoms/Navlink";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
      <Navlink destination="/" label='Org Chart' />
      <Navlink destination="/employees" label='Employees' />
      <Navlink destination="/departments" label='Departments' />
      <Navlink destination="/titles" label='Job Titles' />
    </div>
  );
};

export default Sidebar;
