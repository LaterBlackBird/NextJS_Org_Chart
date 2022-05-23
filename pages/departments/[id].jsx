import React, { useState, useReducer, useEffect } from 'react';
import styles from '../../styles/Departments.module.css'
import deptReducer, { initialDepartment } from '../../reducers/DepartmentReducer';
import { getDepartmentById, updateDepartment } from "../../services/DepartmentService";
import { useToasts } from 'react-toast-notifications';
import Form from '../../components/atoms/Form';
import InputField from '../../components/molecules/InputField';
import Checkbox from '../../components/molecules/Checkbox';
import Button from '../../components/atoms/Button';
import LoadingWheel from '../../components/atoms/LoadingWheel';

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const data = await getDepartmentById(id);

  return {
    props: { department: data}
  }
}

const DepartmentDetail = ({ department }) => {
  const [state, dispatch] = useReducer(deptReducer, initialDepartment)
  const { addToast } = useToasts()
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const updateState = (e) => {
    let data;
    if (e.target.checked) data = e.target.checked;
    else data = e.target.value;
    dispatch({type:'update', field: e.target.name, value: data})
  }

  const editDepartment = async (e) => {
    e.preventDefault();
    try {
      setShowLoadingWheel(true);
      await updateDepartment(department.id, state);
      dispatch({type:'reset'});
      setShowLoadingWheel(false);
      showToast('Department Saved','success');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  useEffect(() => {
    const updateName = async (department) => {
      dispatch({type:'update', field: 'name', value: department.name})
    }
    updateName(department)
  }, [])

  return (
    <div className={styles.departmentForm}>
      {showLoadingWheel && <LoadingWheel />}
      <Form onSubmit={editDepartment}>
          <>
            <InputField 
              text='Department Name'
              onChange={updateState}
              testID='create-department-name'
              name='name'
              value={state.name}
            />

            <Checkbox 
              text='Is Active?'
              checked={state.isActive}
              onChange={updateState}
              name='isActive'
            />

            <Button
              testID='create-department-save-button' 
              onClick={editDepartment}
              text={'Save'}
            />
          </>
      </Form>
    </div>
  )
}

export default DepartmentDetail