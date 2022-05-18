import React from 'react';
import styles from './Select.module.css'

const Select = ({ value, testID, name, onChange, options }) => {
  return (
    <select
      className={styles.select}
      name={name}
      data-testid={testID}
      value={value}
      onChange={onChange}
    >
      {options}
    </select>
  )
}

export default Select