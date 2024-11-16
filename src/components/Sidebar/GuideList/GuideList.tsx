import styles from "./GuideList.module.scss";
import GuideItem from "../GuideItem/GuideItem";
import classNames from "../../../utils/classNames";
import Logo from "../Logo/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export interface GuideListProps {
  isOpen?: boolean;
  toggleOpen?: () => void;
}

export default function GuideList(
  {isOpen = false, toggleOpen}: GuideListProps
) {
  return (
    <div className={classNames(styles.container, isOpen ? styles.open : ' ')}>
      <div className={styles.top}>
        <Logo isOpen={isOpen}/>

        {toggleOpen && (
          <button className={styles.openBtn} onClick={toggleOpen}>
            <FontAwesomeIcon className={styles.openBtnIcon} icon={faChevronRight} />
          </button>
        )}

        <GuideItem link={'/'} icon={<FontAwesomeIcon icon={faCartShopping} />} title={'Catalog'} isOpen={isOpen}/>
        <GuideItem icon={'II'} title={'Title 3'} isOpen={isOpen}/>
        <GuideItem icon={'IV'} title={'Title 4'} isOpen={isOpen}/>
        <GuideItem icon={'V'} title={'Title 5'} isOpen={isOpen}/>
      </div>
      <div className={styles.bottom}>
        <div>PROFILE</div>
      </div>
    </div>
  );
}
