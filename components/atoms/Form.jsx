import React from 'react';
import styles from '../../styles/Form.module.css';

const Form = ({ onSubmit, children }) => {
  return (
    <form 
      className={styles.form}
      onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default Form