import React from 'react'
import styles from '../../styles/TableHead.module.css'

const TableHead = ({ children }) => {
  return (
    <thead className={styles.thead}>
      {children}
    </thead>
  )
}

export default TableHead