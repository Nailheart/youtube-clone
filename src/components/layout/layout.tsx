import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { Header, Sidebar } from 'components/common/common';
import styles from './styles.module.scss';

const Layout = () => {
  const location = useLocation();
  const sidebarIsModal = location.pathname !== AppRoute.ROOT;
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true);

  const handleToggleSidebar = (showSidebar: boolean) => {
    setSidebarIsOpen(showSidebar);
  };

  useEffect(() => {
    if (sidebarIsModal) {
      setSidebarIsOpen(false);
    } else {
      setSidebarIsOpen(true);
    }
  }, [sidebarIsModal]);

  return (
    <div className={styles.layout}>
      <Header 
        sidebarIsOpen={sidebarIsOpen}
        toggleSidebar={handleToggleSidebar}
      />

      <div className={styles.container}>
        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          sidebarIsModal={sidebarIsModal}
          toggleSidebar={handleToggleSidebar}
        />
        
        <div className={clsx(styles.content, !sidebarIsOpen && styles.contentFullWidth)}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export { Layout };