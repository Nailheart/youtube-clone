import { useLoaderData } from 'react-router-dom';
import { PlaylistVideoResponseDto, PlaylistVideosResponseDto } from 'common/types/types';
import { fetchFromAPI } from 'helpers/helpers';
import { VideoCard } from 'components/common/common';
import styles from './styles.module.scss';

const Feed = () => {
  const videos = useLoaderData() as PlaylistVideosResponseDto;

  console.log(videos);
  

  return (
    <div className={styles.feed}>
      {videos.items.map((item: PlaylistVideoResponseDto) => (
        <VideoCard
          key={item.id.id}
          videoId={item.id.id}
          channelId={item.snippet.channelId}
          img={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

const feedLoader = async () => {
  const data = await fetchFromAPI('search?part=snippet&q=New&maxResults=50');

  return data;
}

export { Feed, feedLoader };