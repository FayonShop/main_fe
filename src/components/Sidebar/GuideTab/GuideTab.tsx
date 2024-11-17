import { PropsWithChildren } from 'react';
import classNames from '../../../utils/classNames';
import styles from './GuideTab.module.scss';

export interface GuideTabProps extends PropsWithChildren {
  isLeftOpen?: boolean;
}

export default function GuideTab({ children, isLeftOpen = false }: GuideTabProps) {
  return (
    <div className={classNames(styles.container, isLeftOpen ? styles.open : '')}>
      <div className={classNames(styles.overlay)} />
      {children}
      <button>FFFFFFFFFFFFFFFFFFFF</button>
    </div>
  );
}
