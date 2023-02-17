import { clsx } from 'helpers/helpers';
import { useLocation, useEffect, useState } from 'hooks/hooks';
import { Header, Sidebar, Outlet, ScrollRestoration } from 'components/common/common';
import styles from './styles.module.scss';

const Layout = () => {
  const location = useLocation();
  const sidebarIsModal = location.pathname.split('/').includes('video');
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true);
  const contentFullWidth = sidebarIsModal ? styles.contentFullWidth : !sidebarIsOpen && styles.contentFullWidth;

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

      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        sidebarIsModal={sidebarIsModal}
        toggleSidebar={handleToggleSidebar}
      />
      
      <div className={clsx(styles.content, contentFullWidth)}>
        <Outlet/>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export { Layout };