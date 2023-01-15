import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import {
  ChannelAbout,
  ChannelChannels,
  ChannelCommunity,
  ChannelDetails,
  ChannelHome,
  ChannelLive,
  ChannelPlaylists,
  ChannelShorts,
  ChannelVideos,
  Feed,
  Layout,
  NoMatch,
  SearchFeed,
  VideoDetails,
} from 'components/components';
import {
  channelDetailsLoader,
  channelVideosLoader,
  feedLoader,
  searchFeedLoader,
  videoDetailsLoader,
} from './components/loaders';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={AppRoute.ROOT} element={<Layout />}>
    <Route index element={<Feed />} loader={feedLoader} />
    <Route path={AppRoute.EXPLORE_CATEGORY} element={<Feed />} loader={feedLoader} />
    <Route path={AppRoute.VIDEO_ID} element={<VideoDetails />} loader={videoDetailsLoader} />
    <Route path={AppRoute.CHANNEL_ID} element={<ChannelDetails />} loader={channelDetailsLoader}>
      <Route index element={<ChannelHome />} />
      <Route path={AppRoute.CHANNEL_ID_ABOUT} element={<ChannelAbout />} />
      <Route path={AppRoute.CHANNEL_ID_CHANNELS} element={<ChannelChannels />} />
      <Route path={AppRoute.CHANNEL_ID_COMMUNITY} element={<ChannelCommunity />} />
      <Route path={AppRoute.CHANNEL_ID_LIVE} element={<ChannelLive />} />
      <Route path={AppRoute.CHANNEL_ID_PLAYLISTS} element={<ChannelPlaylists />} />
      <Route path={AppRoute.CHANNEL_ID_SHORTS} element={<ChannelShorts />} />
      <Route path={AppRoute.CHANNEL_ID_VIDEOS} element={<ChannelVideos />} loader={channelVideosLoader} />
    </Route>
    <Route path={AppRoute.SEARCH_TERM} element={<SearchFeed />} loader={searchFeedLoader} />
    <Route path={AppRoute.NO_MATCH} element={<NoMatch />} />
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export { App };
