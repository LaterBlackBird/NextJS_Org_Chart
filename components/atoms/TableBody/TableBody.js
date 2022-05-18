import React from 'react'
import styles from './TableBody.module.css'

const TableBody = ({ children }) => {
  return (
    <tbody className={styles.tbody}>
      {children}
    </tbody>
  )
}

export default TableBody