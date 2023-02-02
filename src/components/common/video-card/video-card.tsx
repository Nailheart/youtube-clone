import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { insertUrlParams, sanitizeHTML, getFormattedDate, clsx } from 'helpers/helpers';
import { Button, Link } from 'components/common/common';
import VideoPlaceholder from 'assets/img/video_placeholder.jpg';
import styles from './styles.module.scss';

type Props = {
  videoId: string;
  channelId: string;
  img: string;
  title: string;
  channelTitle: string;
  publishTime: string;
  isHorizontal?: boolean;
}

const VideoCard: FC<Props> = ({
  videoId,
  channelId,
  img,
  title,
  channelTitle,
  publishTime,
  isHorizontal,
}) => {
  return (
    <div className={clsx(styles.card, isHorizontal && styles.cardHorizontal)}>
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
        <Button
          className={styles.toggle}
          title="Show more"
          iconName="dots"
          isIconBtn
        />
      </div>
    </div>
  );
};

export { VideoCard };