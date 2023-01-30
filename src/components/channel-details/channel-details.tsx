import { ChannelDetailsResponseDto, LoaderFunctionArgs } from 'common/types/types';
import { 
  clsx,
  fetchFromAPI,
  insertUrlParams,
  getFormattedNumber,
} from 'helpers/helpers';
import { useLoaderData, useParams } from 'hooks/hooks';
import { Outlet, Link } from 'components/common/common';
import { TABS_NAVIGATION_ITEMS } from './common/constants';
import styles from './styles.module.scss';

const ChannelDetails = () => {
  const { id } = useParams();
  const { items } = useLoaderData() as ChannelDetailsResponseDto;
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
          {TABS_NAVIGATION_ITEMS.map(item => (
            <Link 
              className={({ isActive }) => clsx(styles.tabsBtn, isActive && styles.tabsBtnActive)}
              to={insertUrlParams(item.href, {id: id as string})}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <Outlet/>
      </div>
    </div>
  );
};

const channelDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const channelDetails = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`);

  return channelDetails;
}

export { ChannelDetails, channelDetailsLoader };