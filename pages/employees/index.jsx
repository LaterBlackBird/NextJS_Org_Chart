import { Suspense } from 'react';
import styles from '../../styles/Employees.module.css';
import Table from '../../components/atoms/Table';
import EmployeeTableHead from '../../components/molecules/EmployeeTableHead';
import EmployeeTableBody from '../../components/molecules/EmployeeTableBody';
import LoadingWheel from '../../components/atoms/LoadingWheel';

const Employees = () => {
  return (
    <Suspense fallback={<LoadingWheel />}>
      <Table>
          <EmployeeTableHead />
          <EmployeeTableBody />
      </Table>
    </Suspense>
  );
}

export default Employees