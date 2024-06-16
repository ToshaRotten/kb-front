import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <p>Header</p>
      </div>
    </header>
  );
};

export default Header;
