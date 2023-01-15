import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { insertUrlParams, sanitizeHTML, getFormattedDate } from 'helpers/helpers';
import { Link } from 'components/common/common';
import VideoPlaceholder from 'assets/img/video_placeholder.jpg';
import styles from './styles.module.scss';

type Props = {
  videoId: string;
  channelId: string;
  img: string;
  title: string;
  channelTitle: string;
  publishTime: string;
}

const VideoCard: FC<Props> = ({ videoId, channelId, img, title, channelTitle, publishTime }) => {
  return (
    <div className={styles.card}>
      <Link to={insertUrlParams(AppRoute.VIDEO_ID, {id: videoId})}>
        <img 
          className={styles.cardImg}
          src={img ?? VideoPlaceholder}
          alt={title}
        />
      </Link>
      <div className={styles.cardDescription}>
        <Link 
          className={styles.cardTitle}
          to={insertUrlParams(AppRoute.VIDEO_ID, {id: videoId})}
          title={title}
        >
          {sanitizeHTML(title.slice(0, 80))}
        </Link>
        <Link 
          className={styles.textSecondary}
          to={insertUrlParams(AppRoute.CHANNEL_ID, {id: channelId})}
        >
          {channelTitle}
        </Link>
        <span className={styles.textSecondary}>{getFormattedDate(publishTime, 'distance')} ago</span>
      </div>
    </div>
  );
};

export { VideoCard };