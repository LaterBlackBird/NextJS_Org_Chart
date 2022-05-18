import React, { useReducer, useEffect, useState } from "react";
import styles from "./JobTitleForm.module.css";
import { useParams } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import { createJobTitle, getJobTitle, updateJobTitle } from "../../../services/JobTitleService";
import titleReducer, { initialJobTitle } from "../../../reducers/JobTitleReducer";
import Form from '../../atoms/Form/Form';
import InputField from '../InputField/InputField';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../../atoms/Button/Button'; 
import LoadingWheel from "../../atoms/LoadingWheel/LoadingWheel";

const JobTitleForm = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(titleReducer, initialJobTitle)
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

  const submitNewJobTitle = async (e) => {
    e.preventDefault();
    try {
      setShowLoadingWheel(true);
      id ? await updateJobTitle(state) : await createJobTitle(state)
      dispatch({type:'reset'})
      showToast('Job Title Saved','success')
      setShowLoadingWheel(false);
    } catch (error) {
      showToast(error.message, 'error')
    }
  };

  useEffect(() => {
    const getTitleDetails = async (deptId) => {
      try {
        setShowLoadingWheel(true);
        const titleData = await getJobTitle(deptId);
        dispatch({type:'updateAll', value: titleData})
        setShowLoadingWheel(false);
      } catch (error) {
        showToast(error.message, 'error');
      }
    }
    
    if (id) {
      getTitleDetails(id)
    } else {
      dispatch({type: 'reset'})
    }
  },[id])
  

  
  return (
    <div className={styles.jobTitleForm}>
      {showLoadingWheel && <LoadingWheel />}
      <Form
        onSubmit={submitNewJobTitle}
        children={
          <>
            <InputField 
              text='Job Title'
              onChange={updateState}
              testID='create-job-title-name'
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
              testID='create-job-title-save-button' 
              onClick={submitNewJobTitle}
              text={'Save'}
            />
          </>
        }
      />
    </div>
  );
};

export default JobTitleForm;
