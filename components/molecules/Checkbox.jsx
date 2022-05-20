import React from 'react'
import styles from '../../styles/Checkbox.module.css'
import Label from '../atoms/Label'
import Input from '../atoms/Input'

const Checkbox = ({ text, checked, onChange, name, testID }) => {
  return (
    <Label
      text={text}>
        <Input 
          type='checkbox'
          checked={checked}
          onChange={onChange}
          name={name}
          testID={testID}
        />
    </Label>
  )
}

export default Checkbox