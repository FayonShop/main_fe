import { ReactNode } from 'react';
import classNames from '../../../utils/classNames';
import CNavLink from '../../ui/CNavLink/CNavLink';
import styles from './GuideItem.module.scss';

export interface GuideItemProps {
  isOpen?: boolean;
  icon: ReactNode | string;
  title: string;
  link?: string;
}

export default function GuideItem({ isOpen = false, icon, title, link }: GuideItemProps) {
  return (
    <CNavLink to={link || ''}>
      <div className={classNames(styles.container, isOpen ? styles.open : '')}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </CNavLink>
  );
}
