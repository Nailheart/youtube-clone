import ReactPlayer from "react-player/youtube"; // TODO: create component player ?
import { LoaderFunctionArgs, VideoDetailsResponseDto } from "common/types/types";
import { useLoaderData } from "hooks/hooks";
import { fetchFromAPI } from "helpers/helpers";
import styles from './styles.module.scss';

const VideoDetails = () => {
  const video = useLoaderData() as VideoDetailsResponseDto;
  const videoId = video.items[0].id;

  return (
    <div className={styles.videoDetails}>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width='100%'
          height='100%'
          controls
        />
      </div>
      <div className={styles.suggestedVideos}>Suggested Videos</div>
    </div>
  );
};

const videoDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const data = await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${params.id}`);

  return data;
}

export { VideoDetails, videoDetailsLoader };