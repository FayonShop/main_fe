import classNames from '../../../utils/classNames';
import styles from './Logo.module.scss';

export interface GuideItemProps {
  isOpen?: boolean;
}

export default function Logo({ isOpen = false }: GuideItemProps) {
  return (
    <div className={classNames(styles.container, isOpen ? styles.open : '')}>
      <span className={styles.icon}>FS</span>
      <h3 className={styles.title}>Fayon Shop</h3>
    </div>
  );
}
