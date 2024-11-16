import {PropsWithChildren} from "react";
import styles from "./GuideTab.module.scss";
import classNames from "../../../utils/classNames";

export interface GuideTabProps extends PropsWithChildren {
  isLeftOpen?: boolean
}

export default function GuideTab(
  { children, isLeftOpen = false }: GuideTabProps
) {
  return (
    <div className={classNames(styles.container, isLeftOpen ? styles.open : '')}>
      <div className={classNames(styles.overlay)}></div>
      {children}
      <button onClick={() => console.log('CLICK')}>FFFFFFFFFFFFFFFFFFFF</button>
    </div>
  );
}
