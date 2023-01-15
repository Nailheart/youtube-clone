import { FC, SearchChannelResponseDto, SearchVideoResponseDto } from 'common/types/types';
import { VideoCard, ChannelCard } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  items: (SearchChannelResponseDto | SearchVideoResponseDto)[];
}

const CardList: FC<Props> = ({ items }) => {
  return (
    <div className={styles.cardList}>
      <>
        {items.map(item => {
          if ('channelId' in item.id) {
            return (
              <ChannelCard 
                key={item.id.channelId}
                channelId={item.id.channelId}
                img={
                  item.snippet.thumbnails.high.url ??
                  item.snippet.thumbnails.medium.url ??
                  item.snippet.thumbnails.default.url
                }
                title={item.snippet.channelTitle}
              />
            )
          }
          
          return null;
        })}
        {items.map(item => {
          if ('videoId' in item.id) {
            return (
              <VideoCard
                key={item.id.videoId}
                videoId={item.id.videoId}
                channelId={item.snippet.channelId}
                img={
                  item.snippet.thumbnails.high.url ??
                  item.snippet.thumbnails.medium.url ??
                  item.snippet.thumbnails.default.url
                }
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
                publishTime={item.snippet.publishedAt}
              />
            )
          }

          return null;
        })}
      </>
    </div>
  );
};

export { CardList };