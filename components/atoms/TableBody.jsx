import React from 'react'
import styles from '../../styles/TableBody.module.css'

const TableBody = ({ children }) => {
  return (
    <tbody className={styles.tbody}>
      {children}
    </tbody>
  )
}

export default TableBody