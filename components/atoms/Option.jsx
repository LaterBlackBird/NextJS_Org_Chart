import React from 'react';
import styles from '../../styles/Option.module.css'

const Option = ({ value, text }) => {
  return (
    <option
      className={styles.option}
      value={value}>
        {text}
    </option>
  )
}

export default Option