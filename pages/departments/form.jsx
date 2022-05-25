import React, { useState, useReducer } from 'react';
import styles from '../../styles/Departments.module.css'
import deptReducer, { initialDepartment } from '../../reducers/DepartmentReducer';
import { createDepartment } from "../../services/DepartmentService";
import { useToasts } from 'react-toast-notifications';
import Form from '../../components/atoms/Form';
import InputField from '../../components/molecules/InputField';
import Checkbox from '../../components/molecules/Checkbox';
import Button from '../../components/atoms/Button';
import LoadingWheel from '../../components/atoms/LoadingWheel';
import DepartmentForm from '../../components/organisms/DepartmentForm';

const NewDepartmentForm = () => {
  return (
    <DepartmentForm />
  )
}

export default NewDepartmentForm