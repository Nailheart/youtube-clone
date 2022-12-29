import styles from './styles.module.scss';

const NoMatch = () => {
  return (
    <div className={styles.container}>
      <h1>You stepped on the wrong path. Go back !!!</h1>
    </div>
  );
};

export { NoMatch };