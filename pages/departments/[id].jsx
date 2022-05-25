import { Suspense } from "react";
import { getDepartmentById } from "../../services/DepartmentService";
import DepartmentForm from '../../components/organisms/DepartmentForm';
import LoadingWheel from "../../components/atoms/LoadingWheel";

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const data = await getDepartmentById(id);

  return {
    props: { department: data}
  }
}

const DepartmentDetail = ({ department }) => {
  return (
    <Suspense fallback={LoadingWheel}>
      <DepartmentForm department={department} />
    </Suspense>
  )
}

export default DepartmentDetail