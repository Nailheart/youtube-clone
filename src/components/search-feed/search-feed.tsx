import { LoaderFunctionArgs, SearchResponseDto } from 'common/types/types';
import { useLoaderData } from 'hooks/hooks';
import { CardList } from 'components/common/common';
import { searchApi } from 'services/services';
import styles from './styles.module.scss';

const SearchFeed = () => {
  const { items } = useLoaderData() as SearchResponseDto;

  return (
    <div className={styles.searchFeed}>
      <CardList items={items} />
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