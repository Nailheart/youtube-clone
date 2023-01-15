import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Icon, Link } from 'components/common/common';
import { Search, Settings } from './components/components';
import styles from './styles.module.scss';

type Props = {
  sidebarIsOpen: boolean;
  toggleSidebar: (showSidebar: boolean) => void;
}

const Header: FC<Props> = ({ sidebarIsOpen, toggleSidebar }) => {
  const handleToggleSidebar = () => {
    toggleSidebar(!sidebarIsOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <button  className={styles.toggle} onClick={handleToggleSidebar}>
          <Icon name="burger" />
        </button>

        <Link to={AppRoute.ROOT}>
          <Icon name="logo" width={90} height={20} />
        </Link>
      </div>

      <Search />
      <Settings />
    </header>
  );
};

export { Header };