import React, { useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createDepartment, getDepartmentById, updateDepartment } from "../../../services/DepartmentService";
import { useToasts } from 'react-toast-notifications';
import deptReducer, { initialDepartment } from "../../../reducers/DepartmentReducer";
import styles from './DepartmentForm.module.css';
import Form from '../../atoms/Form/Form';
import InputField from '../InputField/InputField';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../../atoms/Button/Button';
import LoadingWheel from "../../atoms/LoadingWheel/LoadingWheel";

const DepartmentForm = () => {
  const { id } = useParams();
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

  const submitNewDepartment = async (e) => {
    e.preventDefault();
    try {
      setShowLoadingWheel(true);
      id ? await updateDepartment(state) : await createDepartment(state);
      dispatch({type:'reset'});
      showToast('Department Saved','success');
      setShowLoadingWheel(false);
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  useEffect(() => {
    const getDeptDetails = async (deptId) => {
      try {
        setShowLoadingWheel(true);
        const deptData = await getDepartmentById(deptId);
        dispatch({type:'updateAll', value: deptData});
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
    
    if (id) {
      getDeptDetails(id);
    } else {
      dispatch({type: 'reset'});
    }
  },[id])


  return (
    <div className={styles.departmentForm}>
      {showLoadingWheel && <LoadingWheel />}
      <Form
        onSubmit={submitNewDepartment}
        children={
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
              onClick={submitNewDepartment}
              text={'Save'}
            />
          </>
        }
      />
    </div>
  )
}

export default DepartmentForm