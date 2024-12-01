import { CSSProperties, MouseEventHandler } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  label: string;
  onClick: MouseEventHandler | undefined;
  style?: CSSProperties;
};

export default function Button({label, onClick, style}: ButtonProps) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}
