import React from 'react'
import styles from '../../styles/TableDataCell.module.css'

const TableDataCell = ({ testID, content }) => {
  return (
    <td 
      className={styles.td}
      data-testid={testID}>
        <div className={styles.tableDataChildren}>
          {content}
        </div>
    </td>
  )
}

export default TableDataCell