import React from 'react'
import styles from '../../styles/TableRow.module.css'

const TableRow = ({ children }) => {
  return (
    <tr className={styles.tr}>
      {children}
    </tr>
  )
}

export default TableRow