import React, { useState, useReducer, useEffect } from 'react';
import styles from '../../styles/TitleForm.module.css';
import titleReducer, { initialJobTitle } from '../../reducers/JobTitleReducer';
import { createJobTitle, updateJobTitle } from "../../services/JobTitleService";
import { useToasts } from 'react-toast-notifications';
import Form from '../../components/atoms/Form';
import InputField from '../../components/molecules/InputField';
import Checkbox from '../../components/molecules/Checkbox';
import Button from '../../components/atoms/Button';

const JobTitleForm = ({ title }) => {
  const [state, dispatch] = useReducer(titleReducer, initialJobTitle)
  const { addToast } = useToasts()
  const [showLoadingWheel, setShowLoadingWheel] = useState(false);

  useEffect(() => {
    if (title) dispatch({type:'update', field: 'name', value: title.name});
  }, [title])
  
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

  const submitNewTitle = async (e) => {
    e.preventDefault();
    try {
      title ? await updateJobTitle(state) : await createJobTitle(state)
      dispatch({type:'reset'})
      showToast('Job Title Saved','success')
    } catch (error) {
      showToast(error.message, 'error')
    }
  };

  return (
    <div className={styles.titleForm}>
      <Form onSubmit={submitNewTitle}>
            <InputField 
              text='Job Title Name'
              onChange={updateState}
              testID='create-title-name'
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
              testID='create-title-save-button' 
              onClick={submitNewTitle}
              text={'Save'}
            />
      </Form>
    </div>
  )
}

export default JobTitleForm