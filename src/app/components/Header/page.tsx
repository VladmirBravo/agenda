import { Image } from "react-bootstrap";
import styles from './styles.module.scss';
import Nav from 'react-bootstrap/Nav';
import Link from "next/link";

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
            <Link href="/">
              Home
            </Link>
            <Link href="/">
              Informações Úteis
            </Link>
            <Link href="/">
              FAQ's
            </Link>
          </nav>
        </div>
      </header>
      <a>

        <div className={styles.imgCentro}>
          <Image
            width="93.8%"
            alt=""
            src="/Mulher.jpg"
          ></Image>
        </div>
      </a>
    </>
  )
}