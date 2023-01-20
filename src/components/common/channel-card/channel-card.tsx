import { Link } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { insertUrlParams } from 'helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  channelId: string;
  img: string;
  title: string;
}

const ChannelCard: FC<Props> = ({ channelId, img, title }) => {
  return (
    <div className={styles.channelCard}>
      <Link to={insertUrlParams(AppRoute.CHANNEL_ID, {id: channelId})}>
        <img className={styles.img} src={img} alt={title} />
      </Link>
      <Link className={styles.title} to={insertUrlParams(AppRoute.CHANNEL_ID, {id: channelId})}>
        {title}
      </Link>
    </div>
  );
};

export { ChannelCard };