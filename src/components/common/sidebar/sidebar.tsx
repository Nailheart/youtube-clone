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
  const handleToggleSidebar = () => toggleSidebar(!sidebarIsOpen);
  const handleCloseSidebar = () => toggleSidebar(false);

  return (
    <aside 
      className={clsx(
        styles.sidebar,
        sidebarIsModal && styles.sidebarModal,
        !sidebarIsOpen && styles.sidebarClose,
      )}
    >
      <div className={styles.sidebarWrapper}>
        <div className={styles.logoWrapper}>
          <button  className={styles.toggle} onClick={handleToggleSidebar}>
            <Icon name="burger" />
          </button>
          <Link to={AppRoute.ROOT}>
            <Icon name="logo" width={90} height={20} />
          </Link>
        </div>

        <div className={styles.sidebarContent}>
          {NAVIGATION_ITEMS.map((item, index) => (
            <div key={index} className={styles.navigationGroup}>
              {Boolean(item.navigationGroup) && (
                <h3 className={styles.groupTitle}>{item.navigationGroup}</h3>
              )}
              
              <ul className={styles.links}>
                {item.links.map((item, index) => (
                  <li key={index}>
                    <Link 
                      className={({ isActive }) => clsx(styles.link, isActive && styles.linkActive)}
                      to={item.path}
                    >
                      <Icon name={item.icon} />
                      <span className={styles.linkText}>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.copyright}>
            <span>© 2022 Google LLC</span>
            <span className={styles.createdBy}>
              Created by <a href="https://github.com/Nailheart" target="_blank" rel="noreferrer">Nailheart</a>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={handleCloseSidebar} />
    </aside>
  );
};

export { Sidebar };