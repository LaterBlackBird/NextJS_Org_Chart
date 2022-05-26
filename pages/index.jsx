import styles from "../styles/OrgChart.module.css";

import { getTopEmployee } from "../services/EmployeeService";

import EmployeeBranch from '../components/molecules/EmployeeBranch'


export const getServerSideProps = async () => {
  const data = await getTopEmployee();
  return {
    props: { topEmployee: data }
  }
}

const OrgChart = ({ topEmployee }) => {

  return (
    <div className={styles.orgChartContainer}>
      <p className={styles.orgChartTitle}>Nexient Org Chart</p>
      {topEmployee &&
        topEmployee.map((employee) => {
          return <EmployeeBranch key={employee.id} employeeData={employee} />;
        })}
    </div>
  );
};

export default OrgChart;
