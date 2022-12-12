import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from 'components/common/common';
import styles from './styles.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export { Layout };