import React from 'react'
import Sidebar from './Sidebar'
import styles from '../../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout