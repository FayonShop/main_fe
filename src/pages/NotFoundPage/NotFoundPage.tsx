import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button.tsx';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p>Ooops...</p>
      <p>404 Not Found</p>
      <Button
        label={'Back to Product page'}
        onClick={() => navigate('/', { replace: true })}
        style={{  }}
      />
    </div>
  );
}
