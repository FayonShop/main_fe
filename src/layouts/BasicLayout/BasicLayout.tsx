import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './BasicLayout.module.scss';

export default function BasicLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightSide}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
