import { AppRoute } from 'common/enums/enums';
import { useRouteError } from 'react-router-dom';
import { Icon, Link } from 'components/common/common';
import styles from './styles.module.scss';

const ErrorElement = () => {
  const error = useRouteError() as Error;

  return (
    <div className={styles.errorElement}>
      <Icon className={styles.icon} name="error" />
      <h1>{error.message}</h1>
      <Link className={styles.link} to={AppRoute.ROOT}>Back to home</Link>
    </div>
  );
};

export { ErrorElement };
