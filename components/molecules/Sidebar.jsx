import { useState } from "react";
import Navlink from "../atoms/Navlink";
import { useRouter } from "next/dist/client/router";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  const route = useRouter();
  let path = route.pathname;

  return (
    <div className={styles.sidebar}>
      <Navlink destination="/" label='Org Chart' />

      <Navlink destination="/employees" label='Employees' />
      {path.includes('/employees') && 
        <Navlink 
          destination="/employees/form" 
          label='Create Employee'
          id='subnav' 
        />
      }

      <Navlink 
        destination="/departments" 
        label='Departments'
      />

      {path.includes('/departments') && 
        <Navlink 
          destination="/departments/form" 
          label='Create Department'
          id='subnav' 
        />
      }

      <Navlink destination="/titles" label='Job Titles' />
      {path.includes('/titles') && 
        <Navlink 
          destination="/titles/form" 
          label='Create Job Title'
          id='subnav' 
        />
      }
    </div>
  );
};

export default Sidebar;
