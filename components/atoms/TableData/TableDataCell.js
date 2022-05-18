import React from 'react'
import styles from './TableDataCell.module.css'

const TableDataCell = ({ testID, children }) => {
  return (
    <td 
      className={styles.td}
      data-testid={testID}>
        <div className={styles.tableDataChildren}>
          {children}
        </div>
    </td>
  )
}

export default TableDataCell