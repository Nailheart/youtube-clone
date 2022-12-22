import { FC } from 'react';
import { Link } from 'react-router-dom';
import { sanitizeHTML } from 'helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  videoId: string;
  channelId: string;
  img: string;
  title: string;
  channelTitle: string;
}

const VideoCard: FC<Props> = ({ videoId, channelId, img, title, channelTitle }) => {
  return (
    <div className={styles.card}>
      <Link to={`/video/${videoId}`}>
        <img className={styles.cardImg} src={img} alt={title} />
      </Link>
      <div className={styles.cardDescription}>
        <Link className={styles.cardTitle} to={`/video/${videoId}`} title={title}>
          {sanitizeHTML(title.slice(0, 80))}
        </Link>
        <Link className={styles.cardChannelTitle} to={`/channel/${channelId}`}>
          {channelTitle}
        </Link>
      </div>
    </div>
  );
};

export { VideoCard };