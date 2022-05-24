import React from 'react'
import styles from "./EmployeeCard.module.css";

const EmployeeCard = ({employee, selected, onToggle, hasEmployees}) => {

  return (
    <div className={styles.employeeCard} name='employee card'>
        <div data-testid={`${employee.id}-display-name`}>{`${employee.firstName} ${employee.lastName}`}</div>
        <div data-testid={`${employee.id}-job-title`}>{`${employee.jobTitle?.name}`}</div>
        <div
            onClick={onToggle}
            className={styles.employeeListToggle}
            data-testid={selected ? `${employee.id}-hide-employees-button`: `${employee.id}-show-employees-button` }>
                {selected ? `Hide Employees` : `Show Employees`}
        </div>
    </div>
  )
}

export default EmployeeCard