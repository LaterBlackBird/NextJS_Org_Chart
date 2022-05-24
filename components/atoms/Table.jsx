import React from 'react'
import styles from '../../styles/Table.module.css'

const Table = ({ children }) => {
  return (
    <table className={styles.table}>
      {children}
    </table>
  )
}

export default Table