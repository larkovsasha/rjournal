import Link from 'next/link';
import styles from './Logo.module.scss';
export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img
          className={styles.logo}
          height={35}
          src="/static/img/logo.svg"
          alt="Logo"
        />
      </a>
    </Link>
  );
};
