import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { PlaylistVideoResponseDto, PlaylistVideosResponseDto } from 'common/types/types';
import { fetchFromAPI } from 'helpers/helpers';
import { VideoCard } from 'components/common/common';
import styles from './styles.module.scss';

const SearchFeed = () => {
  const videos = useLoaderData() as PlaylistVideosResponseDto;

  return (
    <div className={styles.searchFeed}>
      {videos.items.map((item: PlaylistVideoResponseDto) => (
        <VideoCard
          key={item.id.videoId}
          videoId={item.id.videoId}
          channelId={item.snippet.channelId}
          img={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

const searchFeedLoader = async ({ params }: LoaderFunctionArgs) => {
  const data = await fetchFromAPI(`search?q=${params.searchTerm}&part=snippet&regionCode=US&maxResults=50&order=date`);

  return data;
}

export { SearchFeed, searchFeedLoader };