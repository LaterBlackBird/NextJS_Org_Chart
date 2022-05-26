import React, { useReducer, useEffect } from "react";
import styles from '../../styles/EmployeeForm.module.css'
import { useToasts } from 'react-toast-notifications'

import employeeReducer, { initialEmployee } from "../../reducers/EmployeeReducer";

import Form from '../atoms/Form';
import InputField from '../molecules/InputField';
import Checkbox from '../molecules/Checkbox';
import Button from '../atoms/Button'; 
import Dropdown from "../molecules/Dropdown";
import Option from "../atoms/Option";
import LoadingWheel from "../atoms/LoadingWheel";


const EmployeeForm = ({ departments, titles, employees, employee }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialEmployee)
  const { addToast } = useToasts();

  const showToast = (content, appearance) => {
    addToast(content, {
      appearance,
      autoDismiss: true,
    });
  };

  const updateState = async (e, resource) => {
    e.persist();
    let data;

    if (e.target.type === 'text'){
      data = e.target.value;
    } else if (e.target.type === 'select-one') {
      data = resource.find(item => item.id === parseInt(e.target.value))
      dispatch({type:'update', field: e.target.name, value: data});
    } else if (e.target.type === 'checkbox') {
      data = !state[e.target.name];
    }

    dispatch({type:'update', field: e.target.name, value: data})
  }

  const submitNewEmployee = async (e) => {
    e.preventDefault();
    
    try {
      if (employee) {
        await updateEmployee(state)
      } 
      else {
        dispatch({type:'createNewData'})
        await createEmployee(state);
      }

      dispatch({type:'reset'})
      showToast('Employee Saved','success')
    } catch (error) {
      showToast(error.message, 'error')
    }
  };

  useEffect(() => {
      if (employee) {
        dispatch({type:'updateAll', value: employee});
        dispatch({type:'update', field: 'manager', value: employees[employee.manager_id]});
        dispatch({type:'update', field: 'department', value: departments[employee.department_id]});
        dispatch({type:'update', field: 'jobTitle', value: titles[employee.title_id]});
      }    
  }, [])
  

  return (
    <div className={styles.employeeForm}>
      <Form onSubmit={submitNewEmployee}>
        <InputField 
          text='First Name'
          onChange={updateState}
          testID='create-employee-first-name'
          name='firstName'
          value={state.firstName}
        />

        <InputField 
          text='Last Name'
          onChange={updateState}
          testID='create-employee-last-name'
          name='lastName'
          value={state.lastName}
        />

        <InputField 
          text='Middle Initial'
          onChange={updateState}
          testID='create-employee-middle-initial'
          name='middleInitial'
          value={state.middleInitial}
        />

        <InputField 
          text='Email'
          onChange={updateState}
          testID='create-employee-email'
          name='email'
          value={state.email}
          placeholder={state.firstName && state.lastName && (`${state.firstName[0]}${state.lastName}@nexient.com`).toLowerCase()}
        />            

        <Checkbox 
          text='Is Active?'
          checked={state.isActive}
          onChange={updateState}
          name='isActive'
        />

        <Checkbox 
          text='Is A Manager?'
          checked={state.isManager}
          onChange={updateState}
          name='isManager'
          value={state.isManager}
        />

        <Dropdown
          text='Job Title'
          value={state.jobTitle?.id ?? 0}
          onChange={(e) => updateState(e, titles)}
          testID='create-employee-job-title'
          name='jobTitle'
          options={
            <>
            <Option 
              value={0}
              text='-' />
            {titles.map(title => {
              return(
              <Option 
                key={title.id} 
                value={title.id}
                text={title.name}
              />
            )})}
            </>
          }
        />

        <Dropdown
          text='Department'
          value={state.department?.id ?? 0}
          onChange={(e) => updateState(e, departments)}
          testID='create-employee-department'
          name='department'
          options={
            <>
            <Option 
              value={0}
              text='-' />
            {departments.map(dept => {
              return(
              <Option 
                key={dept.id} 
                value={dept.id}
                text={dept.name}
              />
            )})}
            </>
          }
        />

        <Dropdown
          text='Manager'
          value={state.manager?.id ?? 0}
          onChange={(e) => updateState(e, employees)}
          testID='create-employee-manager'
          name='manager'
          options={
            <>
            <Option 
              value={0}
              text='-' />
            {employees.map(employee => {
              return(
              <Option 
                key={employee.id} 
                value={employee.id}
                text={`${employee.firstName} ${employee.lastName}`}
              />
            )})}
            </>
          }
        />

        <Button
          testID='create-employee-save-button' 
          onClick={submitNewEmployee}
          text={'Save'}
        />
      </Form>
    </div>
  )
}

export default EmployeeForm