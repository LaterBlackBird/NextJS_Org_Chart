import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Hyperlink.module.css'

const Hyperlink = ({to, text, testID}) => {
  return (
    <Link
      href={to}>
        <a
          className={styles.link}
          data-testid={testID}
        >
          {text}
        </a>
    </Link>
  )
}

export default Hyperlink