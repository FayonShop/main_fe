import DropDownList from '../DropDownList/DropDownList';
import Search from '../Search/Search';
import styles from './Header.module.scss';

export default function Header() {
  const isLogin = false;

  return (
    <div className={styles.container}>
      <Search />
      <DropDownList /> {/* Support */}
      <DropDownList /> {/* Language */}
      {isLogin ? (
        <button className={styles.authBtn}>Sign out</button>
      ) : (
        <button className={styles.authBtn}>Sign in</button>
      )}
    </div>
  );
}
