import { FC } from 'react';
import styles from './styles.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.spinner__item}></div>
        <div className={styles.spinner__item}></div>
        <div className={styles.spinner__item}></div>
        <div className={styles.spinner__item}></div>
      </div>
    </div>
  );
};

export { Spinner };