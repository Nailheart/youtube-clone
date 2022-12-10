import { AppRoute } from 'common/enums/enums';
import { Link } from 'components/common/common';
import { Search } from './components/components';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={AppRoute.ROOT}>Logo</Link>
      <Search/>
    </header>
  );
};

export { Header };