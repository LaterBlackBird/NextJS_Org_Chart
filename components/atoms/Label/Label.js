import React from 'react'
import styles from './Label.module.css'

const Label = ({ children, text }) => {
  return (
    <label className={styles.label}>
      {text}
      {children}
    </label>
  )
}

export default Label