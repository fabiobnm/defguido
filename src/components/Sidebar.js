import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.ul}>
        <li style={styles.left}><Link href="/" style={styles.linkHome}>Guido Borso</Link></li>
        <div style={styles.rightContainer}>
          <li><Link href="/works" style={styles.link}>Works</Link></li>
          <li><Link href="/commissions" style={styles.link}>Commissions</Link></li>
          <li><Link href="/educational" style={styles.link}>Educational</Link></li>
          <li><Link href="/about" style={styles.linkAbout}>about</Link></li>

        </div>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '100%', // Fai in modo che occupi l'intera larghezza dello schermo
    backgroundColor: 'white',
    paddingLeft:'45px',
    paddingRight:'45px',
    paddingTop: '20px',
    position: 'fixed',
    top: '0%',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between', // Questo assicura che gli elementi siano separati in modo corretto
    alignItems: 'center', // Allinea verticalmente gli elementi
    width: '100%',
  },
  left: {
    marginRight: 'auto', // Sposta "home" a sinistra
  },
  rightContainer: {
    display: 'flex',
    gap: '0px', // Aggiungi uno spazio tra gli altri link
  },
  linkHome: {
    display: 'block',
    padding: '5px 0px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
  link: {
    display: 'block',
    padding: '5px 20px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
  linkAbout: {
    display: 'block',
    padding: '5px 0px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '28px',
  },
};

export default Sidebar;
