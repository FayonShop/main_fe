import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import DropDownList from '../DropDownList/DropDownList';
import Search from '../Search/Search';
import styles from './Header.module.scss';

export default function Header() {
  const isLogin = false;
  const { setTheme, isLight } = useTheme();
  const { i18n } = useTranslation();

  return (
    <div className={styles.container}>
      <Search />
      <DropDownList /> {/* Support */}
      <DropDownList /> {/* Language */}


      {/* todo delete it*/}
      <div>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('ua')}>UA</button>
      </div>

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
