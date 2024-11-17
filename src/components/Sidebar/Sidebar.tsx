import { useState } from 'react';
import GuideList from './GuideList/GuideList';
import GuideTab from './GuideTab/GuideTab';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <GuideList isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <GuideTab isLeftOpen={isOpen} />
    </div>
  );
}
