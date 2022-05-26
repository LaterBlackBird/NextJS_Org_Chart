import React, { useReducer, useEffect } from "react";
import styles from '../../styles/DepartmentForm.module.css'
import { useToasts } from 'react-toast-notifications';
import { createDepartment, updateDepartment } from "../../services/DepartmentService";
import deptReducer, { initialDepartment } from "../../reducers/DepartmentReducer";
import Form from '../../components/atoms/Form';
import InputField from '../../components/molecules/InputField';
import Checkbox from '../../components/molecules/Checkbox';
import Button from '../../components/atoms/Button';

const DepartmentForm = ({ department }) => {
  const [state, dispatch] = useReducer(deptReducer, initialDepartment)
  const { addToast } = useToasts()

  useEffect(() => {
    if (department) dispatch({type:'update', field: 'name', value: department.name});
  }, [department])

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

  const submitNewDepartment = async (e) => {
    e.preventDefault();
    try {
      department ? await updateDepartment(department.id, state) : await createDepartment(state);
      dispatch({type:'reset'});
      showToast('Department Saved','success');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };


  return (
    <div className={styles.departmentForm}>
      <Form onSubmit={submitNewDepartment}>
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
              onClick={submitNewDepartment}
              text={'Save'}
            />
      </Form>
    </div>
  )
}

export default DepartmentForm