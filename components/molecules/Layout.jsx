import React from 'react'
import Sidebar from './Sidebar'
import styles from '../../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout