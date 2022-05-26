import { Suspense } from 'react';

import { getEmployeeById, getEmployees } from "../../services/EmployeeService";
import { getJobTitles } from "../../services/JobTitleService";
import { getActiveDepartments } from '../../services/DepartmentService'

import LoadingWheel from '../../components/atoms/LoadingWheel';
import EmployeeForm from '../../components/organisms/EmployeeForm';

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const [ departments, titles, employees, employee ] = await Promise.all([
    getActiveDepartments(),
    getJobTitles(),
    getEmployees(),
    getEmployeeById(id)
  ]);
  return {
    props: { departments, titles, employees, employee }
  }
}

const EmployeeDetails = ({ departments, titles, employees, employee }) => {
  return (
    <Suspense fallback={<LoadingWheel />}>
      <EmployeeForm departments={departments} titles={titles} employees={employees} employee={employee}/>
    </Suspense>
  )
}

export default EmployeeDetails