import React from 'react'
import styles from '../../styles/Button.module.css'

const Button = ({ testID, onClick, text }) => {
  return (
    <button
        className={styles.button}
        data-testid={testID}
        onClick={onClick}>
          {text}
    </button>
  )
}

export default Button