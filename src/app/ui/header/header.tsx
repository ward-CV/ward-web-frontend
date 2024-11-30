import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.image}
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
      <div className={styles.logo}>
        <Link href="/">WARD</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/home">Главная</Link>
          </li>
          <li>
            <Link href="/home">О нас</Link>
          </li>
          <li>
            <Link href="/home">Услуги</Link>
          </li>
          <li>
            <Link href="/home">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
