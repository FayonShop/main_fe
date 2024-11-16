import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './Search.module.scss'

export default function Search () {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search"></input>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </button>
    </div>
  );
}
