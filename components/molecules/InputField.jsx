import React from 'react'
import styles from '../../styles/InputField.module.css'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const InputField = ({ text, value, onChange, name, testID, placeholder }) => {
  return (
    <div className={styles.inputField}>
      <Label>
        {text}
          <Input 
            type='text'
            onChange={onChange}
            name={name}
            testID={testID}
            placeholder={placeholder}
            value={value}
          />
      </Label>
    </div>
  )
}

export default InputField