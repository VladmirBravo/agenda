import { Image } from "react-bootstrap";
import styles from './styles.module.scss';
import Nav from 'react-bootstrap/Nav';
import Link from "next/link";
import ActiveLink  from '../../../ActiveLink/page';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.divHeader}>
          <a>
            <Image className={styles.img}
              width="90%"
              alt=""
              src="/Header.svg"
            ></Image>
          </a>
        </div>
        <div className={styles.divMenu}>
          <nav>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>
            <ActiveLink href="/informacao" activeClassName={styles.active}>
              <a>Informações Úteis</a>
              </ActiveLink>
              <ActiveLink href="/faq" activeClassName={styles.active}>
              <a>FAQ's</a>
            </ActiveLink>
          </nav>
        </div>
      </header>
    </>
  )
}