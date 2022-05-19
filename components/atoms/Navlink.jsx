import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navlink.module.css'

const Navlink = ({ destination, label }) => {
  return (
    <Link href={destination} className={`${styles.navlink}`}><a>{label}</a></Link>
  )
}

export default Navlink