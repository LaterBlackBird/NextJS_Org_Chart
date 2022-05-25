import { getJobTitle } from "../../services/JobTitleService";
import JobTitleForm from '../../components/organisms/JobTitleForm';

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const data = await getJobTitle(id);

  return {
    props: { title: data}
  }
}

const TitleDetail = ({ title }) => {
  return (
    <JobTitleForm title={title} />
  )
}

export default TitleDetail