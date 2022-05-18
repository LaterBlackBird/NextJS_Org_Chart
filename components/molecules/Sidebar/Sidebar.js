import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  let location = useLocation();

  return (
    <div className={styles.sidebar}>
      <NavLink
        className={styles.navlink}
        activeClassName={styles.active}
        exact
        to="/"
      >
        Org Chart
      </NavLink>

      <NavLink
        className={styles.navlink}
        activeClassName={styles.active}
        to="/employees"
      >
        Employees
      </NavLink>

      {location.pathname.includes("employees") && (
        <NavLink
          className={`${styles.navlink} ${styles.subNav}`}
          activeClassName={styles.active}
          to="/employees/add"
          data-testid='create-employee-link'
        >
          Create Employee
        </NavLink>
      )}

      <NavLink
        className={styles.navlink}
        activeClassName={styles.active}
        to="/departments"
      >
        Departments
      </NavLink>

      {location.pathname.includes("departments") && (
        <NavLink
          className={`${styles.navlink} ${styles.subNav}`}
          activeClassName={styles.active}
          to="/departments/add"
          data-testid='create-department-link'
        >
          Create Department
        </NavLink>
      )}

      <NavLink
        className={styles.navlink}
        activeClassName={styles.active}
        to="/job-titles"
      >
        Job Titles
      </NavLink>

      {location.pathname.includes("titles") && (
        <NavLink
          className={`${styles.navlink} ${styles.subNav}`}
          activeClassName={styles.active}
          to="/titles/add"
          data-testid='create-job-title-link'
        >
          Create Job Title
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
