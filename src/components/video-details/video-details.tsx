import ReactPlayer from 'react-player/youtube';
import { LoaderFunctionArgs, VideoDetailsResponseDto } from 'common/types/types';
import { useLoaderData, useState } from 'hooks/hooks';
import {
  fetchFromAPI,
  getFormattedDate,
  getFormattedNumber,
  sanitizeHTML,
  clsx,
} from 'helpers/helpers';
import { Button, Content } from 'components/common/common';
import styles from './styles.module.scss';

const VideoDetails = () => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  const videoDetails = useLoaderData() as VideoDetailsResponseDto;
  const video = videoDetails.items[0];
  const viewCount = video.statistics.viewCount
    ? getFormattedNumber(Number(video.statistics.viewCount)) 
    : 'unknown';
  ;

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

        <h2 className={styles.title}>{sanitizeHTML(video.snippet.title)}</h2>
        <div>
          <h3>{video.snippet.channelTitle}</h3>
          <Button title='Subscribe' theme='secondary'/>
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
      <div className={styles.suggestedVideos}>Suggested Videos</div>
    </div>
  );
};

const videoDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const data = await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);

  return data;
}

export { VideoDetails, videoDetailsLoader };