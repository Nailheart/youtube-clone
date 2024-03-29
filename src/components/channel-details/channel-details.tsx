import { ChannelDetailsResponseDto, LoaderFunctionArgs } from 'common/types/types';
import { 
  clsx,
  insertUrlParams,
  getFormattedNumber,
} from 'helpers/helpers';
import { useLoaderData, useParams } from 'hooks/hooks';
import { Outlet, Link, HorizontalScroll } from 'components/common/common';
import { TABS_NAVIGATION_ITEMS } from './common/constants';
import { channelDetailsApi } from 'services/services';
import styles from './styles.module.scss';

const ChannelDetails = () => {
  const { id } = useParams();
  const { items } = useLoaderData() as ChannelDetailsResponseDto;

  if (!items) {
    return <h1 className={styles.errorTitle}>Can't find channel</h1>
  }

  const channelDetails = items[0];
  const subscriberCount = getFormattedNumber(Number(channelDetails.statistics.subscriberCount));

  return (
    <div className={styles.channelDetails}>
      <img 
        className={styles.banner}
        src={channelDetails.brandingSettings.image.bannerExternalUrl}
        alt="Channel banner"
      />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.channelInfo}>
            <img 
              className={styles.channelAvatar}
              src={
                channelDetails.snippet.thumbnails.high.url ??
                channelDetails.snippet.thumbnails.medium.url ??
                channelDetails.snippet.thumbnails.default.url
              }
              alt="Channel avatar"
            />
            
            <div className={styles.channelDescription}>
              <h1 className={styles.channelTitle}>{channelDetails.snippet.title}</h1>
              <span className={styles.textSecondary}>{channelDetails.snippet.customUrl}</span>
              <span className={styles.textSecondary}>{subscriberCount} subscribers</span>
            </div>
          </div>

          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>

        <div className={styles.tabs}>
          <HorizontalScroll>
            {TABS_NAVIGATION_ITEMS.map(item => (
              <Link
                key={item.title}
                className={({ isActive }) => clsx(styles.tabsLink, isActive && styles.tabsLinkActive)}
                to={insertUrlParams(item.href, {id: id as string})}
              >
                {item.title}
              </Link>
            ))}
          </HorizontalScroll>
        </div>

        <Outlet/>
      </div>
    </div>
  );
};

const channelDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id as string;

  const channelDetails = await channelDetailsApi.getChannelDetails({
    id,
    part: ['snippet', 'statistics'],
  });

  return channelDetails;
}

export { ChannelDetails, channelDetailsLoader };