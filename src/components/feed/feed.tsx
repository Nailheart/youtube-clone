import { LoaderFunctionArgs, SearchResponseDto } from 'common/types/types';
import { useLoaderData } from 'hooks/hooks';
import { CardList } from 'components/common/common';
import { searchApi } from 'services/services';
import styles from './styles.module.scss';

const Feed = () => {
  const { items } = useLoaderData() as SearchResponseDto;
  
  return (
    <div className={styles.feed}>
      <CardList items={items} />
    </div>
  );
};

const feedLoader = async ({ params }: LoaderFunctionArgs) => {
  const category = params.category;

  const data = await searchApi.getSearchVideos({
    q: category || '',
    part: ['id', 'snippet'],
    regionCode: 'US',
    maxResults: 50,
  });
  
  return data;
}

export { Feed, feedLoader };