import React from 'react'
import styles from './InputField.module.css'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

const InputField = ({ text, value, onChange, name, testID, placeholder }) => {
  return (
    <div className={styles.inputField}>
      <Label
        text={text}
        children={
          <Input 
            type='text'
            onChange={onChange}
            name={name}
            testID={testID}
            placeholder={placeholder}
            value={value}
          />
        }
      />
    </div>
  )
}

export default InputField