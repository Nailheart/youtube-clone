import ReactPlayer from 'react-player/youtube';
import { AppRoute } from 'common/enums/enums';
import {
  LoaderFunctionArgs,
  VideoDetailsResponseDto,
  SuggestedVideosResponseDto,
  ChannelDetailsResponseDto,
} from 'common/types/types';
import { useLoaderData, useState } from 'hooks/hooks';
import {
  fetchFromAPI,
  getFormattedDate,
  getFormattedNumber,
  sanitizeHTML,
  clsx,
  insertUrlParams,
} from 'helpers/helpers';
import { Button, VideoCard, Content, Link } from 'components/common/common';
import styles from './styles.module.scss';

const VideoDetails = () => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  const {videoDetailsData,  relatedVideosData, channelDetailsData}  = useLoaderData() as {
    videoDetailsData: VideoDetailsResponseDto,
    relatedVideosData: SuggestedVideosResponseDto,
    channelDetailsData: ChannelDetailsResponseDto,
  };
  const video = videoDetailsData.items[0];
  const suggestedVideos = relatedVideosData.items;
  const channelDetails = channelDetailsData.items[0];
  const viewCount = video.statistics.viewCount
    ? getFormattedNumber(Number(video.statistics.viewCount))
    : 'unknown';
  ;
  const subscriberCount = getFormattedNumber(Number(channelDetails.statistics.subscriberCount));
  const likeCount = getFormattedNumber(Number(video.statistics.likeCount));

  const toggleDescription = () => setIsShowDescription(!isShowDescription);

  return (
    <div className={styles.videoDetails}>
      <div className={styles.container}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url={`https://www.youtube.com/watch?v=${video.id}`}
            width='100%'
            height='100%'
            controls
          />
        </div>

        <h2 className={styles.videoTitle}>{sanitizeHTML(video.snippet.title)}</h2>
        <div className={styles.info}>
          <div className={styles.channelInfo}>
            <Link to={insertUrlParams(AppRoute.CHANNEL_ID, {id: channelDetails.id})}>
              <img
                className={styles.channelLogo}
                src={
                  channelDetails.snippet.thumbnails.high.url ??
                  channelDetails.snippet.thumbnails.medium.url ??
                  channelDetails.snippet.thumbnails.default.url
                }
                alt="Channel logo"
              />
            </Link>
            
            <div className={styles.channelDescription}>
              <Link to={insertUrlParams(AppRoute.CHANNEL_ID, {id: channelDetails.id})}>
                <h3 className={styles.channelTitle}>{channelDetails.snippet.title}</h3>
              </Link>
              <span className={styles.channelSubscriberCount}>{subscriberCount} subscribers</span>
            </div>
            
            <Button title="Subscribe" theme="secondary" />
          </div>
          <div className={styles.buttons}>
            <div className={styles.estimateButtons}>
              <Button
                className={styles.like}
                title={likeCount}
                theme="primary"
                iconName="like"
              />
              <Button 
                className={styles.dislike}
                title="Dislike"
                theme="primary"
                iconName="like"
                isIconBtn
              />
            </div>
            <Button title="Share" theme="primary" iconName="share" />
            <Button title="Save" theme="primary" iconName="save" />
            <Button title="Show more" theme="primary" iconName="dots" isIconBtn />
          </div>
        </div>

        <div className={clsx(styles.description, !isShowDescription && styles.descriptionHidden)}>
          <span className={styles.statistics}>
            {viewCount} views &nbsp;
            {getFormattedDate(video.snippet.publishedAt, 'MMM dd yyyy')}
          </span>
          <Content
            className={clsx(!isShowDescription && styles.content)}
            content={video.snippet.description}
          />
          <Button 
            className={styles.toggleBtn}
            title={isShowDescription ? 'Show less' : 'Show more'}
            onClick={toggleDescription}
          />
        </div>
      </div>
      <div className={styles.suggestedVideos}>
        {suggestedVideos.map(video => (
          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            channelId={video.snippet.channelId}
            img={
              video.snippet.thumbnails.high.url ??
              video.snippet.thumbnails.medium.url ??
              video.snippet.thumbnails.default.url
            }
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            publishTime={video.snippet.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

const videoDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const videoDetailsData: VideoDetailsResponseDto = await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);
  const relatedVideosData: SuggestedVideosResponseDto = await fetchFromAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`);

  const channelId = videoDetailsData.items[0].snippet.channelId;
  const channelDetailsData: ChannelDetailsResponseDto = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`);
  
  return {videoDetailsData,  relatedVideosData, channelDetailsData};
}

export { VideoDetails, videoDetailsLoader };