import React from 'react'
import styles from './TableHead.module.css'

const TableHead = ({ children }) => {
  return (
    <thead className={styles.thead}>
      {children}
    </thead>
  )
}

export default TableHead