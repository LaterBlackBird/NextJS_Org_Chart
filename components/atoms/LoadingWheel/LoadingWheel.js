import React from 'react'
import styles from './LoadingWheel.module.css'

const LoadingWheel = () => {
  console.log('loading...')
  return (
    <div className={styles.ring_container}>
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingWheel