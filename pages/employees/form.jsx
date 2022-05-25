import { Suspense } from 'react';

import { getEmployees } from "../../services/EmployeeService";
import { getJobTitles } from "../../services/JobTitleService";
import { getActiveDepartments } from '../../services/DepartmentService'

import LoadingWheel from '../../components/atoms/LoadingWheel';
import EmployeeForm from '../../components/organisms/EmployeeForm';

export const getServerSideProps = async () => {
  const [ departments, titles, employees ] = await Promise.all([
    getActiveDepartments(),
    getJobTitles(),
    getEmployees()
  ]);
  return {
    props: { departments, titles, employees }
  }
}

const NewEmployeeForm = ({ departments, titles, employees }) => {
  return (
    <Suspense fallback={<LoadingWheel />}>
      <EmployeeForm departments={departments} titles={titles} employees={employees}/>
    </Suspense>
  )
}

export default NewEmployeeForm