import { Link } from 'react-router-dom';
import { FC } from 'common/types/types';
import styles from './styles.module.scss';

type Props = {
  channelId: string;
  img: string;
  title: string;
}

const ChannelCard: FC<Props> = ({ channelId, img, title }) => {
  return (
    <div className={styles.channelCard}>
      <Link to={`/channel/${channelId}`}>
        <img className={styles.img} src={img} alt={title} />
      </Link>
      <Link className={styles.title} to={`/channel/${channelId}`}>
        {title}
      </Link>
    </div>
  );
};

export { ChannelCard };