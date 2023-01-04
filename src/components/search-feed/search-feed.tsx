import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { SearchResponseDto } from 'common/types/types';
import { fetchFromAPI } from 'helpers/helpers';
import { CardList } from 'components/common/common';
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
  const data = await fetchFromAPI(`search?q=${params.searchTerm}&part=snippet&regionCode=US&maxResults=50&order=date`);

  return data;
}

export { SearchFeed, searchFeedLoader };