import { clsx } from 'helpers/helpers';
import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Icon, Link } from 'components/common/common';
import { NAVIGATION_ITEMS } from './constants';
import styles from './styles.module.scss';

type Props = {
  sidebarIsOpen: boolean;
  sidebarIsModal?: boolean;
  toggleSidebar: (showSidebar: boolean) => void;
};

const Sidebar: FC<Props> = ({ sidebarIsOpen, sidebarIsModal, toggleSidebar }) => {
  const handleToggleSidebar = () => {
    toggleSidebar(!sidebarIsOpen);
  };

  const handleCloseSidebar = () => {
    toggleSidebar(false);
  };

  return sidebarIsModal ? (
    <div className={clsx(styles.modalWrapper, !sidebarIsOpen && styles.closeModal)}>
      <aside className={styles.modalSidebar}>
        <div className={styles.logoWrapper}>
          <button  className={styles.toggle} onClick={handleToggleSidebar}>
            <Icon name="burger" />
          </button>

          <Link to={AppRoute.ROOT}>
            <Icon name="logo" width={90} height={20} />
          </Link>
        </div>

        <div className={styles.modalContent}>
          {NAVIGATION_ITEMS.map((item, index) => (
            <div key={index} className={styles.navigationGroup}>
              {Boolean(item.navigationGroup) && (
                <h3 className={styles.groupTitle}>{item.navigationGroup}</h3>
              )}
              
              <ul className={styles.links}>
                {item.links.map((item, index) => (
                  <li key={index}>
                    <Link className={styles.link} to={item.path}>
                      <Icon name={item.icon} />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.copyright}>© 2022 Google LLC</div>
        </div>
      </aside>
      <div className={styles.overlay} onClick={handleCloseSidebar} />
    </div>
  ) : (
    <aside className={clsx(styles.sidebar, !sidebarIsOpen && styles.sidebarHidden)}>
      {NAVIGATION_ITEMS.map((item, index) => (
        <div key={index} className={styles.navigationGroup}>
          {Boolean(item.navigationGroup) && (
            <h3 className={styles.groupTitle}>{item.navigationGroup}</h3>
          )}
          
          <ul className={styles.links}>
            {item.links.map((item, index) => (
              <li key={index}>
                <Link className={styles.link} to={item.path}>
                  <Icon name={item.icon} />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.copyright}>© 2022 Google LLC</div>
    </aside>
  );
};

export { Sidebar };