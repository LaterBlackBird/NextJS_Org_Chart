import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hyperlink.module.css'

const Hyperlink = ({to, text, testID}) => {
  return (
    <Link
        className={styles.link}
        to={to}
        data-testid={testID}
    >
        {text}
    </Link>
  )
}

export default Hyperlink