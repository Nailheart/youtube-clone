import { LoaderFunctionArgs, SearchResponseDto } from 'common/types/types';
import { useEffect, useLoaderData, useParams, useState } from 'hooks/hooks';
import { CardList, InfiniteScroll } from 'components/common/common';
import { searchApi } from 'services/services';
import styles from './styles.module.scss';

const Feed = () => {
  const { category } = useParams();
  const { items, nextPageToken } = useLoaderData() as SearchResponseDto;
  const [videos, setVideos] = useState(items);
  const [pageToken, setPageToken] = useState(nextPageToken);

  const getVideos = async () => {
    const videosData = await searchApi.getSearchVideos({
      q: category || '',
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
  }, [category]);

  return (
    <div className={styles.feed}>
      <InfiniteScroll 
        getData={getVideos}
        hasMore={Boolean(pageToken)}
      >
        <CardList items={videos} />
      </InfiniteScroll>
    </div>
  );
};

const feedLoader = async ({ params }: LoaderFunctionArgs) => {
  const category = params.category;

  const data = await searchApi.getSearchVideos({
    q: category || '',
    part: ['id', 'snippet'],
    regionCode: 'US',
    order: 'relevance',
    maxResults: 50,
    type: 'video',
  });
  
  return data;
}

export { Feed, feedLoader };