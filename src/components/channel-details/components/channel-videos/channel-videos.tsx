import { LoaderFunctionArgs, ChannelVideosResponseDto } from 'common/types/types';
import { useLoaderData } from 'hooks/hooks';
import { VideoCard } from 'components/common/common';
import { channelVideosApi } from 'services/services';
import styles from './styles.module.scss';

const ChannelVideos = () => {
  const { items: videos } = useLoaderData() as ChannelVideosResponseDto;

  return (
    <>
      <h2>Videos</h2>

      <div className={styles.videos}>
        {videos.map(video => {
          if ('videoId' in video.id) {
            return (
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
              />
            )
          }

          return null;
        })}
      </div>
    </>
  );
};

const channelVideosLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id as string;

  const channelVideos = await channelVideosApi.getChannelVideos({
    channelId: id,
    part: ['id', 'snippet'],
    maxResults: 50,
  });

  return channelVideos;
}

export { ChannelVideos, channelVideosLoader };