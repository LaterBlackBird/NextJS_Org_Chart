import React, { useReducer, useEffect, useState } from "react";
import styles from "./EmployeeForm.module.css";
import { useParams } from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
import { createEmployee, getEmployeeById, getEmployees, updateEmployee } from "../../../services/EmployeeService";
import employeeReducer, { initialEmployee } from "../../../reducers/EmployeeReducer";
import { getJobTitle, getJobTitles } from "../../../services/JobTitleService";
import { getActiveDepartments, getDepartmentById } from '../../../services/DepartmentService'
import Form from '../../atoms/Form/Form';
import InputField from '../InputField/InputField';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../../atoms/Button/Button'; 
import Select from "../../atoms/Select/Select";
import Dropdown from "../Dropdown/Dropdown";
import Option from "../../atoms/Option/Option";
import LoadingWheel from "../../atoms/LoadingWheel/LoadingWheel";

const EmployeeForm = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(employeeReducer, initialEmployee)
  const [jobTitles, setJobTitles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);
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
      if (id) {
        setShowLoadingWheel(true);
        await updateEmployee(state)
        setShowLoadingWheel(false);
      } 
      else {
        setShowLoadingWheel(true);
        dispatch({type:'createNewData'})
        await createEmployee(state);
        setShowLoadingWheel(false);
      }

      dispatch({type:'reset'})
      showToast('Employee Saved','success')
    } catch (error) {
      showToast(error.message, 'error')
    }
  };

  useEffect(() => {
    const getEmployeeDetails = async (employeeId) => {
      try {
        setShowLoadingWheel(true);
        const employeeData = await getEmployeeById(employeeId);
        dispatch({type:'updateAll', value: employeeData})
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
    
    if (id) {
      getEmployeeDetails(id)
    } else {
      dispatch({type: 'reset'})
    }
  },[id])

  useEffect(() => {
    const loadAllTitles = async () => {
      setShowLoadingWheel(true);
      const allTitles = await getJobTitles();
      setJobTitles(allTitles)
      setShowLoadingWheel(false);
    };
    loadAllTitles();
  }, [])

  useEffect(() => {
    const loadAllDepartments = async () => {
      setShowLoadingWheel(true);
      const allDepartments = await getActiveDepartments();
      setDepartments(allDepartments)
      setShowLoadingWheel(false);
    };
    loadAllDepartments();
  }, [])

  useEffect(() => {
    const loadAllEmployees = async () => {
      setShowLoadingWheel(true);
      const allEmployees = await getEmployees();
      setEmployees(allEmployees)
      setShowLoadingWheel(false);
    };
    loadAllEmployees();
  }, [])

  return (
    <div className={styles.employeeForm}>
      {showLoadingWheel && <LoadingWheel />}
      <Form
        onSubmit={submitNewEmployee}
        children={
          <>
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
              onChange={(e) => updateState(e, jobTitles)}
              testID='create-employee-job-title'
              name='jobTitle'
              options={
                <>
                <Option 
                  value={0}
                  text='-' />
                {jobTitles.map(title => {
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
          </>
        }
      />
    </div>
  )
}

export default EmployeeForm