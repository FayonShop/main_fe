import './App.css';
import { useTranslation } from 'react-i18next';
import AppRoutes from './App.routes';

function App() {
  const { t } = useTranslation();
  console.log('=============================', t('sidebar.catalog'));

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
