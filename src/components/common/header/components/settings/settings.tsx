import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <button className={styles.dotsButton}>
        <Icon name="dots" />
      </button>
    </div>
  );
};

export { Settings };