import { faCartShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import classNames from '../../../utils/classNames';
import GuideItem from '../GuideItem/GuideItem';
import Logo from '../Logo/Logo';
import styles from './GuideList.module.scss';

export interface GuideListProps {
  isOpen?: boolean;
  toggleOpen?: () => void;
}

export default function GuideList({ isOpen = false, toggleOpen }: GuideListProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.container, isOpen ? styles.open : ' ')}>
      <div className={styles.top}>
        <Logo isOpen={isOpen} />

        {toggleOpen && (
          <button className={styles.openBtn} onClick={toggleOpen}>
            <FontAwesomeIcon className={styles.openBtnIcon} icon={faChevronRight} />
          </button>
        )}

        <GuideItem
          link={'/'} icon={<FontAwesomeIcon icon={faCartShopping} />} title={t('sidebar.catalog')} isOpen={isOpen} />
        <GuideItem icon={'II'} title={t('sidebar.title2')} isOpen={isOpen} />
        <GuideItem icon={'III'} title={t('sidebar.title3')} isOpen={isOpen} />
        <GuideItem icon={'IV'} title={t('sidebar.title4')} isOpen={isOpen} />
      </div>
      <div className={styles.bottom}>
        <div>PROFILE</div>
      </div>
    </div>
  );
}
