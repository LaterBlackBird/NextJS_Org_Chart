import React from 'react'
import styles from './Checkbox.module.css'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'

const Checkbox = ({ text, checked, onChange, name, testID }) => {
  return (
    <Label
      text={text}
      children={
        <Input 
          type='checkbox'
          checked={checked}
          onChange={onChange}
          name={name}
          testID={testID}
        />
      }
    />
  )
}

export default Checkbox