import { AppRoute } from 'common/enums/enums';
import { ChannelDetailsResponseDto, LoaderFunctionArgs } from 'common/types/types';
import { fetchFromAPI, insertUrlParams } from 'helpers/helpers';
import { useLoaderData, useParams } from 'hooks/hooks';
import { Outlet, Link } from 'components/common/common';
import styles from './styles.module.scss';

const ChannelDetails = () => {
  const { id } = useParams();
  const { items } = useLoaderData() as ChannelDetailsResponseDto;
  const channelDetails = items[0];

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
              <span className={styles.textSecondary}>{channelDetails.statistics.subscriberCount} subscribers</span>
            </div>
          </div>

          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>

        {/* TODO: fix  */}
        <div className={styles.tabs}>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID, {id: id as string})}>Home</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_VIDEOS, {id: id as string})}>Videos</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_SHORTS, {id: id as string})}>Shorts</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_LIVE, {id: id as string})}>Live</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_PLAYLISTS, {id: id as string})}>Playlists</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_COMMUNITY, {id: id as string})}>Community</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_CHANNELS, {id: id as string})}>Channels</Link>
          <Link className={styles.tabsBtn} to={insertUrlParams(AppRoute.CHANNEL_ID_ABOUT, {id: id as string})}>About</Link>
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