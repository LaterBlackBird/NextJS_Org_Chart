import React, { useEffect, useState} from 'react';
import { getEmployeesByManagerId } from '../../../services/EmployeeService';
import EmployeeCard from '../OrgChartEmployeeCard/EmployeeCard';
import styles from './EmployeeBranch.module.css'


const EmployeeBranch = ({employeeData}) => {
    const [showEmployeesFlag, setShowEmployeesFlag] = useState(false);
    const [employeesManaged, setEmployeesManaged] = useState([]);
    const [hasEmployees, setHasEmployees] = useState(false);

    const toggleEmployeesFlag = async () => {
        setShowEmployeesFlag(!showEmployeesFlag);
    }

    const showEmployeeBranches = () => {
        if (hasEmployees) {
            return (
                <div className={styles.branchContainer} name='branch container'>
                        {employeesManaged.map(employee => {
                                return <EmployeeBranch key={employee.id} employeeData={employee}/>
                        })}
                </div >
            )
        }
        return null;
    }

    useEffect(() => {
        const getEmployees = async (id) => {
            const employeeList = await getEmployeesByManagerId(id);
            setEmployeesManaged(employeeList)
        }
        
        getEmployees(employeeData.id);
    },[])
    
    useEffect(() => {
        if (employeesManaged.length > 0) setHasEmployees(true);
    }, [employeesManaged])
    

  return (
    <div className={`${styles.employeeBranch} employeeBranch`} name='employee branch'>
        <EmployeeCard
            employee={employeeData}
            selected={showEmployeesFlag}
            onToggle={toggleEmployeesFlag}
            hasEmployees={hasEmployees}
        />

        {showEmployeesFlag && showEmployeeBranches()}
    </div>
  )
}

export default EmployeeBranch