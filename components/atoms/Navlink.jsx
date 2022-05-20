import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Navlink.module.css'

const Navlink = ({ destination, label, id }) => {
  const route = useRouter();
  const path = route.pathname;
  let active = false;

  if (path.endsWith(destination)) active = true; 
  
  return (
    <>
      <Link 
        href={destination}>
          <a 
            className={active ? `${styles.navlink} ${styles.active}` : `${styles.navlink}`}
            id={`${styles[id]}`}
          >
            {label}
          </a>
      </Link>
    </>
  )
}

export default Navlink