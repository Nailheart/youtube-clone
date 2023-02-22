import { LoaderFunctionArgs, SearchResponseDto } from 'common/types/types';
import { useEffect, useLoaderData, useParams, useState } from 'hooks/hooks';
import { CardList, InfiniteScroll } from 'components/common/common';
import { searchApi } from 'services/services';
import styles from './styles.module.scss';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { items, nextPageToken } = useLoaderData() as SearchResponseDto;
  const [videos, setVideos] = useState(items);
  const [pageToken, setPageToken] = useState(nextPageToken);

  const getVideos = async () => {
    const videosData = await searchApi.getSearchVideos({
      q: searchTerm || '',
      part: ['id', 'snippet'],
      regionCode: 'US',
      order: 'relevance',
      maxResults: 50,
      type: 'video',
      pageToken: pageToken,
    });

    setVideos([...videos, ...videosData.items]);
    setPageToken(videosData.nextPageToken);
  }

  useEffect(() => {
    setVideos(items);
    setPageToken(nextPageToken);
  }, [searchTerm]);

  return (
    <div className={styles.searchFeed}>
      <InfiniteScroll 
        getData={getVideos}
        hasMore={Boolean(pageToken)}
      >
        <CardList items={videos} />
      </InfiniteScroll>
    </div>
  );
};

const searchFeedLoader = async ({ params }: LoaderFunctionArgs) => {
  const { searchTerm } = params;

  const data = await searchApi.getSearchVideos({
    q: searchTerm || '',
    part: ['id', 'snippet'],
    regionCode: 'US',
    order: 'relevance',
    maxResults: 50,
  });

  return data;
}

export { SearchFeed, searchFeedLoader };