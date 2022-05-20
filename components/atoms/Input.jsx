import React from 'react'
import styles from '../../styles/Input.module.css'

const Input = ({ type, value, checked, onChange, name, testID, placeholder }) => {
  return (
    <input
      className={styles.input}
      type={type}
      checked={checked}
      onChange={onChange}
      name={name}
      data-testid={testID}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input