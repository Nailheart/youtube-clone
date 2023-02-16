import ReactPlayer from 'react-player/youtube';
import { AppRoute } from 'common/enums/enums';
import {
  LoaderFunctionArgs,
  VideoDetailsResponseDto,
  SuggestedVideosResponseDto,
  ChannelDetailsResponseDto,
  VideoCommentsResponseDto,
  VideoCommentResponseDto,
} from 'common/types/types';
import { 
  useEffect,
  useLoaderData,
  useLocation,
  useRef,
  useState
} from 'hooks/hooks';
import {
  fetchFromAPI,
  getFormattedDate,
  getFormattedNumber,
  sanitizeHTML,
  clsx,
  insertUrlParams,
  defer,
} from 'helpers/helpers';
import { 
  Button,
  VideoCard,
  Content,
  CommentCard,
  Link,
  Suspense,
  Await,
  Spinner,
} from 'components/common/common';
import styles from './styles.module.scss';

const VideoDetails = () => {
  const { pathname } = useLocation();
  const [isShowDescription, setIsShowDescription] = useState(false);
  const {
    videoDetailsData,
    channelDetailsData,
    relatedVideosData,
    commentsData,
  }  = useLoaderData() as {
    videoDetailsData: VideoDetailsResponseDto,
    channelDetailsData: ChannelDetailsResponseDto,
    relatedVideosData: SuggestedVideosResponseDto,
    commentsData: VideoCommentsResponseDto,
  };
  
  const refPlayer = useRef<ReactPlayer>(null);
  const video = videoDetailsData.items[0];
  const channelDetails = channelDetailsData.items[0];
  const viewCount = video.statistics.viewCount
    ? getFormattedNumber(Number(video.statistics.viewCount))
    : 'unknown';
  ;
  const subscriberCount = getFormattedNumber(Number(channelDetails.statistics.subscriberCount));
  const likeCount = getFormattedNumber(Number(video.statistics.likeCount));

  const toggleDescription = () => {
    setIsShowDescription(!isShowDescription);
    if (isShowDescription) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  const setVideoTime = (e: Event) => {
    e.preventDefault();

    const time = (e.target as Element).getAttribute('href');

    if (refPlayer.current && time) {
      refPlayer.current.seekTo(+time, 'seconds');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  
  useEffect(() => {
    setIsShowDescription(false);

    const timeLinks = document.querySelectorAll('.time-link');
    timeLinks.forEach(link => {
      link.addEventListener('click', setVideoTime);
    });
  }, [pathname]);

  return (
    <div className={styles.videoDetails}>
      <div className={styles.container}>
        <div className={styles.playerWrapper}>
          <ReactPlayer          
            ref={refPlayer}
            className={styles.reactPlayer}
            url={`https://www.youtube.com/watch?v=${video.id}`}
            width='100%'
            height='100%'
            playing={true}
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
            {isShowDescription
              ? <>
                {Number(video.statistics.viewCount).toLocaleString('en')} views &nbsp;
                {getFormattedDate(video.snippet.publishedAt, 'MMM dd yyyy')}
              </>
              : <>
                {viewCount} views &nbsp;
                {getFormattedDate(video.snippet.publishedAt, 'distance')}
              </>
            }
          </span>
          <Content
            className={clsx(!isShowDescription && styles.content)}
            content={video.snippet.description}
          />
          <Button 
            className={styles.toggleBtn}
            title={isShowDescription ? 'Show less' : 'Show more'}
            theme="text"
            onClick={toggleDescription}
          />
        </div>
        <Suspense fallback={<Spinner />}>
          <Await resolve={commentsData}>
            {(comments: VideoCommentsResponseDto) => (
              <>
                {Boolean(comments.items) && (
                  <div className={styles.comments}>
                    {comments.items.map((comment: VideoCommentResponseDto) => (
                      <CommentCard
                        key={comment.id}
                        img={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        text={comment.snippet.topLevelComment.snippet.textDisplay}
                        authorName={comment.snippet.topLevelComment.snippet.authorDisplayName}
                        likeCount={comment.snippet.topLevelComment.snippet.likeCount}
                        publishTime={comment.snippet.topLevelComment.snippet.publishedAt}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </Await>
        </Suspense>
      </div>
      <div className={styles.suggestedVideos}>
        <Suspense fallback={<Spinner />}>
          <Await resolve={relatedVideosData}>
            {(relatedVideos: SuggestedVideosResponseDto,) => (
              <>
                {relatedVideos.items.map(video => (
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
                    isHorizontal
                  />
                ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

const videoDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const videoDetailsData: VideoDetailsResponseDto = await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);

  const channelId = videoDetailsData.items[0].snippet.channelId;
  const channelDetailsData: ChannelDetailsResponseDto = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`);

  const relatedVideosData: Promise<SuggestedVideosResponseDto> = fetchFromAPI(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`);
  const commentsData: Promise<VideoCommentsResponseDto> = fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`);

  return defer({videoDetailsData, channelDetailsData, relatedVideosData, commentsData});
}

export { VideoDetails, videoDetailsLoader };