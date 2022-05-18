import React from 'react';
import styles from './Dropdown.module.css';
import Label from '../../atoms/Label/Label';
import Select from '../../atoms/Select/Select';

const Dropdown = ({ text, value, onChange, testID, name, options }) => {
  return (
    <div className={styles.dropdown}>
      <Label
        text={text}
        children={
          <Select 
            name={name}
            testID={testID}
            value={value}
            onChange={onChange}
            options={options}
          />
        }
      />
    </div>
  )
}

export default Dropdown