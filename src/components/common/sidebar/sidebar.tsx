import { AppRoute } from 'common/enums/enums';
import { Icon, Link } from 'components/common/common';
import styles from './styles.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.link} to={AppRoute.ROOT}>
        <Icon name="home" />
        Home
      </Link>
    </aside>
  );
};

export { Sidebar };