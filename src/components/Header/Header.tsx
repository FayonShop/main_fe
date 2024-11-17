import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../hooks/useTheme';
import DropDownList from '../DropDownList/DropDownList';
import Search from '../Search/Search';
import styles from './Header.module.scss';

export default function Header() {
  const isLogin = false;
  const { setTheme, isLight } = useTheme();

  return (
    <div className={styles.container}>
      <Search />
      <DropDownList /> {/* Support */}
      <DropDownList /> {/* Language */}
      <button onClick={() => setTheme(isLight ? 'dark' : 'light')}>
        <FontAwesomeIcon icon={isLight ? faSun : faMoon} />
      </button>
      {isLogin ? (
        <button className={styles.authBtn}>Sign out</button>
      ) : (
        <button className={styles.authBtn}>Sign in</button>
      )}
    </div>
  );
}
